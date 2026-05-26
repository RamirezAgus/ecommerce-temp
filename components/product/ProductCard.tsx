"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/types/product";


export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
        className="group cursor-pointer"
      >
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-card">
          <Image
            src={product.images?.[0] || "/placeholder.webp"}
            alt={product.name}
            fill
            className="object-cover
          transition-all
          duration-700
          ease-out
          group-hover:scale-105
          group-hover:opacity-0"
          />
          {product.images[1] && (
            <Image
              src={product.images[1]}
              alt={product.name}
              fill
              className="
              object-cover
              opacity-0
              scale-105
              transition-all
              duration-700
              ease-out
              group-hover:opacity-100
              group-hover:scale-100
            "
            />
          )}
        </div>
        <div className="mt-3 space-y-1">
          <h3 className="text-sm font-medium text-foreground">
            {product.name}
          </h3>
          {product.subtitle && (
            <p className="text-xs text-muted">{product.subtitle}</p>
          )}
          <p className="text-sm font-semibold text-foreground">
            ${product.price}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
