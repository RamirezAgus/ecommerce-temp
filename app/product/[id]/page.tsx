import type { Metadata } from "next";

import Container from "@/components/ui/Container";
import ProductDetail from "@/components/product/ProductDetail";
import ProductCard from "@/components/product/ProductCard";
import { prisma } from "@/lib/prisma";
import { getProductById } from "@/lib/products";
import { Variant } from "@/types/product";


export async function generateMetadata({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}): Promise<Metadata> {
  const { id } = await params;

  const product = await getProductById(id);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | Annette Tramas`,

    description: product.subtitle || product.description,

    openGraph: {
      images: [product.images[0]],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });

  if (!product) {
    return (
      <Container>
        <div className="py-20">Product not found</div>
      </Container>
    );
  }

  const relatedProducts = await prisma.product.findMany({
    where: {
      categoryId: product.categoryId,

      NOT: {
        id: product.id,
      },
    },

    take: 4,
  });

  return (
    <Container>
      <div className="py-10">
        <ProductDetail
          product={{
            ...product,
            images: product.images as string[],
            variants: (product.variants as Variant[]) || [],
          }}
        />

        <div className="mt-24">
          <h2
            className="
              text-2xl
              font-bold
              mb-8
            "
          >
            You may also like
          </h2>

          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-4
              gap-6
            "
          >
            {relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.id}
                product={{
                  ...relatedProduct,

                  images: (relatedProduct.images as string[]) || [],

                  variants: (relatedProduct.variants as Variant[]) || [],
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
