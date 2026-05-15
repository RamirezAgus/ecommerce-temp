import ProductForm from "@/components/dashboard/ProductForm";
import { prisma } from "@/lib/prisma";


export default async function NewProductPage() {

  const categories =
    await prisma.category.findMany();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        New Product
      </h1>
      <ProductForm categories={categories}/>
    </div>
  );
}
