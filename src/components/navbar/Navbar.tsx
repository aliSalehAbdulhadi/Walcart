import Link from "next/link";

const Navbar = () => {
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
        <div className="md:mr-5 navHover">
          <Link href="/Cart">Cart</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
