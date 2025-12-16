"use client";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const navItems = ["Home", "About", "Services", "Products", "Contact"];

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 border-b border-violet-900 bg-black/95 backdrop-blur">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-11 h-11">
            <Image
              src="logo.png"
              alt="LYNX"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-2xl font-bold text-violet-400 hidden sm:block tracking-wider">
            LYNX
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-gray-300 hover:text-violet-400 transition font-medium">
              {item}
            </Link>
          ))}
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6 text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-black border-violet-900">
            <nav className="flex flex-col gap-8 mt-10">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-xl font-medium text-gray-300 hover:text-violet-400 transition">
                  {item}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
