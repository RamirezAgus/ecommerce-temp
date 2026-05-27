"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductGallery({
  images,
  initialImage,
}: {
  images: string[];
  initialImage?: string;
}) {
  const [selectedImage, setSelectedImage] = useState(initialImage || images[0]);

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-3xl bg-card">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0"
          >
            <Image
              src={selectedImage}
              alt="Product"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className=" object-cover
              transition-transform
              duration-700
              ease-out
              hover:scale-110"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            onClick={() => setSelectedImage(image)}
            className={`relative aspect-square overflow-hidden rounded-2xl border transition ${
              selectedImage === image ? "border-primary" : "border-border"
            }`}
          >
            <Image src={image} alt="Thumbnail" fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
