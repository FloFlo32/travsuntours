import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPinned,
  Route,
  CalendarCheck,
  Zap,
  BadgeDollarSign,
  Check,
  X,
  Phone,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { Button } from "@/components/ui/button";
import { brand } from "@/brand.config";

export const metadata: Metadata = {
  title: "Transportation",
  description:
    "Jamaica VIP & Private Airport Transfer with Trav Sun Tours: Montego Bay Sangster International Airport transportation in comfort and style.",
};

const benefits = [
  {
    icon: CalendarCheck,
    title: "Book Now, Pay Later",
    body: "No need to miss out if you aren't ready to book.",
  },
  {
    icon: Zap,
    title: "Instant Booking",
    body: "Book online immediately, no need to request!",
  },
  {
    icon: BadgeDollarSign,
    title: "Best Price Guaranteed",
    body: "If you find a price cheaper elsewhere we will price match it.",
  },
];

const faqs = [
  {
    q: "Cancellation Policy",
    a: "For a full refund cancel at least 24 hours before the start of your booking.",
  },
  { q: "Price", a: "Prices from $20.00 / Person." },
  {
    q: "How long before the event do I need to book?",
    a: "You can book at any time before the event.",
  },
  { q: "Vouchers accepted in the following formats", a: "Mobile." },
  {
    q: "Is an adult required for the booking?",
    a: "At least one adult or senior required per booking.",
  },
];

const additionalInfo = [
  "Wheelchair accessible",
  "Infants and small children can ride in a pram or stroller",
  "Service animals allowed",
  "Public transportation options are available nearby",
  "Specialized infant seats are available",
  "All areas and surfaces are wheelchair accessible",
  "Suitable for all physical fitness levels",
  "Hand sanitiser available to participants and staff",
];

export default function TransportationPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          image="/ingested/travsuntours/1-8.webp"
          alt="Jamaica VIP and Private Airport Transfer"
          crumb="Transportation"
          title="Jamaica VIP & Private Airport Transfer"
          subtitle="Do you want the perfect start to your Jamaican vacation? Look no further than Trav Sun Tours' private transfer service from Montego Bay to Montego Bay Airport."
        >
          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-8 sm:grid-cols-2">
            <div className="flex items-center gap-2.5">
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <Route className="size-4.5" />
              </span>
              <span className="text-sm">
                <span className="block text-xs text-muted-foreground">Your Itinerary</span>
                <span className="font-semibold">Sangster Intl Airport</span>
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <MapPinned className="size-4.5" />
              </span>
              <span className="text-sm">
                <span className="block text-xs text-muted-foreground">End Point</span>
                <span className="font-semibold">Montego Bay, JM</span>
              </span>
            </div>
          </div>
        </PageHero>

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
            <div className="space-y-14">
              <Reveal>
                <p className="text-lg text-muted-foreground">
                  With over 20 years of experience in the travel industry, Trav
                  Sun Tours is dedicated to providing you with the ultimate
                  experience. From the moment you step off the plane until you
                  reach your destination, you&apos;ll receive a personalized and
                  unforgettable guided tour of the island.
                </p>
              </Reveal>

              <RevealGroup className="grid gap-6 sm:grid-cols-2">
                {[
                  {
                    title: "What to expect?",
                    body: "When you book Trav Sun Tours' private transfer, you can expect a seamless and luxurious journey. You'll be picked up at the Sangster International Airport in Montego Bay by a knowledgeable and friendly driver, who will ensure your safety and comfort throughout the entire trip. All vehicles are clean, air-conditioned, and up to date, guaranteeing a relaxing and enjoyable ride. Whether you're traveling alone or with a large group, Trav Sun Tours can accommodate your needs and provide the perfect transportation solution.",
                  },
                  {
                    title: "Who is this for?",
                    body: "Trav Sun Tours' private transfer is suitable for all travelers looking for a stress-free and comfortable start to their Jamaican vacation. Whether you're a solo adventurer, a couple on a romantic getaway, or a family exploring the island, this service is tailored to meet your needs. With vehicles of all sizes available, no group is too large or small for Trav Sun Tours.",
                  },
                  {
                    title: "Why book this?",
                    body: "Booking private transfer is the best way to ensure a smooth and hassle-free journey from the airport to your destination. With their extensive knowledge of Jamaica, their drivers can provide valuable insights and recommendations for your stay. Additionally, the luxury vehicles and personalized service guarantee a comfortable and enjoyable ride.",
                  },
                  {
                    title: "Good to know",
                    body: "When you book Trav Sun Tours' private transfer, you can rest assured that you're in safe hands. All vehicles are of the latest models, well-maintained, and reliable. The drivers are not only experienced but also knowledgeable about the island, ensuring a smooth and informative journey.",
                  },
                ].map((b) => (
                  <RevealItem
                    key={b.title}
                    className="rounded-2xl border border-border bg-card p-7"
                  >
                    <h3 className="text-lg font-semibold">{b.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{b.body}</p>
                  </RevealItem>
                ))}
              </RevealGroup>

              <Reveal>
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Montego Bay Jamaica Transportation
                </h2>
                <ul className="mt-5 space-y-3">
                  {[
                    "Private luxury transportation services",
                    "Latest models, safe and reliable vehicles",
                    "Knowledgeable and friendly drivers",
                    "Guided tour of the island from pick up to destination",
                    "Assistance with tour and excursion arrangements",
                  ].map((li) => (
                    <li key={li} className="flex gap-2.5 text-muted-foreground">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      {li}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal>
                <h2 className="text-2xl font-bold sm:text-3xl">This product benefits from</h2>
                <div className="mt-5 grid gap-5 sm:grid-cols-3">
                  {benefits.map((b) => (
                    <div key={b.title} className="rounded-2xl border border-border bg-card p-6">
                      <b.icon className="size-6 text-accent" />
                      <h3 className="mt-3 font-semibold">{b.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{b.body}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal>
                <h2 className="text-2xl font-bold sm:text-3xl">About this product</h2>
                <div className="mt-5 divide-y divide-border rounded-2xl border border-border bg-card">
                  {faqs.map((f) => (
                    <div key={f.q} className="p-6">
                      <h3 className="font-semibold">{f.q}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground">{f.a}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal>
                <h2 className="text-2xl font-bold sm:text-3xl">Additional information</h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {additionalInfo.map((li) => (
                    <li key={li} className="flex gap-2.5 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                      {li}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal>
                <h2 className="text-2xl font-bold sm:text-3xl">Reviews</h2>
                <p className="mt-4 text-muted-foreground">
                  Customers who have experienced Trav Sun Tours&apos; private
                  transfer have praised the company for their professionalism,
                  punctuality, and excellent customer service. Travelers have
                  appreciated the clean and comfortable vehicles, as well as the
                  knowledgeable drivers who have shared interesting facts about
                  Jamaica along the way.
                </p>
                <Button asChild variant="outline" className="mt-5">
                  <Link href="/reviews">
                    What They&apos;re Saying <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </Reveal>
            </div>

            <div className="lg:sticky lg:top-28 lg:h-fit">
              <div className="space-y-6 rounded-3xl border border-border bg-card p-7 shadow-lg shadow-primary/5">
                <div>
                  <p className="text-sm text-muted-foreground">Prices from</p>
                  <p className="mt-1 text-3xl font-bold">$20.00 <span className="text-base font-normal text-muted-foreground">/ person</span></p>
                </div>
                <Button asChild size="lg" className="w-full">
                  <a href={`tel:+${brand.contact.phone}`}>
                    <Phone className="size-4" /> +1 876-281-2871
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full">
                  <Link href="/contact">
                    Send an inquiry <ArrowRight className="size-4" />
                  </Link>
                </Button>

                <div className="border-t border-border pt-5">
                  <h3 className="text-sm font-semibold">Included</h3>
                  <ul className="mt-3 space-y-2">
                    {["Private transportation", "WiFi on board", "Air-conditioned vehicle"].map(
                      (li) => (
                        <li key={li} className="flex gap-2 text-sm text-muted-foreground">
                          <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                          {li}
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <div className="border-t border-border pt-5">
                  <h3 className="text-sm font-semibold">Not Included</h3>
                  <ul className="mt-3 space-y-2">
                    <li className="flex gap-2 text-sm text-muted-foreground">
                      <X className="mt-0.5 size-4 shrink-0 text-destructive/70" />
                      Restroom on board
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
