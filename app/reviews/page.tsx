import type { Metadata } from "next";
import { Star, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { CTA } from "@/components/sections/cta";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { TripadvisorIcon, FacebookIcon, InstagramIcon } from "@/components/icons";
import { brand } from "@/brand.config";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "What travelers are saying about Trav Sun Tours on Tripadvisor, Facebook and Instagram.",
};

const reviewers = ["John S", "Maria G", "Kaniesha A", "Compass790657"];

const platforms = [
  { icon: TripadvisorIcon, label: "Tripadvisor", href: brand.social.tripadvisor },
  { icon: FacebookIcon, label: "Facebook", href: brand.social.facebook },
  { icon: InstagramIcon, label: "Instagram", href: brand.social.instagram },
];

export default function ReviewsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          image="/ingested/travsuntours/8df82c78-2929-4924-b111-7853ed7dc1e3.webp"
          alt="What They're Saying"
          crumb="Reviews"
          title="What They're Saying"
          subtitle="Customers who have experienced Trav Sun Tours have praised the company for professionalism, punctuality and excellent customer service."
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-24">
          <Reveal className="max-w-2xl">
            <p className="text-lg text-muted-foreground">
              Travelers have appreciated the clean and comfortable vehicles, as
              well as the knowledgeable drivers who have shared interesting
              facts about Jamaica along the way. Many have expressed their
              satisfaction with the smooth and efficient transportation
              process, making their arrival and departure stress-free.
            </p>
          </Reveal>

          <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-3">
            {platforms.map((p) => (
              <RevealItem key={p.label}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
                >
                  <span className="flex items-center gap-3 font-semibold">
                    <p.icon className="size-5 text-primary" />
                    Read reviews on {p.label}
                  </span>
                  <ExternalLink className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1} className="mt-14">
            <h2 className="text-2xl font-bold sm:text-3xl">Recently reviewed by</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {reviewers.map((name) => (
                <span
                  key={name}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium"
                >
                  <Star className="size-3.5 fill-primary text-primary" />
                  {name}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
