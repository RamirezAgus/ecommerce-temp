import Link from "next/link";
import { deleteProduct } from "@/actions/productActions";
import { Product } from "@/types/product";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function ProductsTable({ products }: { products: Product[] }) {
  return (
    <div className="overflow-x-auto border border-border rounded-xl">
      <table className="w-full">
        <thead className="bg-card border-b border-border">
          <tr>
            <th className="text-left p-4">Product</th>
            <th className="text-left p-4">Price</th>
            <th className="text-left p-4">Stock</th>
            <th className="text-left p-4">Created</th>
            <th className="text-left p-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => {
            const totalStock =
              product.variants?.reduce(
                (acc, variant) => acc + (variant.stock || 0),
                0,
              ) || 0;

            return (
              <tr key={product.id} className="border-b border-border">
                <td className="p-4">{product.name}</td>

                <td className="p-4">${product.price}</td>

                <td className="p-4">{totalStock}</td>

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

                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <button className="text-sm text-red-500">Delete</button>
                      </AlertDialogTrigger>

                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete product?</AlertDialogTitle>

                          <AlertDialogDescription>
                            This action cannot be undone. The product{" "}
                            <strong>{product.name}</strong> will be permanently
                            removed.
                          </AlertDialogDescription>
                        </AlertDialogHeader>

                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>

                          <form
                            action={async () => {
                              "use server";

                              await deleteProduct(product.id);
                            }}
                          >
                            <AlertDialogAction
                              type="submit"
                              className="bg-red-500 hover:bg-red-600"
                            >
                              Delete
                            </AlertDialogAction>
                          </form>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
