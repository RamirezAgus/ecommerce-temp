import Container from "@/components/ui/Container";
import FiltersSidebar from "@/components/shop/FiltersSidebar";
import ProductsGrid from "@/components/shop/ProductsGrid";
import SortBar from "@/components/shop/SortBar";
import { prisma } from "@/lib/prisma";

type Props = {
  searchParams: Promise<{
    category?: string;
  }>;
};

export default async function ShopPage({ searchParams }: Props) {
  const { category } = await searchParams;

  const products = await prisma.product.findMany({
    where: category
      ? {
          category: {
            name: category,
          },
        }
      : undefined,

    include: {
      category: true,
    },
  });

  const categories = await prisma.category.findMany();

  return (
    <Container>
      <div className="py-10">
        <div className="mb-6">
          <p className="text-sm text-muted">HOME . SHOP</p>
          <h1 className="text-3xl font-bold text-foreground mt-2">
            Shop All Products
          </h1>
        </div>

        <SortBar />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-6">
          <FiltersSidebar categories={categories} currentCategory={category} />
          <ProductsGrid products={products} />
        </div>
      </div>
    </Container>
  );
}
