import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-violet-900">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-violet-400 mb-4">LYNX</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              LYNX GLOBAL FZ-LLC
              <br />
              FDBC1866 Compass Building, Al Shohada Road
              <br />
              AL Hamra Industrial Zone-FZ
              <br />
              Ras Al Khaimah, United Arab Emirates
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-violet-400 mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-violet-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-violet-400">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-violet-400">
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-violet-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-violet-400 mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-violet-400">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-violet-400 mb-4">Contact</h4>
            <p className="text-sm text-gray-400 space-y-2">
              <span className="block">Email: hello@lynxglobal.ae</span>
              <span className="block">Ras Al Khaimah, UAE</span>
            </p>
          </div>
        </div>
        <div className="border-t border-violet-900 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} LYNX GLOBAL FZ-LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
