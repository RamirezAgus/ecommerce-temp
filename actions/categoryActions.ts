"use server";

import { prisma } from "@/lib/prisma";

import cloudinary from "@/lib/cloudinary";

import { revalidatePath } from "next/cache";

export async function createCategory(formData: FormData) {
  const name = formData.get("name") as string;

  const imageFile = formData.get("image") as File;

  let image: string | null = null;

  if (imageFile?.size > 0) {
    const bytes = await imageFile.arrayBuffer();

    const buffer = Buffer.from(bytes);

    const uploadResult = await new Promise<{
      secure_url: string;
    }>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "annette-categories",
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

  await prisma.category.create({
    data: {
      name,
      image,
    },
  });

  revalidatePath("/dashboard/categories");
}

export async function deleteCategory(id: string) {
  await prisma.category.delete({
    where: {
      id,
    },
  });

  revalidatePath("/dashboard/categories");
}
