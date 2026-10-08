import type { Metadata } from "next";
import Image from "next/image";
import { Factory, Gem, Handshake, Ruler } from "lucide-react";
import { site } from "@/lib/site";
import { materials, processSteps } from "@/lib/content";
import { CtaBand, PageHero, SectionHeading } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Our Studio",
  description:
    "BSR Elite is a home interior design and manufacturing company — designers, craftsmen and installers working under one roof to build bespoke homes.",
};

const values = [
  { icon: Ruler, title: "Detail-obsessed", text: "Every gap, edge and alignment is measured, checked and checked again." },
  { icon: Factory, title: "Made by us", text: "In-house manufacturing means the quality is ours to own — and we own it." },
  { icon: Gem, title: "Quietly premium", text: "Timeless finishes and proportions over passing trends." },
  { icon: Handshake, title: "Straightforward", text: "Clear quotations, honest advice and a timeline we stand behind." },
];

const d = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as React.CSSProperties;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Studio"
        title={
          <>
            Designers and makers, <em className="text-brass-light">under one roof.</em>
          </>
        }
        intro={`${site.legalName} brings design, manufacturing and installation together — so the home you imagine is the home you get.`}
        image="/images/living-coffered.jpg"
      />

      {/* Story */}
      <section className="py-24 sm:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Our story"
              title={
                <>
                  Built on craft. <em className="text-brass">Driven by detail.</em>
                </>
              }
            />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted sm:text-lg" data-reveal style={d(100)}>
              <p>
                BSR Elite was founded by {site.founder} with a simple belief: the people who design your home should also be the
                people who build it. When design and manufacturing live in separate places, details get lost. When they live
                together, they get perfected.
              </p>
              <p>
                Today our studio designs and manufactures interiors for every kind of home — apartments, villas, duplexes and
                independent houses. From modular kitchens and wardrobes to sliding doors, ceilings and complete turnkey homes,
                every piece is cut, finished and installed by our own team.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-5 border-t border-charcoal/10 pt-8" data-reveal style={d(180)}>
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-charcoal font-display text-2xl text-brass-light">R</span>
              <div>
                <p className="font-display text-2xl">{site.founder}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">Founder, BSR Elite</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:col-span-6">
            <div className="relative mt-12 aspect-[3/4] overflow-hidden rounded-[1.75rem]" data-reveal>
              <Image src="/images/craft-saw.jpg" alt="Panels being cut in the BSR Elite workshop" fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem]" data-reveal style={d(120)}>
              <Image src="/images/craft-plans.jpg" alt="Designer drafting a floor plan" fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-charcoal py-24 text-ivory sm:py-28">
        <div className="container-x">
          <SectionHeading tone="light" eyebrow="What we stand for" title="Four promises we build into every home." />
          <div className="mt-14 grid gap-px overflow-hidden rounded-[1.75rem] bg-ivory/10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div key={v.title} className="bg-charcoal p-8 sm:p-10" data-reveal style={d(i * 80)}>
                <v.icon className="h-8 w-8 text-brass-light" strokeWidth={1.3} />
                <h3 className="mt-8 font-display text-[1.75rem]">{v.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ivory/65">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop */}
      <section className="py-24 sm:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="The workshop"
              title={
                <>
                  Materials we <em className="text-brass">trust.</em>
                </>
              }
              intro="We work with proven boards, finishes and hardware — and we'll always tell you exactly what goes into your home."
            />
            <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[1.75rem]" data-reveal>
              <Image src="/images/kitchen-white.jpg" alt="Finished modular kitchen" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
            </div>
          </div>
          <ul className="grid content-start gap-px self-start overflow-hidden rounded-[1.75rem] border border-charcoal/10 bg-charcoal/10 sm:grid-cols-2 lg:col-span-7">
            {materials.map((m, i) => (
              <li key={m.name} className="bg-ivory p-7" data-reveal style={d((i % 2) * 80)}>
                <span className="text-xs font-semibold tracking-[0.25em] text-brass">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-2xl">{m.name}</h3>
                <p className="mt-1.5 text-sm text-muted">{m.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process recap */}
      <section className="bg-sand py-24 sm:py-28">
        <div className="container-x">
          <SectionHeading align="center" eyebrow="Our process" title="Five steps. One team." />
          <ol className="mx-auto mt-14 max-w-3xl space-y-4">
            {processSteps.map((s, i) => (
              <li key={s.title} className="flex gap-6 rounded-2xl bg-ivory p-6 sm:p-8" data-reveal style={d(i * 60)}>
                <span className="font-display text-4xl text-brass">{i + 1}</span>
                <div>
                  <h3 className="font-display text-2xl">{s.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
