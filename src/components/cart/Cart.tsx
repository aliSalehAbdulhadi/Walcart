/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import CartButtons from "../cartButtons/CartButtons";
import useUpdateCartStore from "../../context/updateCartStore/updateCartStore";
import useToggleStore from "../../context/toggleStore/toggleStore";
import useStore from "../../context/updateCartStore/updateCartStore";
import { formatCurrency } from "../../utilities/formatCurrency";

const Cart = () => {
  const { items } = useUpdateCartStore((state) => ({ items: state.cartItems }));
  const { isOpen } = useToggleStore((state) => ({ isOpen: state.isOpenCart }));
  const toggleCart = useToggleStore((state) => state.toggleCart);
  const clear = useStore((state) => state.clearCart);

  let total: number[] = [];
  items?.map((item: { price: number; quantity: number }) =>
    total.push(item?.price * item?.quantity),
  );

  return (
    <div
      role="cartDiv"
      className={`flex w-full z-40 absolute top-0 min-h-[120vh]  scroll-m-40 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div
        className={`max-w-[30rem] min-w-[30rem] min-h-full bg-white opacity-100`}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-Comfortaa mx-5 py-10 text-secondaryColor">
            Cart
          </h1>
          <div
            onClick={() => {
              toggleCart(false);
              document.body.style.overflow = "visible";
            }}
          >
            <img
              className="h-6 opacity-70 mx-10 cursor-pointer"
              src="svg/close.svg"
              alt="close icon"
            />
          </div>
        </div>
        <div className="px-[1rem] overflow-y-scroll max-h-[700px] scrollBar shadow-inner flex flex-col">
          {items.length === 0 ? (
            <h1 className=" text-secondaryColor font-Comfortaa mt-10 self-center font-bold">
              No items in cart
            </h1>
          ) : (
            items.map((item: any) => (
              <div
                key={item.id}
                className="flex shadow-2xl min-h-[15rem] min-w-[25rem] my-5 items-center justify-center scale-[.85]"
              >
                <div className="w-[200px] h-[200px]">
                  <img
                    className="ml-2 max-h-[200px] max-w-[150px] object-cover"
                    src={item.url}
                    alt="card pic"
                  />
                </div>
                <div className="flex flex-col mx-5 mb-1 w-[70%]">
                  <div className="py-5 flex flex-col items-center justify-center ">
                    <h1>{item?.title}</h1>
                    <span className="opacity-60">
                      {formatCurrency(item?.price * item.quantity)}
                    </span>
                  </div>
                  <div className="mb-10">
                    <CartButtons id={item.id} quantity={item?.quantity} />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {items.length > 0 ? (
          <div className="flex items-center justify-center mt-5">
            <span className="opacity-60 font-Comfortaa min-w-[200px] ">
              Total: {formatCurrency(total.reduce((a, b) => a + b, 0))}
            </span>
            <button
              onClick={() => {
                clear(),
                  setTimeout(() => {
                    toggleCart(false);
                  }, 500);
              }}
              className="py-1 px-3 bg-secondaryColor text-white font-Comfortaa text-sm tracking-widest outline-none ml-10"
            >
              Clear Cart
            </button>
          </div>
        ) : null}
      </div>
      <div
        onClick={() => {
          toggleCart(false), (document.body.style.overflow = "visible");
        }}
        className="overflow-hidden bg-black w-full opacity-50 "
      />
    </div>
  );
};

export default Cart;
