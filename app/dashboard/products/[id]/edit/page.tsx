import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { Variant } from "@/types/product";
import ProductForm from "@/components/dashboard/ProductForm";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await prisma.product.findUnique({
    where: { id },
  });

  if (!product) return notFound();

  const formattedProduct = {
    ...product,

    images: (product?.images as string[]) || [],

    variants: (product?.variants as Variant[]) || [],
  };

  const categories = await prisma.category.findMany();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Edit Product</h1>

      <ProductForm product={formattedProduct} categories={categories} />
    </div>
  );
}
