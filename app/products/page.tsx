/* eslint-disable @next/next/no-img-element */
import AnimatedSection from "@/components/AnimatedSection";
import { categories } from "@/constant";
import Image from "next/image";

export const metadata = { title: "Products & Spare Parts" };

export default function ProductsPage() {
  return (
    <>
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-violet-900 via-black to-purple-900" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-6 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            Products & Spare Parts
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto drop-shadow">
            OEM & high-quality aftermarket parts — always in stock or sourced
            within days
          </p>
        </div>
      </section>

      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {categories.map((cat, i) => {
              const isLocal = cat.img.startsWith("/");
              return (
                <AnimatedSection key={i}>
                  <div className="group relative overflow-hidden rounded-3xl h-96 cursor-pointer shadow-xl bg-zinc-900">
                    {cat.img ? (
                      <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-110">
                        <Image
                          src={cat.img}
                          alt={cat.title}
                          fill
                          className="object-cover"
                          unoptimized={!isLocal}
                          priority={i < 3}
                        />
                      </div>
                    ) : (
                      <div className="h-full bg-linear-to-br from-violet-800 via-purple-800 to-violet-900" />
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-10 text-white z-10">
                      <h3 className="text-4xl font-bold mb-3 drop-shadow-2xl">
                        {cat.title}
                      </h3>
                      <p className="text-xl opacity-95 drop-shadow-lg">
                        {cat.brands}
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -rotate-45 translate-x-96 group-hover:translate-x-0" />
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
