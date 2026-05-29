"use client";

import Container from "@/components/ui/Container";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import Link from "next/link";

export default function Hero() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [0, 120]);

  return (
    <section className="section">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm text-muted mb-3">ELEVATE YOUR SPACE</p>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Decoración y tejidos artesanales, con tramas hechas con amor.
            </h1>

            <p className="mt-4 text-muted max-w-md">
              Creamos productos decorativos y accesorios tejidos con diseño y detalles hechos a mano.
            </p>
            <p className="mt-4 text-muted max-w-md">
              Tambien brindamos clases de tejido y ofrecemos hilados seleccionados para crear proyectos unicos.
            </p>

            <div className="flex gap-4 mt-6">
              <MagneticButton
                className="bg-primary
                text-white
                  px-6
                  py-3
                  rounded-2xl"
              >
                <Link href="/shop">Shop Collection</Link>
              </MagneticButton>
              <MagneticButton
                className="
                  border
                  border-border
                  px-6
                  py-3
                  rounded-2xl
                  hover:bg-muted
                  transition
                "
              >
                Learn More
              </MagneticButton>
            </div>
          </div>

          <motion.div
            style={{ y }}
            initial={{
              opacity: 0,
              scale: 1.03,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="relative w-full h-100 md:h-125"
          >
            <Image
              src="/heroimg.webp"
              alt="Hero product"
              fill
              sizes="100vw"
              className="object-cover rounded-xl"
              priority
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
