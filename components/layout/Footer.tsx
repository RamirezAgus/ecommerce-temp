import Container from "@/components/ui/Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border mt-20">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-semibold text-foreground">
              ANNETTE TRAMAS
            </h2>
            <p className="text-sm text-muted mt-3 leading-relaxed">
              Tejidos artesanales hechos a mano, con materiales nobles y
              dedicación en cada trama.
            </p>
            <div className="flex items-center gap-4 mt-5">
              <Link
                href="https://www.instagram.com/annette.tramas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </Link>

              <Link
                href="https://www.facebook.com/annette.tramas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/shop"
                  className="text-[#7b6d60] hover:text-foreground transition"
                >
                  Todos los productos
                </Link>
              </li>
              <li>
                <Link
                  href="/collections"
                  className="text-[#7b6d60] hover:text-foreground transition"
                >
                  Colecciones
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Nosotros
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-[#7b6d60] hover:text-foreground transition"
                >
                  Nuestra historia
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/5491165396940"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7b6d60] hover:text-foreground transition"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-[#7b6d60] hover:text-foreground transition"
                >
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-[#7b6d60] hover:text-foreground transition"
                >
                  Términos y condiciones
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-[#7b6d60]">
          <span>
            © {new Date().getFullYear()} Annette Tramas. Todos los derechos
            reservados.
          </span>
          <span>Hecho con amor en Argentina 🇦🇷</span>
        </div>
      </Container>
    </footer>
  );
}
