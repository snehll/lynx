import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-violet-900 via-black to-purple-900" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-6 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            Let’s Work Together
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow">
            Tell us what you need — spare part, full project, or logistics
            support.
            <br />
            We reply within 4 hours.
          </p>
        </div>
      </section>

      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-violet-400 mb-8">
                Get in Touch
              </h2>
              <ContactForm companyName="lynx"/>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-violet-400 mb-4">
                  LYNX GLOBAL FZ-LLC
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  FDBC1866 Compass Building, Al Shohada Road
                  <br />
                  AL Hamra Industrial Zone-FZ
                  <br />
                  Ras Al Khaimah, United Arab Emirates
                  <br />
                  Email: hello@lynxglobal.ae
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-violet-400 mb-4">
                  Response Time
                </h3>
                <p className="text-xl text-gray-300">
                  Usually within 4 hours (Mon–Fri)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
