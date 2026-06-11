import { prisma } from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";

export default async function CollectionsPage() {
  const categories = await prisma.category.findMany({
    include: {
      _count: {
        select: {
          products: true,
        },
      },
    },
  });

  return (
    <Container>
      <div className="py-20">
        <h1 className="text-4xl font-bold text-center mb-4">Collections</h1>

        <p className="text-center text-muted-foreground mb-12">
          Explore our handcrafted collections.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/shop?category=${encodeURIComponent(category.name)}`}
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-border
              "
            >
              <div className="relative aspect-4/5">
                <Image
                  src={category.image || "/placeholder.webp"}
                  alt={category.name}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              <div className="p-6">
                <h2 className="text-xl font-semibold">{category.name}</h2>
                <p className="text-sm text-muted-foreground">
                  {category._count.products} products
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
