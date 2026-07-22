import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { brand } from "@/brand.config";
import { FacebookIcon, InstagramIcon, TripadvisorIcon } from "@/components/icons";
import { tours } from "@/data/tours";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Tours", href: "/tours-page" },
  { label: "Transportation", href: "/transportation" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const featuredTours = tours.slice(0, 4);

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/60 bg-secondary/40">
      <div className="container-px mx-auto grid max-w-6xl gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center">
            <Image
              src="/ingested/travsuntours/624e8648-98b6-4c1a-9c77-4857d1f38227-1920w.webp"
              alt="Trav Sun Tours"
              width={150}
              height={97}
              className="h-16 w-auto object-contain"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Trav Sun Tours is a certified tour company. We have a small group of
            dedicated, honest, hardworking and reliable registered tour drivers
            who have a passion for what we do.
          </p>
          <div className="mt-5 flex gap-2">
            <a
              href={brand.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid size-9 place-items-center rounded-lg border border-border/60 bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <FacebookIcon className="size-4" />
            </a>
            <a
              href={brand.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid size-9 place-items-center rounded-lg border border-border/60 bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <InstagramIcon className="size-4" />
            </a>
            <a
              href={brand.social.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tripadvisor"
              className="grid size-9 place-items-center rounded-lg border border-border/60 bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <TripadvisorIcon className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold">Contact Info</h4>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              {brand.contact.address}
            </li>
            <li>
              <a href={`tel:+${brand.contact.phone}`} className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                <Phone className="size-4 shrink-0 text-primary" />
                +1 876-281-2871
              </a>
            </li>
            <li>
              <a href={`mailto:${brand.social.email}`} className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                <Mail className="size-4 shrink-0 text-primary" />
                {brand.social.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold">Popular Tours</h4>
          <ul className="mt-4 space-y-2.5">
            {featuredTours.map((t) => (
              <li key={t.slug}>
                <Link
                  href={`/booking/${t.slug}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {t.title.length > 38 ? `${t.title.slice(0, 38)}…` : t.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-6">
        <p className="container-px mx-auto max-w-6xl text-sm text-muted-foreground">
          Copyright © 2026 Trav Sun Tours. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
