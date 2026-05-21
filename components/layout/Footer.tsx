import Container from "@/components/ui/Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border mt-20">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

          <div>
            <h2 className="text-lg font-semibold text-foreground">ANNETTE</h2>
            <p className="text-sm text-muted mt-3">
              Curated products for modern living. Designed to elevate your
              everyday.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Shop</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="#" className="text-[#7b6d60] hover:text-foreground transition">All Products</Link>
              </li>
              <li>
                <Link href="#" className="text-[#7b6d60] hover:text-foreground transition">Apparel</Link>
              </li>
              <li>
                <Link href="#" className="text-[#7b6d60] hover:text-foreground transition">Accessories</Link>
              </li>
              <li>
                <Link href="#" className="text-[#7b6d60] hover:text-foreground transition">Home Objects</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="#" className="text-[#7b6d60] hover:text-foreground transition">About</Link>
              </li>
              <li>
                <Link href="#" className="text-[#7b6d60] hover:text-foreground transition">Contact</Link>
              </li>
              <li>
                <Link href="#" className="text-[#7b6d60] hover:text-foreground transition">Blog</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Legal
            </h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="#" className="text-[#7b6d60] hover:text-foreground transition">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#" className="text-[#7b6d60] hover:text-foreground transition">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-[#7b6d60] transition border-t border-border py-6 text-center text-sm">
          © {new Date().getFullYear()} ANNETTE TRAMAS. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
