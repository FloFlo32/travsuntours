import type { Metadata } from "next";
import { MapPin, Phone, Mail } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/sections/contact-form";
import { Map } from "@/components/sections/map";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { brand } from "@/brand.config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "We'd love to hear from you. Reach Trav Sun Tours in Montego Bay, Jamaica by phone, email or the contact form.",
};

const cards = [
  { icon: MapPin, title: "Address", value: "Gloucester Avenue, Montego Bay, JM" },
  { icon: Phone, title: "Phone", value: "+1 876-281-2871", href: `tel:+${brand.contact.phone}` },
  { icon: Mail, title: "Email", value: brand.social.email, href: `mailto:${brand.social.email}` },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          image="/ingested/travsuntours/1-27.webp"
          alt="Contact Us"
          crumb="Contact Us"
          title="We'd love to hear from you."
          subtitle="Questions about a tour, a private transfer or a custom itinerary? Reach out any time."
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-24">
          <RevealGroup className="grid gap-6 sm:grid-cols-3">
            {cards.map((c) => (
              <RevealItem key={c.title}>
                {c.href ? (
                  <a
                    href={c.href}
                    className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
                  >
                    <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                      <c.icon className="size-5" />
                    </span>
                    <span>
                      <span className="block text-sm text-muted-foreground">{c.title}</span>
                      <span className="font-semibold">{c.value}</span>
                    </span>
                  </a>
                ) : (
                  <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6">
                    <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                      <c.icon className="size-5" />
                    </span>
                    <span>
                      <span className="block text-sm text-muted-foreground">{c.title}</span>
                      <span className="font-semibold">{c.value}</span>
                    </span>
                  </div>
                )}
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1} className="mt-12">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-sm sm:p-10">
              <h2 className="text-2xl font-bold sm:text-3xl">Send us a message</h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </section>

        <Map />
      </main>
      <Footer />
    </>
  );
}
