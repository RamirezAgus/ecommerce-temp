import { createProduct, updateProduct } from "@/actions/productActions";
import Image from "next/image";

type Product = {
  id: string;
  name: string;
  subtitle?: string | null;
  description: string;
  price: number;
  image: string;
  categoryId?: string | null;
};

type Category = {
  id: string;
  name: string;
};

type Props = {
  product?: Product;
  categories: Category[];
};

export default function ProductForm({ product, categories }: Props) {
  const action = product ? updateProduct.bind(null, product.id) : createProduct;

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
        <label className="block mb-2 text-sm font-medium">Image URL</label>

        <input
          type="file"
          name="image"
          accept="image/*"
          className="w-full border border-border rounded-lg px-4 py-3 bg-background"
        />
        {product?.image && (
          <div className="relative w-32 h-32 mt-4">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}
      </div>
      <button
        type="submit"
        className="bg-primary text-white px-6 py-3 rounded-lg"
      >
        {product ? "Update product" : "Create product"}
      </button>
    </form>
  );
}
