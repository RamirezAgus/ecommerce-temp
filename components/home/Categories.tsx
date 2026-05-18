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
            className="border border-border rounded-2xl p-10 hover:border-primary transition"
          >
            <h3 className="text-xl font-semibold">
              {category.name}
            </h3>
          </Link>
        ))}
      </div>
      </Container>
    </section>
  );
}
