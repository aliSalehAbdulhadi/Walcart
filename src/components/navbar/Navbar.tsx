/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import useStore from "../../context/updateCartStore/updateCartStore";
import useToggleStore from "../../context/toggleStore/toggleStore";
import clickOutside from "../../utilities/clickOutside";

const Navbar = () => {
  const { items } = useStore((state) => ({ items: state.cartItems }));
  const isOpenNav = useToggleStore((state) => state.isOpenNav);
  const toggleCart = useToggleStore((state) => state.toggleCart);
  const toggleNav = useToggleStore((state) => state.toggleNav);

  let navNode = clickOutside(() => {
    toggleNav(false);
  });

  return (
    <div
      className={`flex ${
        isOpenNav ? "flex-col" : "flex-row"
      } md:flex-row items-center justify-between px-[3rem] md:px-[8rem] min-h-[10vh] drop-shadow-sm font-Comfortaa bg-white  py-5 md:py-0`}
    >
      <div className="text-3xl font-Courgette text-secondaryColor mr-0 md:mr-10">
        <Link href="/">Walcart</Link>
      </div>

      <div
        onClick={() => toggleNav(true)}
        className={`${isOpenNav ? "hidden" : "block"} md:hidden`}
      >
        <img
          className="h-8 cursor-pointer"
          src="svg/burger.svg"
          alt="burger icon"
        />
      </div>

      <div
        ref={navNode}
        className={`flex flex-col md:flex-row items-center justify-evenly w-full ${
          isOpenNav ? "block" : "hidden"
        } md:flex`}
      >
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-end w-fit md:w-[500px] mt-3 md:mt-0  text-black">
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

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-end w-[250px]  cursor-pointer select-none">
          <div
            role="cartButton"
            onClick={() => {
              (document.body.style.overflow = "hidden"), toggleCart(true);
            }}
            className="md:mr-5 mt-3 md:mt-0 navHover relative py-3 px-3 shadow-lg rounded-full"
          >
            <img
              className="h-6 opacity-90"
              src="svg/cart.svg"
              alt="cart icon"
              title="Shopping cart"
            />

            {items.length > 0 ? (
              <div className="bg-red-500 py-1 px-2 rounded-full absolute text-center text-[.6rem] text-white opacity-90 left-[0px] top-8">
                <h1 role="cartLength">{items.length}</h1>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
