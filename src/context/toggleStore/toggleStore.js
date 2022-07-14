import create from "zustand";

const toggleStore = (set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
});

export default create(toggleStore);
