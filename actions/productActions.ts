"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import cloudinary from "@/lib/cloudinary";

export async function createProduct(formData: FormData) {
  const name = formData.get("name") as string;

  const categoryId = formData.get("categoryId") as string;

  const subtitle = formData.get("subtitle") as string;

  const description = formData.get("description") as string;

  const price = Number(formData.get("price"));

  const imageFile = formData.get("image") as File;

  const bytes = await imageFile.arrayBuffer();

  const buffer = Buffer.from(bytes);

  const uploadResult = await new Promise<{
    secure_url: string;
  }>((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder: "annette-store",
        },
        (error, result) => {
          if (error || !result) {
            reject(error);
            return;
          }

          resolve(
            result as {
              secure_url: string;
            },
          );
        },
      )
      .end(buffer);
  });

  const image = uploadResult.secure_url;

  await prisma.product.create({
    data: {
      name,
      subtitle,
      description,
      price,
      image,
      categoryId,
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

  const existingProduct = await prisma.product.findUnique({
    where: {
      id,
    },
  });

  if (!existingProduct) {
    throw new Error("Product not found");
  }

  let image = existingProduct.image;

  const imageFile = formData.get("image") as File;

  if (imageFile && imageFile.size > 0) {
    const bytes = await imageFile.arrayBuffer();

    const buffer = Buffer.from(bytes);

    const uploadResult = await new Promise<{
      secure_url: string;
    }>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "annette-store",
          },
          (error, result) => {
            if (error || !result) {
              reject(error);
              return;
            }

            resolve(
              result as {
                secure_url: string;
              },
            );
          },
        )
        .end(buffer);
    });

    image = uploadResult.secure_url;
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
      image,
      categoryId,
    },
  });

  revalidatePath("/dashboard/products");

  revalidatePath("/shop");

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
