"use client";

import { useState } from "react";
import { createProduct, updateProduct } from "@/actions/productActions";
import MagneticButton from "@/components/ui/MagneticButton";
import { Product, Category, Variant } from "@/types/product";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Trash2 } from "lucide-react";
import ImageUpload from "@/components/ui/ImageUpload";
import Image from "next/image";

type Props = {
  product?: Product;
  categories: Category[];
};

export default function ProductForm({ product, categories }: Props) {
  const action = product ? updateProduct.bind(null, product.id) : createProduct;
  const [images, setImages] = useState<string[]>(product?.images || []);
  const [variants, setVariants] = useState<Variant[]>(
    (product?.variants as Variant[]) || [],
  );

  return (
    <form action={action} className="space-y-6">
      <div>
        <label className="block mb-2 text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          required
          defaultValue={product?.name}
          className="w-full border border-border rounded-lg px-4 py-3 bg-background"
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium">Subtitle</label>
        <input
          type="text"
          name="subtitle"
          required
          defaultValue={product?.subtitle || ""}
          className="w-full border border-border rounded-lg px-4 py-3 bg-background"
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium">Description</label>

        <textarea
          name="description"
          rows={5}
          required
          defaultValue={product?.description}
          className="w-full border border-border rounded-lg px-4 py-3 bg-background"
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium">Price</label>

        <input
          type="number"
          step="0.01"
          name="price"
          required
          defaultValue={product?.price}
          className="w-full border border-border rounded-lg px-4 py-3 bg-background"
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium">Category</label>
        <select
          name="categoryId"
          defaultValue={product?.categoryId || ""}
          className="w-full border border-border rounded-lg px-4 py-3 bg-background"
        >
          <option value="">Select category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium">Product Images</label>
        <ImageUpload onUpload={(url) => setImages((prev) => [...prev, url])} />
        <div className="grid grid-cols-3 gap-4 mt-4">
          {images.map((image) => (
            <div
              key={image}
              className="
                relative
                aspect-square
                rounded-xl
                overflow-hidden
                border
              "
            >
              <Image
                src={image}
                alt="Preview"
                fill
                sizes="200px"
                className="object-cover"
              />

              <button
                type="button"
                onClick={() =>
                  setImages((prev) => prev.filter((img) => img !== image))
                }
                className="
                  absolute
                  top-2
                  right-2
                  w-8
                  h-8
                  rounded-full
                  bg-black/70
                  text-white
                  text-sm
                  hover:bg-red-500
                  transition
                "
              >
                ✕
              </button>
            </div>
          ))}
        </div>
        <input type="hidden" name="images" value={JSON.stringify(images)} />
      </div>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Variants</h3>

          <button
            type="button"
            onClick={() =>
              setVariants((prev) => [
                ...prev,
                {
                  name: "",
                  color: "#000000",
                  stock: 0,
                  images: [],
                },
              ])
            }
            className="
                px-4
                py-2
                rounded-xl
                bg-primary
                text-white
              "
          >
            Add Variant
          </button>
        </div>

        {variants.map((variant, index) => (
          <Collapsible
            key={index}
            className="
                border
                border-border
                rounded-2xl
                overflow-hidden
              "
          >
            <CollapsibleTrigger
              className="
                  w-full
                  flex
                  items-center
                  justify-between
                  px-6
                  py-4
                  bg-card
                  hover:bg-muted/50
                  transition
                "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    w-6
                    h-6
                    rounded-full
                    border
                  "
                  style={{
                    backgroundColor: variant.color,
                  }}
                />

                <span className="font-medium">
                  {variant.name || "New Variant"}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">
                  Stock: {variant.stock}
                </span>

                <div
                  onClick={(e) => {
                    e.stopPropagation();

                    setVariants((prev) => prev.filter((_, i) => i !== index));
                  }}
                  className="
                    p-2
                    rounded-lg
                    hover:bg-red-500/10
                    transition
                    cursor-pointer
                  "
                >
                  <Trash2
                    className="
                      w-4
                      h-4
                      text-red-500
                    "
                  />
                </div>
              </div>
            </CollapsibleTrigger>

            <CollapsibleContent
              className="
                p-6
                space-y-4
              "
            >
              <input
                type="text"
                placeholder="Variant name"
                value={variant.name}
                onChange={(e) => {
                  const updated = [...variants];

                  updated[index].name = e.target.value;

                  setVariants(updated);
                }}
                className="
                  w-full
                  border
                  border-border
                  rounded-xl
                  px-4
                  py-3
                "
              />

              <input
                type="color"
                value={variant.color}
                onChange={(e) => {
                  const updated = [...variants];

                  updated[index].color = e.target.value;

                  setVariants(updated);
                }}
                className="
                    w-20
                    h-12
                    rounded-xl
                    border
                    border-border
                    cursor-pointer
                  "
              />
                <p className="text-sm font-medium">Stock</p>
              <input
                type="number"
                placeholder="Stock"
                value={variant.stock}
                onChange={(e) => {
                  const updated = [...variants];

                  updated[index].stock = Number(e.target.value);

                  setVariants(updated);
                }}
                className="
                  w-full
                  border
                  border-border
                  rounded-xl
                  px-4
                  py-3
                "
              />
              <label className="block mb-2 text-sm font-medium">
                Variant Image
              </label>
              <ImageUpload
                onUpload={(url) => {
                  const updated = [...variants];

                  updated[index].images.push(url);

                  setVariants(updated);
                }}
              />

              <div className="grid grid-cols-3 gap-4">
                {variant.images.map((image) => (
                  <div
                    key={image}
                    className="
                      relative
                      aspect-square
                      rounded-xl
                      overflow-hidden
                    "
                  >
                    <Image
                      src={image}
                      alt="Variant"
                      fill
                      sizes="200px"
                      className="object-cover"
                    />

                    <button
                      type="button"
                      onClick={() => {
                        const updated = [...variants];

                        updated[index].images = updated[index].images.filter(
                          (img) => img !== image,
                        );

                        setVariants(updated);
                      }}
                      className="
                        absolute
                        top-2
                        right-2
                        w-8
                        h-8
                        rounded-full
                        bg-black/70
                        text-white
                        text-sm
                        hover:bg-red-500
                        transition
                      "
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}

        <input type="hidden" name="variants" value={JSON.stringify(variants)} />
      </div>
      <MagneticButton
        type="submit"
        className="bg-primary text-white px-6 py-3 rounded-xl"
      >
        {product ? "Update product" : "Create product"}
      </MagneticButton>
    </form>
  );
}
