"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail } from "lucide-react";
import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";
import { FacebookIcon, InstagramIcon, TripadvisorIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/tours-page", label: "Tours" },
  { href: "/transportation", label: "Transportation" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Utility bar: phone, email, socials. Hides once the page is scrolled. */}
      <div
        className={cn(
          "hidden overflow-hidden bg-foreground text-background transition-all duration-300 md:block",
          scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
        )}
      >
        <div className="container-px mx-auto flex h-10 max-w-6xl items-center justify-between text-sm">
          <div className="flex items-center gap-5">
            <a href={`tel:+${brand.contact.phone}`} className="flex items-center gap-1.5 transition-colors hover:text-primary">
              <Phone className="size-3.5" aria-hidden />
              +1 876-281-2871
            </a>
            <a href={`mailto:${brand.social.email}`} className="flex items-center gap-1.5 transition-colors hover:text-primary">
              <Mail className="size-3.5" aria-hidden />
              {brand.social.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href={brand.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-colors hover:text-primary">
              <FacebookIcon className="size-3.5" aria-hidden />
            </a>
            <a href={brand.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-colors hover:text-primary">
              <InstagramIcon className="size-3.5" aria-hidden />
            </a>
            <a href={brand.social.tripadvisor} target="_blank" rel="noopener noreferrer" aria-label="Tripadvisor" className="transition-colors hover:text-primary">
              <TripadvisorIcon className="size-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "w-full border-b transition-all duration-300",
          scrolled ? "border-border/60 bg-background/85 backdrop-blur-xl shadow-sm" : "border-transparent bg-background"
        )}
      >
        <nav className="container-px mx-auto flex h-20 max-w-6xl items-center justify-between">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/ingested/travsuntours/624e8648-98b6-4c1a-9c77-4857d1f38227-1920w.webp"
              alt="Trav Sun Tours"
              width={150}
              height={97}
              priority
              className="h-14 w-auto object-contain"
            />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-md px-3.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent/10 hover:text-accent"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button asChild size="default" className="hidden lg:inline-flex">
              <Link href="/tours-page">Book Now</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </nav>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <div className="container-px mx-auto flex max-w-6xl flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-accent/10 hover:text-accent"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-4 px-3 py-2 text-sm text-muted-foreground">
              <a href={`tel:+${brand.contact.phone}`} className="flex items-center gap-1.5">
                <Phone className="size-3.5" /> +1 876-281-2871
              </a>
            </div>
            <Button asChild className="mt-1">
              <Link href="/tours-page" onClick={() => setOpen(false)}>
                Book Now
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
