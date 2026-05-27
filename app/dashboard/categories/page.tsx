import { prisma } from "@/lib/prisma";

import { createCategory, deleteCategory } from "@/actions/categoryActions";

import Image from "next/image";

export default async function CategoriesPage() {
  const categories = await prisma.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return (
    <div className="space-y-8">
      <div>
        <h1
          className="
            text-3xl
            font-bold
          "
        >
          Categories
        </h1>

        <p className="text-muted mt-2">Manage product categories.</p>
      </div>

      <form
        action={createCategory}
        className="
          rounded-2xl
          border
          border-border
          bg-card
          p-6
          space-y-4
        "
      >
        <div>
          <label
            className="
              block
              mb-2
              text-sm
            "
          >
            Category Name
          </label>

          <input
            type="text"
            name="name"
            required
            className="
              w-full
              border
              border-border
              rounded-xl
              px-4
              py-3
              bg-background
            "
          />
        </div>

        <div>
          <label
            className="
              block
              mb-2
              text-sm
            "
          >
            Category Image
          </label>

          <input type="file" name="image" accept="image/*" />
        </div>

        <button
          type="submit"
          className="
            px-6
            py-3
            rounded-xl
            bg-primary
            text-white
          "
        >
          Create Category
        </button>
      </form>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
        "
      >
        {categories.map((category) => (
          <div
            key={category.id}
            className="
                rounded-2xl
                border
                border-border
                overflow-hidden
                bg-card
              "
          >
            {category.image && (
              <div
                className="
                    relative
                    h-52
                    w-full
                  "
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="
                      (max-width: 768px) 100vw,
                      33vw
                    "
                  className="object-cover"
                />
              </div>
            )}

            <div className="p-5">
              <div
                className="
                    flex
                    items-center
                    justify-between
                  "
              >
                <h2
                  className="
                      text-lg
                      font-semibold
                    "
                >
                  {category.name}
                </h2>

                <form action={deleteCategory.bind(null, category.id)}>
                  <button
                    type="submit"
                    className="
                        text-red-500
                        text-sm
                      "
                  >
                    Delete
                  </button>
                </form>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
