"use client";

import Image from "next/image";

import { useCartStore } from "@/store/cartStore";

type Props = {
  item: {
    id: string;
    name: string;
    image: string;
    price: number;
    quantity: number;
  };
};

export default function CartItem({ item }: Props) {
  const removeItem = useCartStore((state) => state.removeItem);

  const increaseQty = useCartStore((state) => state.increaseQty);

  const decreaseQty = useCartStore((state) => state.decreaseQty);

  return (
    <div className="flex gap-4">
      {/* Image */}
      <div className="relative w-20 h-20 rounded-lg overflow-hidden">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="font-medium">{item.name}</h3>

        <p className="font-semibold mt-1">${item.price}</p>

        {/* Quantity */}
        <div className="flex items-center gap-3 mt-3">
          <button
            onClick={() => decreaseQty(item.id)}
            className="w-8 h-8 border border-border rounded-md"
          >
            -
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() => increaseQty(item.id)}
            className="w-8 h-8 border border-border rounded-md"
          >
            +
          </button>
        </div>

        {/* Remove */}
        <button
          onClick={() => removeItem(item.id)}
          className="text-sm text-red-500 mt-3"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
