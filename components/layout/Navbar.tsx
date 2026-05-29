"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import CartDrawer from "@/components/cart/CartDrawer";
import { UserButton, SignInButton, Show } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      animate={{
        backdropFilter: scrolled ? "blur(16px)" : "blur(6px)",
        backgroundColor: scrolled
          ? "rgba(248,243,238,0.82)"
          : "rgba(248,243,238,0.55)",
      }}
      transition={{ duration: 0.3 }}
      className="w-full border-stone-200 border-b bg-[#f8f3ee]/80 backdrop-blur-md sticky top-0 z-50"
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative flex items-center">
            <div className="absolute inset-0 bg-linear-to-r from-amber-800/10 via-transparent to-amber-700/10 blur-2xl rounded-full" />
            <Image
              src="/logo1.png"
              alt="Annette Tramas"
              width={170}
              height={70}
              priority
              className="relative
              w-auto
              h-20
              rounded-md
              object-contain
              "
            />
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8 text-[13px] uppercase tracking-[0.18em] text-muted-foreground">
            <Link href="/shop" className="text-primary font-medium">
              Shop
            </Link>
            <Link
              href="/collections"
              className="hover:text-foreground transition-colors"
            >
              Collections
            </Link>
            <Link
              href="/about"
              className="hover:text-foreground transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-5">
            <CartDrawer />
            <Show
              when="signed-out"
              fallback={
                <div className="flex items-center gap-4">
                  <Link
                    href="/dashboard"
                    className="text-sm hover:opacity-70 transition"
                  >
                    Dashboard
                  </Link>
                  <UserButton />
                </div>
              }
            >
              <SignInButton>
                <button className="text-sm hover:opacity-70 transition">
                  Login
                </button>
              </SignInButton>
            </Show>
          </div>
        </div>
      </Container>
    </motion.header>
  );
}

{/*opacity-90
              hover:opacity-100
              transition-all
              duration-300
              drop-shadow-[0_2px_10px_rgba(120,72,32,0.22)] */}