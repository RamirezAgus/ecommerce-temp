import Link from "next/link";

type Category = {
  id: string;
  name: string;
};

type Props = {
  categories: Category[];

  currentCategory?: string;
};

export default function FiltersSidebar({ categories, currentCategory }: Props) {
  return (
    <aside className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-4">Categories</h2>

        <div className="flex flex-col gap-3">
          {/* All */}
          <Link
            href="/shop"
            className={
              !currentCategory
                ? "text-primary font-medium"
                : "text-muted hover:text-foreground"
            }
          >
            All
          </Link>

          {/* Categories */}
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/shop?category=${category.name}`}
              className={`transition-colors duration-200 ${
                currentCategory === category.name
                  ? "text-primary font-semibold"
                  : "text-[#7b6d60] hover:text-foreground"
              }`}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
