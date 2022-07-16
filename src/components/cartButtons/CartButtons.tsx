import React from "react";
import useStore from "../../context/updateCartStore/updateCartStore";

const CartButtons = ({ id, quantity }: { id: number; quantity: number }) => {
  const removeItem = useStore((state) => state.removeItem);
  const increaseQuantity = useStore((state) => state.increaseQuantity);
  const decreaseQuantity = useStore((state) => state.decreaseQuantity);

  return (
    <div className="flex flex-col text-white w-full">
      <div className="flex items-center justify-center mb-5">
        <button
          onClick={() => decreaseQuantity(id)}
          className="px-5 py-2 bg-secondaryColor rounded transition-all hover:bg-red-400"
        >
          -
        </button>
        <div className="mx-5 text-black w-5 text-center">{quantity}</div>
        <button
          onClick={() => increaseQuantity(id)}
          className="px-5 py-2 bg-secondaryColor rounded transition-all hover:bg-red-400"
        >
          +
        </button>
      </div>
      <button
        onClick={() => removeItem(id)}
        className="py-2 bg-secondaryColor transition-all hover:bg-red-400"
      >
        Remove from cart
      </button>
    </div>
  );
};

export default CartButtons;
