import { notFound } from "next/navigation";
import ProductForm from "@/components/dashboard/ProductForm";
import { prisma } from "@/lib/prisma";

export default async function EditProductPage({
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
    return notFound();
  }

  const categories = await prisma.category.findMany();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Edit Product</h1>

      <ProductForm product={product} categories={categories} />
    </div>
  );
}
