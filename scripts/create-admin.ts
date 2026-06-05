import { auth } from "@/lib/auth";

async function main() {
  const result = await auth.api.signUpEmail({
    body: {
      name: "Admin",
      email: "rlagustin0@gmail.com",
      password: "C@096102",
    },
  });
  console.log("Usuario creado:", result);
}

main().catch(console.error);
