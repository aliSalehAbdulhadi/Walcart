/* eslint-disable @next/next/no-img-element */
import { RatingStar } from "rating-star";
import ReactTextCollapse from "react-text-collapse";
import { formatCurrency } from "../../utilities/formatCurrency";
import useStore from "../../context/updateCartStore/updateCartStore";
import CartButtons from "../cartButtons/CartButtons";

const StoreCard = ({ title, description, price, url, id, rating }: any) => {
  const { items } = useStore((state) => ({ items: state.cartItems }));
  const addItem = useStore((state) => state.addItem);

  const item: any = items.find((item: any) => item.id === id);

  const TEXT_COLLAPSE_OPTIONS = {
    collapse: false, // default state when component rendered
    collapseText: "... show more", // text to show when collapsed
    expandText: "show less", // text to show when expanded
    minHeight: 50, // component height when closed
    maxHeight: 150, // expanded to
    textStyle: {
      // pass the css for the collapseText and expandText here
      color: "#ef4444",
      fontSize: "15px",
      cursor: "pointer",
    },
  };
  return (
    <div className="flex flex-col shadow-2xl min-h-[30rem] min-w-[10rem]  lg:min-w-[20rem]">
      <img className="h-[200px] object-cover" src={url} alt="card pic" />
      <div className="py-5 flex flex-col items-center justify-center">
        <h1 className="mx-5">{title}</h1>

        <div className="mt-1">
          <RatingStar maxScore={5} id="123" rating={rating.rate} />
        </div>
        <p className="self-start mx-5 mt-5 mb-1 opacity-60">Description:</p>
        <div className="mb-5 mx-5">
          <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
            {description}
          </ReactTextCollapse>
        </div>

        <span className="opacity-60">
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
  );
};

export default StoreCard;
