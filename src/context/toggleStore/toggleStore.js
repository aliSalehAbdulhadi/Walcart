import create from "zustand";

const toggleStore = (set) => ({
  isOpenCart: false,
  isOpenNav: false,
  toggleCart: (action) => set(() => ({ isOpenCart: action })),
  toggleNav: (action) => set(() => ({ isOpenNav: action })),
});

export default create(toggleStore);
