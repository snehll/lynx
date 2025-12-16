"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-violet-950 via-black to-purple-950" />
      <div className="absolute inset-0 bg-black/60" />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-20 left-20 w-96 h-96 bg-violet-600/20 blur-3xl rounded-full"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute bottom-32 right-32 w-80 h-80 bg-purple-600/20 blur-3xl rounded-full"
      />

      <div className="relative container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
            From United Arab Emirates we support
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-purple-400">
              international trade
            </span>
            <br />
            with technological efficiency
            <br />
            and reliable coordination.
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-5xl mx-auto font-light">
            Our location in Asaia allows us to connect suppliers and
            buyers quickly and confidently.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="px-14 py-8 bg-violet-600 hover:bg-violet-500 text-white text-xl font-medium shadow-2xl shadow-violet-600/50">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-14 py-8 border-2 border-violet-400 text-violet-400 hover:bg-violet-400/10 text-xl font-medium">
              <Link href="/services">Our Services</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
