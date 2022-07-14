import create from "zustand";
import { persist, devtools } from "zustand/middleware";

const cartItemsStore = (set) => ({
  cartItems: [],

  addItem: (item) =>
    set((state) => ({ cartItems: [...state.cartItems, item] })),

  removeItem: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((i) => i.id !== id),
    })),

  clearCart: () => set({ cartItems: [] }),

  increaseQuantity: (id) =>
    set((state) => {
      const item = state.cartItems.find((i) => i.id === id);
      item.quantity++;
    }),
  decreaseQuantity: (id) =>
    set((state) => {
      const item = state.cartItems.find((i) => i.id === id);
      if (item.quantity >= 2) {
        item.quantity--;
      }
    }),
});

const useUpdateCartStore = create(
  devtools(persist(cartItemsStore, { name: "cartItems" })),
);

export default useUpdateCartStore;
