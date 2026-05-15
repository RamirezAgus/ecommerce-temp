import Link from "next/link";
import { deleteProduct } from "@/actions/productActions";

type Product = {
  id: string;
  name: string;
  price: number;
  createdAt: Date;
};

export default function ProductsTable({ products }: { products: Product[] }) {
  return (
    <div className="overflow-x-auto border border-border rounded-xl">
      <table className="w-full">
        <thead className="bg-card border-b border-border">
          <tr>
            <th className="text-left p-4">Product</th>
            <th className="text-left p-4">Price</th>
            <th className="text-left p-4">Created</th>
            <th className="text-left p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b border-border">
              <td className="p-4">{product.name}</td>
              <td className="p-4">{product.price}</td>
              <td className="p-4">
                {new Date(product.createdAt).toLocaleDateString()}
              </td>
              <td className="p-4">
                <div className="flex items-center justify-end gap-3">
                  <Link
                    href={`/dashboard/products/${product.id}/edit`}
                    className="text-sm text-primary"
                  >
                    Edit
                  </Link>
                  <form
                    action={async () => {
                      "use server";

                      await deleteProduct(product.id);
                    }}
                  >
                    <button type="submit" className="text-sm text-red-500">
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
