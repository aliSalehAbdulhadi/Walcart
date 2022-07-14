import React from "react";
import StoreCard from "../src/components/storeCard/StoreCard";
import data from "../src/data/data.json";

const Store = () => {
  return (
    <div className="py-10 flex items-center justify-center">
      <div className="px-[1rem] xl:px-[8rem] grid sm:grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 ">
        {data.items.map((item): any => {
          return (
            <StoreCard
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              url={item.imageUrl}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Store;
