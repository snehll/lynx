import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "LYNX | UAE Industrial Trade", template: "%s | LYNX" },
  description:
    "From UAE we support international trade with a balance of technological efficiency and reliable coordination.",
  openGraph: {
    title: "LYNX GLOBAL FZ-LLC",
    description:
      "Efficient trade starts with clear communication, reliable partners, and transparent logistics.",
    url: "https://lynxglobal.ae",
    siteName: "LYNX",
    images: ["/og-lynx.jpg"],
    emails: ["hello@lynxglobal.ae"],
  },
};

export const viewport: Viewport = {
  themeColor: "#7c3aed",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
