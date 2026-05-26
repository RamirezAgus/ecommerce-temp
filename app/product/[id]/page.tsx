import Container from "@/components/ui/Container";
import ProductDetail from "@/components/product/ProductDetail";
import ProductCard from "@/components/product/ProductCard";
import { prisma } from "@/lib/prisma";
import { Variant } from "@/types/product";

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

        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-8">You may also like</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={{
                    ...product,
                    images: product.images as string[],
                    variants: (product.variants as Variant[]) || [],
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
