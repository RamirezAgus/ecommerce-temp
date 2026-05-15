"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import { useCartStore } from "@/store/cartStore";
import { useState } from "react";

type Product = {
  id: string;
  name: string;
  subtitle?: string | null;
  price: number;
  image: string;
  description: string;
};

export default function ProductDetail({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="relative w-full h-100 md:h-125 rounded-xl overflow-hidden bg-card">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <div>
        <h1 className="text-3xl font-bold text-foreground">{product.name}</h1>

        {product.subtitle && (
          <p className="text-muted mt-2">{product.subtitle}</p>
        )}

        <p className="text-2xl font-semibold mt-4 text-foreground">
          ${product.price}
        </p>

        <div className="flex items-center gap-3 mt-6">
          <button
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            className="px-3 py-1 border border-border rounded"
          >
            -
          </button>

          <span className="text-foreground">{quantity}</span>

          <button
            onClick={() => setQuantity((prev) => prev + 1)}
            className="px-3 py-1 border border-border rounded"
          >
            +
          </button>
        </div>

        <div className="mt-6">
          <Button
            className="w-full"
            onClick={() =>
              addItem({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
              })
            }
          >
            Add to Cart
          </Button>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Description
          </h3>
          <p className="text-muted leading-relaxed">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
