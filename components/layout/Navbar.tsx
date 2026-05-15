"use client";

import Container from "../ui/Container";
import Link from "next/link";
import { ShoppingCart} from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { UserButton, SignInButton, Show } from "@clerk/nextjs";

export default function Navbar() {
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="w-full border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/">
            <h1 className="text-xl font-bold text-foreground">LUXE</h1>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
            <Link href="/shop" className="text-primary font-medium">
              Shop
            </Link>
            <Link
              href="/collections"
              className="hover:text-foreground transition"
            >
              Collections
            </Link>
            <Link href="/about" className="hover:text-foreground transition">
              About
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link href="/cart">
              <div className="relative cursor-pointer">
                <ShoppingCart className="w-5 h-5 text-foreground cursor-pointer hover:opacity-70 transition" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {totalItems}
                  </span>
                )}
              </div>
            </Link>
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
    </header>
  );
}
