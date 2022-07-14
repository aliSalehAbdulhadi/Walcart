/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import useStore from "../../context/updateCartStore/updateCartStore";
import useToggleStore from "../../context/toggleStore/toggleStore";

const Navbar = () => {
  const { items } = useStore((state) => ({ items: state.cartItems }));
  const toggle = useToggleStore((state) => state.toggle);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-[8rem] min-h-[10vh] drop-shadow-sm font-Comfortaa bg-white">
      <div className="text-3xl font-Courgette text-secondaryColor mr-0 md:mr-10">
        <Link href="/">Walcart</Link>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center md:justify-end w-[400px] text-black">
        <div className="md:mr-5 navHover">
          <Link href="/">Home</Link>
        </div>
        <div className="md:mr-5 navHover">
          <Link href="/Store">Store</Link>
        </div>
        <div className="md:mr-5 navHover">
          <Link href="/About">About</Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center md:justify-end w-[250px]">
        <div onClick={() => toggle()} className="md:mr-5 navHover relative">
          <img
            className="h-7 cursor-pointer"
            src="svg/cart.svg"
            alt="cart icon"
          />

          {items.length > 0 ? (
            <div className="bg-red-400 py-2 px-3 rounded-full absolute text-center text-[.6rem] text-white opacity-90 left-[-8px] top-4">
              <span className="">{items.length}</span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
