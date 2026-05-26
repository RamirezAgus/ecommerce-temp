"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function createProduct(formData: FormData) {
  const name = formData.get("name") as string;

  const categoryId = formData.get("categoryId") as string;

  const subtitle = formData.get("subtitle") as string;

  const description = formData.get("description") as string;

  const price = Number(formData.get("price"));

  const images = JSON.parse(formData.get("images") as string);

  const variants = JSON.parse(formData.get("variants") as string);

  await prisma.product.create({
    data: {
      name,
      subtitle,
      description,
      price,
      images,
      categoryId,
      variants,
    },
  });

  revalidatePath("/dashboard/products");

  revalidatePath("/shop");

  redirect("/dashboard/products");
}

export async function updateProduct(id: string, formData: FormData) {
  const name = formData.get("name") as string;

  const categoryId = formData.get("categoryId") as string;

  const subtitle = formData.get("subtitle") as string;

  const description = formData.get("description") as string;

  const price = Number(formData.get("price"));

  const images = JSON.parse(formData.get("images") as string);

  const variants = JSON.parse(formData.get("variants") as string);

  const existingProduct = await prisma.product.findUnique({
    where: {
      id,
    },
  });

  if (!existingProduct) {
    throw new Error("Product not found");
  }

  await prisma.product.update({
    where: {
      id,
    },

    data: {
      name,
      subtitle,
      description,
      price,
      images,
      categoryId,
      variants,
    },
  });

  revalidatePath("/dashboard/products");

  revalidatePath("/shop");

  revalidatePath(`/product/${id}`);

  redirect("/dashboard/products");
}

export async function deleteProduct(id: string) {
  await prisma.product.delete({
    where: {
      id,
    },
  });

  revalidatePath("/dashboard/products");

  revalidatePath("/shop");

  redirect("/dashboard/products");
}
