import StoreCard from "../src/components/storeCard/StoreCard";

const Store = ({ data }: { data: any }) => {
  console.log(data);
  return (
    <div className="py-10 flex items-center justify-center">
      <div className="px-[1rem] xl:px-[8rem] grid sm:grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 ">
        {data.map(
          (item: {
            id: number;
            title: string;
            description: string;
            price: number;
            image: string;
            rating: { rate: number; count: number };
          }): any => {
            return (
              <StoreCard
                key={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                url={item.image}
                id={item.id}
                rating={item.rating}
              />
            );
          },
        )}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products/");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default Store;
