import Container from "../ui/Container";
import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <h1 className="text-xl font-bold text-foreground">LUXE</h1>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
            <Link href="/" className="text-primary font-medium">
              Shop
            </Link>
            <Link href="/collections" className="hover:text-foreground transition">
              Collections
            </Link>
            <Link href="/about" className="hover:text-foreground transition">
              About
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <ShoppingCart className="w-5 h-5 text-foreground cursor-pointer hover:opacity-70 transition" />
            <User className="w-5 h-5 text-foreground cursor-pointer hover:opacity-70 transition" />
          </div>

        </div>
      </Container>
    </header>
  );
}