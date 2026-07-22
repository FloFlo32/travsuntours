import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, Users, ShieldCheck, Phone, Check, X, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { Gallery } from "@/components/magic/gallery";
import { Reveal } from "@/components/magic/reveal";
import { Button } from "@/components/ui/button";
import { brand } from "@/brand.config";
import { tours, getTourBySlug } from "@/data/tours";

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return {};
  return {
    title: tour.title,
    description: tour.overview
      ? tour.overview.slice(0, 155)
      : `${tour.title} with Trav Sun Tours, Montego Bay, Jamaica.`,
  };
}

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) notFound();

  const facts = [
    tour.duration && { icon: Clock, label: "Duration", value: tour.duration },
    tour.maxGuests && { icon: Users, label: "Max Guests", value: tour.maxGuests },
    tour.minAge && { icon: ShieldCheck, label: "Min Age", value: tour.minAge },
  ].filter(Boolean) as { icon: typeof Clock; label: string; value: string }[];

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero image={tour.cover} alt={tour.title} crumb="Tours" title={tour.title}>
          {facts.length > 0 && (
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-8 sm:grid-cols-3">
              {facts.map((f) => (
                <div key={f.label} className="flex items-center gap-2.5">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <f.icon className="size-4.5" />
                  </span>
                  <span className="text-sm">
                    <span className="block text-xs text-muted-foreground">{f.label}</span>
                    <span className="font-semibold">{f.value}</span>
                  </span>
                </div>
              ))}
            </div>
          )}
        </PageHero>

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
            <div className="space-y-14">
              {tour.overview && (
                <Reveal>
                  <h2 className="text-2xl font-bold sm:text-3xl">Overview</h2>
                  <p className="mt-4 whitespace-pre-line text-muted-foreground">
                    {tour.overview}
                  </p>
                </Reveal>
              )}

              {tour.steps.length > 0 && (
                <Reveal delay={0.05}>
                  <h2 className="text-2xl font-bold sm:text-3xl">Tour Plan</h2>
                  <div className="mt-5 space-y-4">
                    {tour.steps.map((s, i) => (
                      <div key={i} className="rounded-2xl border border-border bg-card p-6">
                        {s.title && <h3 className="font-semibold">{s.title}</h3>}
                        {s.items.length > 0 && (
                          <ul className="mt-3 space-y-2">
                            {s.items.map((item, j) => (
                              <li key={j} className="flex gap-2.5 text-sm text-muted-foreground">
                                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </Reveal>
              )}

              {tour.gallery.length > 0 && (
                <Reveal delay={0.1}>
                  <h2 className="text-2xl font-bold sm:text-3xl">Gallery</h2>
                  <div className="mt-5">
                    <Gallery
                      images={tour.gallery.map((src) => ({ src, alt: tour.title }))}
                    />
                  </div>
                </Reveal>
              )}
            </div>

            <div className="lg:sticky lg:top-28 lg:h-fit">
              <div className="space-y-6 rounded-3xl border border-border bg-card p-7 shadow-lg shadow-primary/5">
                <div>
                  <p className="text-sm text-muted-foreground">Ready to book?</p>
                  <p className="mt-1 text-2xl font-bold">Contact us for pricing</p>
                </div>
                <div className="flex flex-col gap-3">
                  <Button asChild size="lg" className="w-full">
                    <a href={`tel:+${brand.contact.phone}`}>
                      <Phone className="size-4" /> +1 876-281-2871
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="w-full">
                    <Link href="/contact">
                      Send an inquiry <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>

                {tour.included.length > 0 && (
                  <div className="border-t border-border pt-5">
                    <h3 className="text-sm font-semibold">Included</h3>
                    <ul className="mt-3 space-y-2">
                      {tour.included.map((item, i) => (
                        <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                          <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {tour.excluded.length > 0 && (
                  <div className="border-t border-border pt-5">
                    <h3 className="text-sm font-semibold">Not Included</h3>
                    <ul className="mt-3 space-y-2">
                      {tour.excluded.map((item, i) => (
                        <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                          <X className="mt-0.5 size-4 shrink-0 text-destructive/70" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
