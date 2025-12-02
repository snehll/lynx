"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Plane,
  Truck,
  Ship,
  Globe,
  Package,
  Warehouse,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: Plane,
    title: "Air Transportation",
    desc: "Fast global air freight for urgent spare parts delivery",
  },
  {
    icon: Truck,
    title: "Heavy Transportation",
    desc: "Oversized and heavy industrial equipment logistics",
  },
  {
    icon: Ship,
    title: "Road & Intermodal Transport",
    desc: "Efficient road, rail, and combined transport solutions",
  },
  {
    icon: Globe,
    title: "Door-to-Door Air Cargo",
    desc: "Complete pickup-to-delivery service worldwide",
  },
  {
    icon: Package,
    title: "Project Transportation",
    desc: "Complex, multi-stage logistics for large projects",
  },
  {
    icon: Warehouse,
    title: "Full Turnkey Logistics",
    desc: "Procurement, storage, customs clearance, and final delivery",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Comprehensive Logistics & Supply Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Every service is built around{" "}
            <strong>
              precision, documentation accuracy, and reliable timing
            </strong>
            . From single spare part to full turbine overhaul — we handle it
            all.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <AnimatedSection key={i}>
              <Card className="h-full border border-slate-200 bg-white hover:shadow-xl hover:border-emerald-200 transition-all duration-300">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-2xl text-slate-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-lg">{service.desc}</p>
                  <ArrowRight className="w-5 h-5 text-emerald-600 mt-4 opacity-0 group-hover:opacity-100 transition" />
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
