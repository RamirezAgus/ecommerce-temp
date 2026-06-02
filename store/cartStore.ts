import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  stock?: number;
  variantName?: string;
  variantColor?: string;
};

type CartStore = {
  items: CartItem[];

  addItem: (item: CartItem) => void;
  removeItem: (id: string, variantName?: string) => void;

  increaseQty: (id: string, variantName?: string) => void;

  decreaseQty: (id: string, variantName?: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],

      addItem: (item) =>
        set((state) => {
          const existing = state.items.find(
            (i) => i.id === item.id && i.variantName === item.variantName,
          );

          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === item.id && i.variantName === item.variantName
                  ? { ...i, quantity: i.quantity + 1 }
                  : i,
              ),
            };
          }

          return {
            items: [...state.items, item],
          };
        }),

      removeItem: (id, variantName) =>
        set((state) => ({
          items: state.items.filter(
            (i) => !(i.id === id && i.variantName === variantName),
          ),
        })),

      increaseQty: (id, variantName) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id && i.variantName === variantName
              ? {
                  ...i,
                  quantity: Math.min(i.quantity + 1, i.stock ?? Infinity),
                }
              : i,
          ),
        })),

      decreaseQty: (id, variantName) =>
        set((state) => ({
          items: state.items
            .map((i) =>
              i.id === id && i.variantName === variantName
                ? {
                    ...i,
                    quantity: i.quantity - 1,
                  }
                : i,
            )
            .filter((i) => i.quantity > 0),
        })),

      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
    },
  ),
);
