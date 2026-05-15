import Image from "next/image";
import Link from "next/link";

type Product = {
  id: string;
  name: string;
  subtitle: string | null;
  price: number;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`}>
    <div className="group cursor-pointer">
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-card">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-3 space-y-1">
        <h3 className="text-sm font-medium text-foreground">{product.name}</h3>
        {product.subtitle && (
          <p className="text-xs text-muted">{product.subtitle}</p>
        )}
        <p className="text-sm font-semibold text-foreground">
          ${product.price}
        </p>
      </div>
    </div>
    </Link>
  );
}
