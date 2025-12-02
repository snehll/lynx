// src/app/services/page.tsx
import {
  Truck,
  Plane,
  Ship,
  PackageSearch,
  FileCheck,
  Globe,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata = { title: "Services" };

const services = [
  {
    icon: Plane,
    title: "Air Transportation",
    desc: "Express air freight for urgent spare parts – 24-72h worldwide",
  },
  {
    icon: Truck,
    title: "Heavy & Oversized Transport",
    desc: "Professional handling of turbines, generators, and large components",
  },
  {
    icon: Ship,
    title: "Sea & Intermodal Freight",
    desc: "Cost-effective solutions with full tracking and documentation",
  },
  {
    icon: PackageSearch,
    title: "Turnkey Procurement",
    desc: "We source, verify, pack, and deliver – you just receive",
  },
  {
    icon: FileCheck,
    title: "Customs & Documentation",
    desc: "Full export/import support across EU, Asia, Middle East",
  },
  {
    icon: Globe,
    title: "Project Logistics",
    desc: "End-to-end coordination for plant overhauls and greenfield projects",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO – STRONG, RICH EMERALD GRADIENT (no more weak light green) */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-emerald-300 to-emerald-500" />
        <div className="absolute inset-0 bg-gradient-to-tl from-emerald-400/20 via-transparent to-emerald-600/20" />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative container mx-auto px-6 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-4xl mx-auto drop-shadow-lg">
            Full-cycle international logistics & procurement — designed for
            industrial buyers who value speed and certainty
          </p>
        </div>
      </section>

      {/* SERVICES GRID – ALL CARDS NOW EMERALD GREEN */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((s, i) => (
              <AnimatedSection key={i}>
                <div className="group relative h-full">
                  {/* Strong emerald glow on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600/30 via-emerald-500/30 to-emerald-600/30 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-700 blur-xl" />

                  <div className="relative h-full bg-white border-2 border-emerald-100 rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:border-emerald-300 transition-all duration-500 hover:-translate-y-3">
                    {/* Icon — emerald green */}
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-700 p-5 mb-8 shadow-xl">
                      <s.icon className="w-full h-full text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-emerald-700 mb-4">
                      {s.title}
                    </h3>
                    <p className="text-slate-700 text-lg leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
