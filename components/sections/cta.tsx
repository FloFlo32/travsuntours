import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/magic/aurora-background";
import { Reveal } from "@/components/magic/reveal";

export function CTA() {
  return (
    <section id="cta" className="container-px mx-auto max-w-6xl py-20 sm:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-20 text-center sm:px-12">
          <AuroraBackground />
          <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
            Ready for an unforgetable tour?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Book your Jamaica excursion, airport transfer or private tour today
            and let Trav Sun Tours show you the true island experience.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/tours-page">
                Book Now <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={`tel:+${brand.contact.phone}`}>
                <Phone className="size-4" /> Call +1 876-281-2871
              </a>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
