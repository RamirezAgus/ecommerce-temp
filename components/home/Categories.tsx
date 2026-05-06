import Container from "@/components/ui/Container";
import Image from "next/image";

const categories = [
  {
    name: "Apparel",
    image: "/cat1.png",
  },
  {
    name: "Accessories",
    image: "/cat2.png",
  },
  {
    name: "Home Objects",
    image: "/cat3.png",
  },
];

export default function Categories() {
  return (
    <section className="section">
      <Container>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="relative group cursor-pointer overflow-hidden rounded-xl"
            >
              <div className="relative h-62.5">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition duration-500 ease-out group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <h3 className="text-primary-foreground text-lg font-semibold">
                    {cat.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
