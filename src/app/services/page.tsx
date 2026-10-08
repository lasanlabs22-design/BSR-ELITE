import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { services } from "@/lib/content";
import { CtaBand, Marquee, PageHero, SectionHeading } from "@/components/Sections";
import { WhatsAppIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Modular kitchens, wardrobes, living rooms, TV units, bedrooms, false ceilings, pooja units, sliding doors and full-home interiors — designed and manufactured in-house by BSR Elite.",
};

const homeTypes = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "Duplex", "Villa", "Independent House", "Penthouse", "Renovation"];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Everything your home needs, <em className="text-brass-light">under one roof.</em>
          </>
        }
        intro="From a single wardrobe to a complete turnkey home — designed by our studio, manufactured in our workshop and installed by our team."
        image="/images/kitchen-grey-shaker.jpg"
      />

      {/* Quick index */}
      <nav aria-label="Services" className="sticky top-[68px] z-30 hidden border-b border-charcoal/10 bg-ivory/90 backdrop-blur-md md:block">
        <div className="container-x flex gap-8 overflow-x-auto py-4 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted">
          {services.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="shrink-0 transition-colors hover:text-brass">
              {s.title}
            </a>
          ))}
        </div>
      </nav>

      <section className="py-20 sm:py-28">
        <div className="container-x space-y-24 sm:space-y-32">
          {services.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <article key={s.id} id={s.id} className="grid scroll-mt-36 items-center gap-10 lg:grid-cols-12 lg:gap-16">
                <div className={`img-zoom relative aspect-[4/3] overflow-hidden rounded-[2rem] lg:col-span-7 ${flip ? "lg:order-2" : ""}`} data-reveal>
                  <Image src={s.image} alt={s.title} fill sizes="(min-width:1024px) 58vw, 100vw" className="object-cover" />
                  <span className="absolute left-5 top-5 rounded-full bg-ivory/90 px-4 py-2 font-display text-lg text-charcoal backdrop-blur">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="lg:col-span-5" data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
                  <p className="eyebrow">Service {String(i + 1).padStart(2, "0")}</p>
                  <h2 className="h-display mt-4 text-4xl sm:text-5xl">{s.title}</h2>
                  <p className="mt-3 font-display text-xl italic text-brass sm:text-2xl">{s.short}</p>
                  <p className="mt-5 leading-relaxed text-muted sm:text-lg">{s.description}</p>
                  <ul className="mt-8 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-1">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-[0.95rem]">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brass/15 text-brass">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappLink(`Hello BSR Elite, I'm interested in ${s.title}. Can we discuss?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-dark mt-10"
                  >
                    <WhatsAppIcon className="h-4 w-4" /> Enquire on WhatsApp
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <Marquee tone="brass" items={["Precision-made", "Factory-direct", "Soft-close hardware", "Honest materials", "On-time installation"]} />

      <section className="bg-sand py-24 sm:py-28">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Homes we design"
            title={
              <>
                Any size. Any style. <em className="text-brass">Any home.</em>
              </>
            }
            intro="Whether it's a compact city apartment or a sprawling villa, every project gets the same attention to detail."
          />
          <ul className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3" data-reveal>
            {homeTypes.map((h) => (
              <li key={h} className="rounded-full border border-charcoal/15 bg-ivory px-6 py-3 font-display text-xl text-charcoal">
                {h}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Tell us which rooms you're planning." />
    </>
  );
}
