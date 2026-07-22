import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, ShieldCheck, Tag, Zap, Users } from "lucide-react";
import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";

const trust = [
  { icon: ShieldCheck, label: "Trust and Safety" },
  { icon: Tag, label: "Best Price Guarantee" },
  { icon: Zap, label: "Easy & Quick Booking" },
  { icon: Users, label: "Best Travel Agents" },
];

export function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[62vh] min-h-[420px] w-full overflow-hidden sm:h-[72vh]">
        <Image
          src="/ingested/travsuntours/mystic-mountain-tour.webp"
          alt="Jamaica Tours and excursions"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="container-px relative z-10 mx-auto -mt-24 max-w-6xl sm:-mt-32">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-xl shadow-primary/10 sm:p-14">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Montego Bay, Jamaica
          </span>
          <h1 className="mt-4 max-w-2xl text-balance text-4xl font-bold leading-[1.05] sm:text-6xl">
            Jamaica Tours & Excursions
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            {brand.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/tours-page">
                Browse Tours <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={`tel:+${brand.contact.phone}`}>
                <Phone className="size-4" /> +1 876-281-2871
              </a>
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 border-t border-border pt-8 sm:grid-cols-4">
            {trust.map((t) => (
              <div key={t.label} className="flex items-center gap-2.5">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                  <t.icon className="size-4.5" />
                </span>
                <span className="text-sm font-medium leading-tight">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
