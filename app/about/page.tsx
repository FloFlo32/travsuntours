import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Tag, Zap, Users } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { CTA } from "@/components/sections/cta";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Dare to Explore with Trav Sun Tours: a certified Jamaica tour company with a small group of dedicated, honest and reliable registered tour drivers.",
};

const values = [
  { icon: ShieldCheck, label: "Trust and Safety" },
  { icon: Tag, label: "Best Price Guarantee" },
  { icon: Zap, label: "Easy & Quick Booking" },
  { icon: Users, label: "Best Travel Agents" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          image="/ingested/travsuntours/3-27.webp"
          alt="About Trav Sun Tours"
          crumb="About Us"
          title="About Us"
          subtitle="A certified tour company built on trust, safety and the true Jamaican experience."
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Our story
              </span>
              <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
                Dare to Explore with Trav Sun Tours
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Trav Sun Tours is a certified tour company. We have a small
                group of dedicated, honest, hardworking and reliable registered
                tour drivers who have a passion for what we do. We like to meet
                new people and show them around our beautiful country, Jamaica.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                We don&apos;t just think about our travelers as customers, we
                also think of you as a friend, so whenever you&apos;re booking
                with us you can expect the true Jamaican experience.
              </p>
              <Button asChild size="lg" className="mt-7">
                <Link href="/tours-page">
                  Browse Our Tours <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-3xl border border-border shadow-lg shadow-primary/5">
                <Image
                  src="/ingested/travsuntours/1.2-1.webp"
                  alt="Trav Sun Tours drivers exploring Jamaica"
                  width={800}
                  height={600}
                  sizes="(max-width:1024px) 100vw, 50vw"
                  quality={75}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          <RevealGroup className="mt-20 grid grid-cols-2 gap-6 border-t border-border pt-14 sm:grid-cols-4">
            {values.map((v) => (
              <RevealItem key={v.label} className="flex flex-col items-center gap-3 text-center">
                <span className="grid size-14 place-items-center rounded-2xl bg-accent/10 text-accent">
                  <v.icon className="size-6" />
                </span>
                <span className="text-sm font-medium">{v.label}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
