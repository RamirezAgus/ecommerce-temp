import type { Metadata } from "next";

import Link from "next/link";
import Container from "@/components/ui/Container";
import FiltersSidebar from "@/components/shop/FiltersSidebar";
import ProductsGrid from "@/components/shop/ProductsGrid";
import SearchAndSort from "@/components/shop/SearchAndSort";
import { Variant } from "@/types/product";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Shop | Annette Tramas",

  description: "Explore handmade crochet products and decor.",
};

type Props = {
  searchParams: Promise<{
    category?: string;
    q?: string;
    sort?: string;
    page?: string;
  }>;
};

export default async function ShopPage({ searchParams }: Props) {
  const { category, q, sort, page } = await searchParams;

  const currentPage = Number(page) || 1;

  const PRODUCTS_PER_PAGE = 8;

  const skip = (currentPage - 1) * PRODUCTS_PER_PAGE;

  const rawProducts = await prisma.product.findMany({
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

    skip,
    take: PRODUCTS_PER_PAGE,

    include: {
      category: true,
    },
  });

  const products = rawProducts.map((product) => ({
    ...product,

    images: (product.images as string[]) || [],

    variants: (product.variants as Variant[]) || [],
  }));

  const categories = await prisma.category.findMany();

  const totalProducts = await prisma.product.count({
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
  });

  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

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
          <div
            className="
              flex
              items-center
              justify-center
              gap-2
              mt-10
            "
          >
            {Array.from({
              length: totalPages,
            }).map((_, index) => {
              const pageNumber = index + 1;

              return (
                <Link
                  key={pageNumber}
                  href={`/shop?page=${pageNumber}${
                    category ? `&category=${category}` : ""
                  }${q ? `&q=${q}` : ""}${sort ? `&sort=${sort}` : ""}`}
                  className={`
                    px-4
                    py-2
                    rounded-xl
                    border
                    transition

                    ${
                      currentPage === pageNumber
                        ? "bg-primary text-white border-primary"
                        : "hover:bg-muted"
                    }
                  `}
                >
                  {pageNumber}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
}
