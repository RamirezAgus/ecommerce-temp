import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // 🔥 borrar productos primero
  await prisma.product.deleteMany();

  // 🔥 borrar categorías
  await prisma.category.deleteMany();

  // =========================
  // CATEGORIES
  // =========================

  const decoracion = await prisma.category.create({
    data: {
      name: "Decoracion",
      image:
        "https://res.cloudinary.com/dx7jgyz9f/image/upload/v1779134578/deco_wj5fgw.webp",
    },
  });

  const accesorios = await prisma.category.create({
    data: {
      name: "Accesorios",
      image:
        "https://res.cloudinary.com/dx7jgyz9f/image/upload/v1779134578/acce_h1vnpn.webp",
    },
  });

  // =========================
  // PRODUCTS
  // =========================

  await prisma.product.create({
    data: {
      name: "Manta tejida",
      subtitle: "Hecho a mano",
      description: "Manta tejida artesanal premium",
      price: 49.99,

      images: [
        "https://res.cloudinary.com/dx7jgyz9f/image/upload/v1779385816/manta1_gc6cem.webp",
        "https://res.cloudinary.com/dx7jgyz9f/image/upload/v1779385816/manta2_xqxo4l.webp",
        "https://res.cloudinary.com/dx7jgyz9f/image/upload/v1779385816/manta3_eyudlm.webp",
      ],

      categoryId: decoracion.id,
    },
  });

  await prisma.product.create({
    data: {
      name: "Bolso crochet",
      subtitle: "Colección otoño",
      description: "Bolso artesanal tejido",
      price: 69.99,

      images: [
        "https://res.cloudinary.com/dx7jgyz9f/image/upload/v1779388668/bolsa1_gkw7po.webp",
        "https://res.cloudinary.com/dx7jgyz9f/image/upload/v1779388609/bolsa2_bjyhax.webp",
      ],

      variants: [
        {
          name: "Verde",

          images: ["https://res.cloudinary.com/dx7jgyz9f/image/upload/v1779385816/bolsagreen_bsqw1m.webp",],
        },

        {
          name: "Blanco",

          images: ["https://res.cloudinary.com/dx7jgyz9f/image/upload/v1779385816/bolsawhite_tamw7n.webp",],
        },
      ],

      categoryId: accesorios.id,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });
