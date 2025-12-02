// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "QUANTUM EUROPE Sp. z o.o. | Trade Without Borders",
    template: "%s | QUANTUM EUROPE",
  },
  description:
    "Warsaw-based coordinator of seamless industrial trade across Europe and beyond.",
  keywords:
    "industrial logistics, heavy transport, Poland trade, QUANTUM EUROPE",
  openGraph: {
    title: "QUANTUM EUROPE Sp. z o.o.",
    description: "Trade without borders from Poland.",
    url: "https://quantum-eur.pl",
    siteName: "QUANTUM EUROPE",
    images: ["/og-image.jpg"],
    emails: ["witamy@quantum-eur.pl"],
  },
};

export const viewport: Viewport = {
  themeColor: "#10b981", // Emerald green
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white text-slate-900 antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
