/* eslint-disable @next/next/no-img-element */
import React from "react";

const About = () => {
  return (
    <div className="flex md:flex-row flex-col sm:mt-10 font-Comfortaa h-[80vh] px-[2rem] lg:px-[8rem]">
      <div className="flex flex-col justify-center items-center text-center md:text-left mt-10 md:mt-0">
        <h1 className="text-secondaryColor font-Courgette text-2xl self-center md:self-start ">
          Walcart!
        </h1>
        <div className="font-lighter font-light w-[100%]  mt-5">
          <p>
            At Walcart we offer you the best selection and variety of products
            from all over the world.
          </p>
          <p className="my-5">
            We are a company that is dedicated to providing you with the best
            quality products.
          </p>
          <p>
            With fast delivery and a friendly customer service, we are sure that
            you will be satisfied with your purchase.
          </p>
          <p className="mt-5">Enjoy your shopping and come back again!</p>
        </div>
      </div>
      <div className="h-[100%] w-[100%] my-10 md:my-0 flex items-center justify-center md:justify-end ml-0 md:ml-10">
        <img
          className=" max-h-[100%] max-w-[100%] top-80 right-20 object-fill shadow-lg "
          src="images/shopping2.jpg"
          alt="hands holding bags"
        />
      </div>
    </div>
  );
};

export default About;
