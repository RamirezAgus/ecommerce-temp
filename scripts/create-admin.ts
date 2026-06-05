import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

async function main() {
  await auth.api.signUpEmail({
    body: {
      name: "Admin",
      email: "rlagustin0@gmail.com",
      password: "C@096102",
    },
  });
  console.log("Usuario creado correctamente");
}

main().catch(console.error).finally(() => prisma.$disconnect());