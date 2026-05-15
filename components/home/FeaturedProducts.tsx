import ProductCard from "@/components/product/ProductCard";
import { getProducts } from "@/lib/products";


export default async function FeaturedProducts() {
  const products = await getProducts();

  return (
    <section className="section">
      <div className="container">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground">
            Featured Products
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
