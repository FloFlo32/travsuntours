import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { ToursPreview } from "@/components/sections/tours-preview";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <ToursPreview />
        <AboutTeaser />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
