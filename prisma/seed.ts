import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const categories = [
    {
      name: "Chairs",

      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },

    {
      name: "Sofas",

      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
    },

    {
      name: "Tables",

      image:
        "https://images.unsplash.com/photo-1499933374294-4584851497cc",
    },

    {
      name: "Lamps",

      image:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    },
  ];

  for (const category of categories) {
    await prisma.category.upsert({
      where: {
        name: category.name,
      },

      update: {
        image: category.image,
      },

      create: {
        name: category.name,
        image: category.image,
      },
    });
  }
}

main();