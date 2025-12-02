/* eslint-disable @next/next/no-img-element */
// src/app/products/page.tsx
import AnimatedSection from "@/components/AnimatedSection";
import { categories } from "@/constant";

export const metadata = { title: "Products & Spare Parts" };

export default function ProductsPage() {
  return (
    <>
      {/* HERO – STRONG & OBVIOUS EMERALD linear */}
      <section className="relative py-32 overflow-hidden">
        {/* Powerful emerald linear background */}
        <div className="absolute inset-0 bg-linear-to-br from-emerald-400 via-emerald-300 to-emerald-500" />
        {/* Subtle diagonal shine */}
        <div className="absolute inset-0 bg-linear-to-tr from-emerald-400/20 via-transparent to-emerald-600/20" />
        {/* Dark overlay for depth & readability */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative container mx-auto px-6 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            Products & Spare Parts
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-4xl mx-auto drop-shadow-lg">
            OEM & high-quality aftermarket parts — always in stock or sourced
            within days
          </p>
        </div>
      </section>

      {/* CARDS SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {categories.map((cat, i) => (
              <AnimatedSection key={i}>
                <div className="group relative overflow-hidden rounded-3xl h-96 cursor-pointer shadow-xl">
                  {/* Image or STRONG emerald fallback */}
                  {cat.img ? (
                    <img
                      src={cat.img}
                      alt={cat.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="h-full bg-linear-to-br from-emerald-700 via-emerald-600 to-emerald-800" />
                  )}

                  {/* STRONG & VISIBLE linear overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-emerald-900/90 via-emerald-900/40 to-transparent" />

                  {/* Text — crisp white */}
                  <div className="absolute bottom-0 left-0 right-0 p-10 text-white z-10">
                    <h3 className="text-4xl font-bold mb-3 drop-shadow-2xl">
                      {cat.title}
                    </h3>
                    <p className="text-xl opacity-95 drop-shadow-lg">
                      {cat.brands}
                    </p>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -rotate-45 translate-x-96 group-hover:translate-x-0" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
