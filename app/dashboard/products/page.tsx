import Container from "@/components/ui/Container";
import { getProducts } from "@/lib/products";
import ProductsTable from "@/components/dashboard/ProductsTable";
import Link from "next/link";

export default async function ProductPage() {
  const products = await getProducts();

  return (
    <Container>
      <div className="py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Products</h1>
            <p className="text-muted mt-1">Manage your store products</p>
          </div>
          <Link
            href="/dashboard/products/new"
            className="bg-primary text-white px-4 py-2 rounded-lg"
          >
            Add Product
          </Link>
        </div>
        <ProductsTable products={products} />
      </div>
    </Container>
  );
}
