import ProductCard from "@/components/product/ProductCard";
import { Product } from "@/types/product";

export default function RelatedProducts({ products }: { products: Product[] }) {
  if (products.length === 0) return null;

  return (
    <section className="mt-24">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold text-foreground">
          You may also like
        </h2>
      </div>

      <div
        className="
          grid
          grid-cols-2
          md:grid-cols-4
          gap-6
        "
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
