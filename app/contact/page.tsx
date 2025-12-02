// src/app/contact/page.tsx
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <section className="relative py-32 bg-linear-to-br  from-emerald-500 via-emerald-400 to-emerald-600 text-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Let&lsquo;s Work Together
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Tell us what you need — spare part, full project, or logistics
            support.
            <br />
            We reply within 4 hours.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
              <ContactForm />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  MICROMEGAS Sp. z o.o.
                </h3>
                <p className="text-muted-foreground">
                  Plac Bankowy 2, lok. 1309
                  <br />
                  00-095 Warszawa, Poland
                  <br />
                  Email: info@micro-megas.com
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Response Time</h3>
                <p className="text-xl">Usually within 4 hours (Mon–Fri)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
