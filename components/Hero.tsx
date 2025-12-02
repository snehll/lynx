// src/components/Hero.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { categories } from "@/constant";

const images = categories.map((it) => it.img);

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Blurred + Fading Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute inset-0">
            <Image
              src={images[currentIndex]}
              alt="Industrial logistics"
              fill
              className="object-cover blur-sm scale-105" // ← blur + slight zoom = dreamy effect
              quality={90}
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Stronger dark overlay + subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
      </div>

      {/* Content — now super sharp */}
      <div className="relative container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight drop-shadow-2xl">
            Trade without
            <br />
            <span className="font-bold text-emerald-400 drop-shadow-2xl">
              borders.
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-white/95 mb-12 max-w-4xl mx-auto font-light leading-relaxed drop-shadow-xl">
            We help industrial companies move products, equipment, and
            technology seamlessly across Europe and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="px-12 py-7 bg-emerald-600 hover:bg-emerald-500 text-white text-lg font-light shadow-2xl backdrop-blur">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-12 py-7 border-2 border-white text-white bg-transparent hover:bg-white/20 backdrop-blur text-lg font-light">
              <Link href="/services">Our Services</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Clean dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === currentIndex ? "bg-emerald-400 w-10" : "bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
