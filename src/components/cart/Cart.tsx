/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import CartButtons from "../cartButtons/CartButtons";
import useUpdateCartStore from "../../context/updateCartStore/updateCartStore";
import useToggleStore from "../../context/toggleStore/toggleStore";
import { formatCurrency } from "../../utilities/formatCurrency";

const Cart = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const { items } = useUpdateCartStore((state) => ({ items: state.cartItems }));
  const { isOpen } = useToggleStore((state) => ({ isOpen: state.isOpen }));
  const toggle = useToggleStore((state) => state.toggle);

  return mounted ? (
    <div
      onClick={() => toggle()}
      className={`flex w-full z-40 absolute top-0 min-h-full ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      <div className="min-w-[30%] min-h-full bg-white opacity-100">
        <h1 className="text-3xl font-Comfortaa mx-5 py-10">Cart</h1>
        <div className="px-[1rem] xl:px-[8rem] ">
          {items.map((item: any) => (
            <div
              key={item.id}
              className="flex flex-col shadow-2xl min-h-[20rem] max-w-[10rem]  lg:max-w-[20rem] my-5"
            >
              <img
                className="h-[150px] object-cover"
                src={item.url}
                alt="card pic"
              />
              <div className="py-5 flex flex-col items-center justify-center">
                <h1>{item?.title}</h1>
                <span className="">
                  {formatCurrency(item?.price * item.quantity)}
                </span>
              </div>
              <div className="h-full w-full flex items-end justify-center">
                <CartButtons id={item.id} quantity={item?.quantity} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-black w-full opacity-50" />
    </div>
  ) : null;
};

export default Cart;
