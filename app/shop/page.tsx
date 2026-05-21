import Container from "@/components/ui/Container";
import FiltersSidebar from "@/components/shop/FiltersSidebar";
import ProductsGrid from "@/components/shop/ProductsGrid";
import SearchAndSort from "@/components/shop/SearchAndSort";
import { prisma } from "@/lib/prisma";

type Props = {
  searchParams: Promise<{
    category?: string;
    q?: string;
    sort?: string;
  }>;
};

export default async function ShopPage({ searchParams }: Props) {
  const { category, q, sort } = await searchParams;

  const products = await prisma.product.findMany({
    where: {
      ...(category && {
        category: {
          name: category,
        },
      }),

      ...(q && {
        name: {
          contains: q,
          mode: "insensitive",
        },
      }),
    },

    orderBy:
      sort === "price-asc"
        ? {
            price: "asc",
          }
        : sort === "price-desc"
          ? {
              price: "desc",
            }
          : sort === "newest"
            ? {
                createdAt: "desc",
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

        <SearchAndSort />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-6">
          <FiltersSidebar categories={categories} currentCategory={category} />
          <ProductsGrid products={products} />
        </div>
      </div>
    </Container>
  );
}
