import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Plus } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import { faqs } from "@/lib/content";
import { WhatsAppIcon } from "./Icons";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  image: string;
}) {
  return (
    <section className="grain relative isolate flex min-h-[72svh] items-end overflow-hidden bg-ink text-ivory">
      <Image src={image} alt="" fill priority sizes="100vw" className="-z-20 animate-ken object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/55 to-ink/30" />
      <div className="container-x pb-16 pt-40 sm:pb-20">
        <p className="eyebrow !text-brass-light" data-reveal>
          {eyebrow}
        </p>
        <h1 className="h-display mt-6 max-w-4xl text-[2.9rem] sm:text-6xl lg:text-[5.2rem]" data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/75 sm:text-lg" data-reveal style={{ "--reveal-delay": "160ms" } as React.CSSProperties}>
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} data-reveal>
      <p className={`eyebrow ${tone === "light" ? "!text-brass-light" : ""} ${align === "center" ? "justify-center" : ""}`}>{eyebrow}</p>
      <h2 className={`h-display mt-5 text-[2.4rem] sm:text-5xl lg:text-6xl ${tone === "light" ? "text-ivory" : "text-charcoal"}`}>{title}</h2>
      {intro && (
        <p className={`mt-6 text-base leading-relaxed sm:text-lg ${tone === "light" ? "text-ivory/70" : "text-muted"} ${align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}

export function Marquee({ items, tone = "dark" }: { items: string[]; tone?: "dark" | "brass" }) {
  const row = [...items, ...items];
  return (
    <div
      className={`relative flex overflow-hidden border-y py-5 ${
        tone === "brass" ? "border-brass/30 bg-brass text-ivory" : "border-ivory/10 bg-charcoal text-ivory"
      }`}
      aria-hidden="true"
    >
      <div className="flex shrink-0 animate-marquee items-center gap-10 whitespace-nowrap pr-10 hover:[animation-play-state:paused]">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-2xl italic sm:text-3xl">
            {item}
            <span className="block h-2 w-2 rotate-45 bg-brass-light" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function CtaBand({
  title = "Let's create a home that feels like you.",
  text = "Share your floor plan or just an idea. We'll take it from there — design, manufacture and install.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal text-ivory">
      <Image src="/images/bedroom-dark.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-35" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/50" />
      <div className="container-x grid gap-10 py-24 sm:py-28 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7" data-reveal>
          <p className="eyebrow !text-brass-light">Free design consultation</p>
          <h2 className="h-display mt-5 text-[2.6rem] sm:text-6xl">{title}</h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end" data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-brass">
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us
          </a>
          <a href={site.phoneHref} className="btn-ghost-light">
            <Phone className="h-4 w-4" /> Call {site.founder}
          </a>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="bg-sand py-24 sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow="FAQ" title={<>Questions, <em className="text-brass">answered.</em></>} />
          <Link href="/contact/" className="btn-ghost-dark mt-10" data-reveal>
            Ask us anything <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="divide-y divide-charcoal/12 border-y border-charcoal/12 lg:col-span-8">
          {faqs.map((f, i) => (
            <details key={f.q} className="group" data-reveal style={{ "--reveal-delay": `${i * 50}ms` } as React.CSSProperties}>
              <summary className="flex cursor-pointer items-start justify-between gap-6 py-7">
                <span className="font-display text-xl leading-snug text-charcoal sm:text-2xl">{f.q}</span>
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-charcoal/20 transition-all duration-300 group-open:rotate-45 group-open:border-brass group-open:bg-brass group-open:text-ivory">
                  <Plus className="h-4 w-4" />
                </span>
              </summary>
              <p className="max-w-2xl pb-7 pr-12 leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
