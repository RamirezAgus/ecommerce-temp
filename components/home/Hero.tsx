// components/home/Hero.tsx
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="section">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          <div>
            <p className="text-sm text-muted mb-3">
              ELEVATE YOUR SPACE
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Discover curated objects for modern living
            </h1>

            <p className="mt-4 text-muted max-w-md">
              Explore our selection of premium lifestyle goods designed to enhance your everyday experience.
            </p>

            <div className="flex gap-4 mt-6">
              <Button>Shop Collection</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>

          <div className="relative w-full h-100 md:h-125">
            <Image
              src="/heroimg.png" // 👉 poné una imagen en /public
              alt="Hero product"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>

        </div>
      </Container>
    </section>
  );
}