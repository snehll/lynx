// src/app/about/page.tsx
import { Card } from "@/components/ui/card";
import {
  CheckCircle2,
  Globe,
  Truck,
  Users,
  Clock,
  ShieldCheck,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      {/* HERO — DEEP VIOLET GRADIENT */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-black to-purple-950" />
        <div className="absolute inset-0 bg-gradient-to-tl from-violet-600/20 via-transparent to-purple-600/20" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative container mx-auto px-6 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 drop-shadow-2xl">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto font-light leading-relaxed drop-shadow-lg">
            Operating from United Arab Emirates, we manage procurement and
            export of industrial products, spare parts, and raw materials. Our
            company bridges suppliers and buyers through efficient, transparent,
            and secure trade operations.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT — DARK THEME */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-violet-400 mb-8">
                We Make Global Trade Seamless
              </h2>
              <div className="prose prose-lg text-gray-300 space-y-6">
                <p>
                  We speak the language of both technology and logistics —
                  ensuring precision and predictability for every client.
                </p>
                <p className="text-white font-medium text-lg">
                  From single spare part orders to complete turbine overhauls —
                  we handle complexity so you don’t have to.
                </p>
              </div>

              {/* Stats — Electric purple */}
              <div className="grid grid-cols-3 gap-8 mt-12">
                {[
                  { label: "Years Active", value: "15+" },
                  { label: "Countries Served", value: "40+" },
                  { label: "Partners", value: "200+" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-5xl font-bold text-violet-400">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Feature Cards — Violet glow */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Globe, title: "Europe & Asia Focus" },
                { icon: Truck, title: "Full Logistics Chain" },
                { icon: Users, title: "Personal Project Manager" },
                { icon: ShieldCheck, title: "100% Compliance" },
              ].map((item, i) => (
                <AnimatedSection key={i}>
                  <Card className="p-8 text-center hover:scale-105 transition-transform duration-300 bg-zinc-900 border border-violet-900/50 hover:border-violet-500 hover:shadow-2xl hover:shadow-violet-600/30">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-violet-600 to-purple-600 p-4 shadow-xl">
                      <item.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="font-semibold text-lg text-white">
                      {item.title}
                    </h3>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROMISE — Dark violet section */}
      <section className="py-20 bg-gradient-to-b from-zinc-950 to-black">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-violet-400 mb-10">
                Our Promise
              </h2>
              <div className="grid md:grid-cols-3 gap-10">
                {[
                  {
                    icon: CheckCircle2,
                    title: "Clear Terms",
                    desc: "No hidden fees or surprises",
                  },
                  {
                    icon: Clock,
                    title: "On-Time Delivery",
                    desc: "We respect your project deadlines",
                  },
                  {
                    icon: Users,
                    title: "One Contact Person",
                    desc: "From quote to delivery",
                  },
                ].map((promise) => (
                  <div
                    key={promise.title}
                    className="flex flex-col items-center bg-zinc-900 p-10 rounded-2xl border border-violet-900/50 hover:border-violet-500 hover:shadow-2xl hover:shadow-violet-600/40 transition-all">
                    <promise.icon className="w-16 h-16 text-violet-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {promise.title}
                    </h3>
                    <p className="text-gray-400">{promise.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
