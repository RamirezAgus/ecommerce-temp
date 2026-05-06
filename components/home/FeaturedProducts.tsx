import ProductCard from "@/components/product/ProductCard";

const products = [
  {
    id: "1",
    name: "Nordic Chair",
    subtitle: "Minimal design",
    price: 180,
    image: "/prod1.png"
  },
  {
    id: "2",
    name: "Modern Lamp",
    subtitle: "Soft lighting",
    price: 95,
    image: "/prod2.png"
  }
];

export default function FeaturedProducts() {
  return (
    <section className="section">
      <div className="container">
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground">
            Featured Products
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

      </div>
    </section>
  );
}