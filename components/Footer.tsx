// src/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t mt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">QUANTUM</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              QUANTUM EUROPE SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ
              <br />
              Plac Bankowy 2, lok. 1309
              <br />
              00-095 Warszawa, Poland
              <br />
              NIP: 0001200404
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-muted-foreground hover:text-primary">
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm text-muted-foreground space-y-2">
              <span className="block">Email: info@micro-megas.com</span>
              <span className="block">Warsaw, Poland</span>
            </p>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 text-center text-sm text-slate-600">
          © {new Date().getFullYear()} QUANTUM EUROPE SPÓŁKA Z OGRANICZONĄ
          ODPOWIEDZIALNOŚCIĄ · NIP: 0001200404 · witamy@quantum-eur.pl
        </div>
      </div>
    </footer>
  );
}
