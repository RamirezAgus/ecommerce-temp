import ProductCard from "@/components/product/ProductCard";
import { getProducts } from "@/lib/products";


export default async function ProductsGrid() {
  const products = await getProducts();

  return (
    <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
