import { ShieldCheck, Zap, Compass } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

const points = [
  {
    icon: Zap,
    title: "Easy & Quick Booking",
    body: "There are many variations of but the majority have simply free text.",
  },
  {
    icon: Compass,
    title: "Best Tour Selection",
    body: "There are many variations of but the majority have simply free text.",
  },
];

export function Features() {
  return (
    <section id="features" className="container-px mx-auto max-w-6xl py-20 sm:py-28">
      <Reveal className="max-w-2xl">
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Why book with us
        </span>
        <h2 className="mt-3 flex items-center gap-3 text-4xl font-bold sm:text-5xl">
          <ShieldCheck className="size-9 text-accent" aria-hidden />
          Best Price Guarantee
        </h2>
      </Reveal>

      <RevealGroup className="mt-12 grid gap-6 md:grid-cols-2">
        {points.map((p) => (
          <RevealItem
            key={p.title}
            className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <p.icon className="size-6" />
            </div>
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-muted-foreground">{p.body}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
