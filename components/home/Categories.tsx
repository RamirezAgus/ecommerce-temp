import Container from "@/components/ui/Container";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";

export default async function Categories() {
  const categories = await prisma.category.findMany();

  return (
    <section className="section">
      <Container>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/shop?category=${category.name}`}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                {category.image && (
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                )}
              </div>
              <h3 className="mt-4 text-xl font-semibold">{category.name}</h3>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
