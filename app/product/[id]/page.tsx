import Container from "@/components/ui/Container";
import ProductDetail from "@/components/product/ProductDetail";
import { prisma } from "@/lib/prisma"

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

  return (
    <Container>
      <div className="py-10">
        <ProductDetail product={product} />
      </div>
    </Container>
  );
}
