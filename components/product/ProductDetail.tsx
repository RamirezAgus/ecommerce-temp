"use client";

import { useCartStore } from "@/store/cartStore";
import { useState } from "react";
import { toast } from "sonner";

import { Product, Variant } from "@/types/product";

import MagneticButton from "@/components/ui/MagneticButton";
import ProductGallery from "@/components/product/ProductGallery";

export default function ProductDetail({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);

  const addItem = useCartStore((state) => state.addItem);

  const variants = (product.variants || []) as Variant[];

  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);

  const isOutOfStock = selectedVariant && (selectedVariant.stock ?? 0) <= 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <ProductGallery
        key={selectedVariant?.name || "default"}
        images={
          selectedVariant
            ? [...product.images, ...selectedVariant.images]
            : product.images
        }
        initialImage={selectedVariant?.images?.[0] || product.images[0]}
      />

      <div>
        <h1 className="text-3xl font-bold text-foreground">{product.name}</h1>

        {product.subtitle && (
          <p className="text-muted mt-2">{product.subtitle}</p>
        )}

        <p className="text-2xl font-semibold mt-4 text-foreground">
          ${product.price}
        </p>

        {variants.length > 0 && (
          <div className="mt-6">
            <p className="text-sm font-medium mb-3">Color</p>

            <div className="flex gap-3">
              {variants.map((variant) => (
                <button
                  key={variant.name}
                  onClick={() => setSelectedVariant(variant)}
                  className={`
                    relative
                    w-10
                    h-10
                    rounded-full
                    border-2
                    transition-all
                    duration-300
                    hover:scale-110
                    ${
                      selectedVariant?.name === variant.name
                        ? "border-primary scale-110"
                        : "border-border"
                    }
                  `}
                  title={variant.name}
                >
                  <span
                    className="
                      absolute
                      inset-1
                      rounded-full
                    "
                    style={{
                      backgroundColor: variant.color,
                    }}
                  />
                </button>
              ))}
            </div>

            {selectedVariant && (
              <p
                className={`
                  mt-4
                  text-sm
                  font-medium
                  ${
                    (selectedVariant.stock ?? 0) > 0
                      ? "text-green-600"
                      : "text-red-500"
                  }
                `}
              >
                {(selectedVariant.stock ?? 0) > 0
                  ? `${selectedVariant.stock ?? 0} available`
                  : "Out of stock"}
              </p>
            )}
          </div>
        )}

        <div className="flex items-center gap-3 mt-6">
          <button
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            className="
              px-3
              py-1
              border
              border-border
              rounded
            "
          >
            -
          </button>

          <span className="text-foreground">{quantity}</span>

          <button
            onClick={() => setQuantity((prev) => prev + 1)}
            className="
              px-3
              py-1
              border
              border-border
              rounded
            "
          >
            +
          </button>
        </div>

        <div className="mt-6">
          <MagneticButton
            disabled={!!isOutOfStock}
            className="
              bg-primary
              text-white
              px-6
              py-3
              rounded-2xl
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
            onClick={() => {
              if (isOutOfStock) return;

              addItem({
                id: selectedVariant
                  ? `${product.id}-${selectedVariant.name}`
                  : product.id,
                name: product.name,
                variant: selectedVariant?.name || null,
                price: product.price,
                image:
                  selectedVariant?.images?.[0] ||
                  product.images?.[0] ||
                  "/placeholder.webp",
              });

              toast.success(`${product.name} added to cart`);
            }}
          >
            {isOutOfStock ? "Out of stock" : "Add to Cart"}
          </MagneticButton>
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
