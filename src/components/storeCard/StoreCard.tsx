/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { formatCurrency } from "../../utilities/formatCurrency";
import useStore from "../../context/updateCartStore/updateCartStore";
import CartButtons from "../cartButtons/CartButtons";

const StoreCard = ({ title, description, price, url, id }: any) => {
  // fix hydration error
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { items } = useStore((state) => ({ items: state.cartItems }));
  const addItem = useStore((state) => state.addItem);
  const clear = useStore((state) => state.clearCart);

  const item: any = items.find((item: any) => item.id === id);

  return mounted ? (
    <div className="flex flex-col shadow-2xl min-h-[30rem] min-w-[10rem]  lg:min-w-[20rem]">
      <img className="h-[200px] object-cover" src={url} alt="card pic" />
      <div className="py-5 flex flex-col items-center justify-center">
        <h1>{title}</h1>
        <h2 className="py-5 mx-5">{description}</h2>
        <span className="">
          {formatCurrency(item?.quantity ? price * item?.quantity : price)}
        </span>
      </div>
      <div className="h-full w-full flex items-end justify-center">
        {items?.some((item: any) => item.id === id) ? (
          <CartButtons id={id} quantity={item?.quantity} />
        ) : (
          <button
            onClick={() =>
              addItem({
                title: title,
                price: price,
                id: id,
                url: url,
                description: description,
                quantity: 1,
              })
            }
            className="w-full py-5 bg-red-500 items-center justify-center transition-all hover:bg-red-400 text-white"
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  ) : null;
};

export default StoreCard;
