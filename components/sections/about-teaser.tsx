import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/magic/reveal";

export function AboutTeaser() {
  return (
    <section className="container-px mx-auto max-w-6xl py-20 sm:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border shadow-lg shadow-primary/5">
            <Image
              src="/ingested/travsuntours/1.2-1.webp"
              alt="Dare to explore with Trav Sun Tours"
              width={800}
              height={600}
              sizes="(max-width:1024px) 100vw, 50vw"
              quality={75}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            About us
          </span>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Dare to Explore with Trav Sun Tours
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Trav Sun Tours is a certified tour company. We have a small group of
            dedicated, honest, hardworking and reliable registered tour drivers
            who have a passion for what we do. We like to meet new people and
            show them around our beautiful country, Jamaica.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            We don&apos;t just think about our travelers as customers, we also
            think of you as a friend, so whenever you&apos;re booking with us
            you can expect the true Jamaican experience.
          </p>
          <Button asChild size="lg" className="mt-7">
            <Link href="/about">
              About Us <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
