import ProductCard from "@/components/product/ProductCard";

type Product = {
  id: string;
  name: string;
  subtitle: string | null;
  description: string;
  price: number;
  image: string;
};

type Props = {
  products: Product[];
};

export default function ProductsGrid({
  products,
}: Props) {
  return (
    <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard 
          key={product.id}
          product={product}/>
      ))}
    </div>
  )
}
