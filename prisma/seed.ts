import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const categories = [
    "Chairs",
    "Sofas",
    "Tables",
    "Lamps",
  ];

  for (const name of categories) {
    await prisma.category.upsert({
      where: { name },

      update: {},

      create: {
        name,
      },
    });
  }
}

main();
