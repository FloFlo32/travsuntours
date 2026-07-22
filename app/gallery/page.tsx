import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { CTA } from "@/components/sections/cta";
import { Gallery } from "@/components/magic/gallery";
import { Reveal } from "@/components/magic/reveal";
import galleryImages from "@/data/gallery-images.json";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore Jamaica through real photos from Trav Sun Tours excursions: catamaran cruises, waterfalls, ATV rides, horseback riding and more.",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          image="/ingested/travsuntours/1-26.webp"
          alt="Explore Jamaica"
          crumb="Gallery"
          title="Explore Jamaica"
          subtitle="Real moments from real Trav Sun Tours excursions across Montego Bay, Ocho Rios and beyond."
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-24">
          <Reveal>
            <Gallery images={galleryImages.map((src) => ({ src, alt: "Tour Image" }))} />
          </Reveal>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
