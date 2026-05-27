import { prisma } from "@/lib/prisma";

import {
  Product,
  Variant,
} from "@/types/product";

export async function getProducts(): Promise<
  Product[]
> {
  const products =
    await prisma.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

  return products.map(
    (product) => ({
      ...product,

      images:
        (product.images as string[]) ||
        [],

      variants:
        (product.variants as Variant[]) ||
        [],
    }),
  );
}

export async function getProductById(
  id: string,
): Promise<Product | null> {
  const product =
    await prisma.product.findUnique({
      where: {
        id,
      },
    });

  if (!product) {
    return null;
  }

  return {
    ...product,

    images:
      (product.images as string[]) ||
      [],

    variants:
      (product.variants as Variant[]) ||
      [],
  };
}