/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { formatCurrency } from "../../utilities/formatCurrency";

const StoreCard = ({ title, description, price, url, id }: any) => {
  // const [cartItems, setCartItems] = useState<any>([]);
  // const [quantity, setQuantity] = useState<any>([]);

  // const addToCart = () => {
  //   cartItems.filter((item: string) => {
  //     if (item === id) {
  //       return setQuantity((prev: number[]) => [...prev, item]);
  //     }
  //   });
  // };

  // const removeFromCart = () => {
  //   cartItems.find((item: string) => {
  //     if (item === id) {
  //       return setQuantity((prev) =>
  //         prev.find((item) => {
  //           if (item === id) {
  //             return prev.filter((item) => item !== id);
  //           }
  //         }),
  //       );
  //     }
  //   });
  // };

  const test = true;

  return (
    <div className="flex flex-col shadow-2xl min-h-[30rem] min-w-[10rem]  lg:min-w-[20rem]">
      <img className="h-[200px] object-cover" src={url} alt="card pic" />
      <div className="py-5 flex flex-col items-center justify-center">
        <h1>{title}</h1>
        <h2 className="py-5 mx-5">{description}</h2>
        <span className="">{formatCurrency(price)}</span>
      </div>
      <div className="h-full w-full flex items-end justify-center">
        {test ? (
          <div className="flex flex-col text-white w-full">
            <div className="flex items-center justify-center mb-5">
              <button className="px-5 py-2 bg-secondaryColor rounded transition-all hover:bg-red-400">
                -
              </button>
              <div className="mx-5 text-black">5</div>
              <button className="px-5 py-2 bg-secondaryColor rounded transition-all hover:bg-red-400">
                +
              </button>
            </div>
            <button className="py-2 bg-secondaryColor transition-all hover:bg-red-400">
              Remove from cart
            </button>
          </div>
        ) : (
          <button className="w-full py-5 bg-red-500 items-center justify-center transition-all hover:bg-red-400">
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default StoreCard;
