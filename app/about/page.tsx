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
      {/* HERO – STRONG & OBVIOUS EMERALD linear */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-emerald-400 via-emerald-300 to-emerald-500" />
        <div className="absolute inset-0 bg-linear-to-tl from-emerald-400/20 via-transparent to-emerald-600/20" />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative container mx-auto px-6 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 drop-shadow-2xl">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-4xl mx-auto font-light leading-relaxed drop-shadow-lg">
            Our Polish office acts as a central hub for trade coordination in
            the EU region. We manage procurement, supply, and distribution for
            industrial clients, focusing on compliance, documentation, and
            operational transparency.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT – CLEAN WHITE + EMERALD ACCENTS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-emerald-700 mb-8">
                We Make Global Trade Seamless
              </h2>
              <div className="prose prose-lg text-slate-700 space-y-6">
                <p>
                  Each deal is handled by a dedicated team that ensures every
                  delivery is on time, every document correct, and every client
                  informed.
                </p>
                <p className="text-slate-900 font-medium text-lg">
                  From single spare part orders to complete turbine overhauls —
                  we handle complexity so you don’t have to.
                </p>
              </div>

              {/* Stats – Emerald numbers */}
              <div className="grid grid-cols-3 gap-8 mt-12">
                {[
                  { label: "Years Active", value: "15+" },
                  { label: "Countries Served", value: "40+" },
                  { label: "Partners", value: "200+" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-5xl font-bold text-emerald-600">
                      {stat.value}
                    </div>
                    <div className="text-slate-600 mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Feature Cards – Emerald linears */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Globe, title: "Europe & Asia Focus" },
                { icon: Truck, title: "Full Logistics Chain" },
                { icon: Users, title: "Personal Project Manager" },
                { icon: ShieldCheck, title: "100% Compliance" },
              ].map((item, i) => (
                <AnimatedSection key={i}>
                  <Card className="p-8 text-center hover:scale-105 transition-transform duration-300 border border-emerald-100 hover:border-emerald-300 hover:shadow-xl">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-linear-to-br from-emerald-600 to-emerald-700 p-4 shadow-lg">
                      <item.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="font-semibold text-lg text-slate-900">
                      {item.title}
                    </h3>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROMISE – Emerald section */}
      <section className="py-20 bg-linear-to-br from-emerald-50 to-white">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-emerald-700 mb-10">
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
                    className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
                    <promise.icon className="w-16 h-16 text-emerald-600 mb-4" />
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {promise.title}
                    </h3>
                    <p className="text-slate-600">{promise.desc}</p>
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
