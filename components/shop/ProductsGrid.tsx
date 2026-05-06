import ProductCard from "@/components/product/ProductCard";

const products = [
  {
    id: "1",
    name: "Nordic Chair",
    subtitle: "Minimal design",
    price: 180,
    image: "/prod1.png",
  },
  {
    id: "2",
    name: "Modern Lamp",
    subtitle: "Soft lighting",
    price: 95,
    image: "/prod2.png",
  },
  {
    id: "3",
    name: "Wood Table",
    subtitle: "Natural finish",
    price: 320,
    image: "/prod1.png",
  },
];

export default function ProductsGrid() {
  return (
    <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
