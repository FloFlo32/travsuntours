import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { ImageCard } from "@/components/magic/image-card";
import { RevealGroup, RevealItem } from "@/components/magic/reveal";
import { tours } from "@/data/tours";

export const metadata: Metadata = {
  title: "Tours Page",
  description:
    "Browse every Jamaica tour and excursion from Trav Sun Tours: catamaran cruises, ATV adventures, river rafting, Bob Marley tours and more.",
};

export default function ToursPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          image="/ingested/travsuntours/mystic-mountain-tour.webp"
          alt="Jamaica Tours and excursions"
          crumb="Tours"
          title="Jamaica Tours & Excursions"
          subtitle={`${tours.length} Tours to choose from, every one led by a registered Trav Sun Tours driver.`}
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-24">
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tours.map((t) => (
              <RevealItem key={t.slug}>
                <ImageCard
                  href={`/booking/${t.slug}`}
                  src={t.cover}
                  alt={t.title}
                  title={t.title}
                  description={
                    t.duration ? `${t.duration} · Max ${t.maxGuests} guests` : undefined
                  }
                  className="h-full"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </section>
      </main>
      <Footer />
    </>
  );
}
