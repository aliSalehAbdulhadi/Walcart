import React from "react";
import { NextPage } from "next";
import Link from "next/link";

const HomePage: NextPage = () => {
  return (
    <div className="background min-h-[90vh] font-Comfortaa ">
      <div className="flex flex-row items-center min-h-[90vh] opacity-100 clip">
        <div className="px-3 md:px-[8rem] md:w-[100%] lg:w-[75%] relative text-white lg:ml-10">
          <h1 className="mb-10 text-[1.4rem] md:text-[2rem] lg:text-[3rem] wrap">
            Start shopping from anywhere!
          </h1>
          <p className=" lg:w-[70%] text-[.7rem] md:text-[.8rem] lg:text-lg leading-5 md:leading-[2rem] font-[350]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            voluptatem minus earum officia iste dolorem natus veniam
            voluptatibus est illum nam, dicta inventore animi incidunt minima
            harum reprehenderit numquam accusamus.
          </p>

          <Link href="/Store">
            <button className="mt-10 py-3 px-[3rem] lg:py-5 lg:px-[5rem] tracking-[0.1rem] bg-secondaryColor outline-none select-none transition-all hover:bg-red-400">
              Shop
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
