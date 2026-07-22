import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

/**
 * PageHero — the shared hero for every inner page. A full-bleed real photo
 * up top, then a white card overlapping the seam with the heading. This is
 * how a photo and a headline pair without a dark scrim: the image stays in
 * its own area, the text sits on a solid surface (see CLAUDE.md §0).
 */
export function PageHero({
  image,
  alt,
  crumb,
  title,
  subtitle,
  children,
}: {
  image: string;
  alt: string;
  crumb: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative">
      <div className="relative h-[38vh] min-h-[280px] w-full overflow-hidden sm:h-[44vh]">
        <Image
          src={image}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="container-px relative z-10 mx-auto -mt-14 max-w-6xl sm:-mt-20">
        <div className="rounded-3xl border border-border bg-card p-7 shadow-xl shadow-primary/10 sm:p-10">
          <nav className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-primary">
              Home
            </Link>
            <ChevronRight className="size-3.5" aria-hidden />
            <span className="text-foreground">{crumb}</span>
          </nav>
          <h1 className="mt-3 text-balance text-4xl font-bold leading-[1.05] sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
