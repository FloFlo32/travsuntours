import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { tours } from "@/data/tours";
import { Button } from "@/components/ui/button";
import { AutoSlider } from "@/components/magic/auto-slider";
import { ImageCard } from "@/components/magic/image-card";
import { Reveal } from "@/components/magic/reveal";

export function ToursPreview() {
  const featured = tours.slice(0, 12);
  return (
    <section className="bg-secondary/40 py-20 sm:py-28">
      <div className="container-px mx-auto max-w-6xl">
        <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              30+ excursions
            </span>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
              Jamaica Tours & Private Airport Transfers
            </h2>
          </div>
          <Button asChild variant="outline" className="shrink-0">
            <Link href="/tours-page">
              View all tours <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <AutoSlider itemClassName="w-[86%] sm:w-[48%] lg:w-[31%]">
            {featured.map((t) => (
              <ImageCard
                key={t.slug}
                href={`/booking/${t.slug}`}
                src={t.cover}
                alt={t.title}
                title={t.title}
                description={t.duration ? `${t.duration} · Max ${t.maxGuests} guests` : undefined}
                className="h-full"
              />
            ))}
          </AutoSlider>
        </Reveal>
      </div>
    </section>
  );
}
