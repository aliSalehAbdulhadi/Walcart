import create from "zustand";

const useDataStore = (set) => ({
  data: [],
  fetch: async () => {
    const response = await fetch("https://fakestoreapi.com/products/");
    set({ data: await response.json() });
  },
});

export default create(useDataStore);
