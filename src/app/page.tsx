import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import { differentiators, processSteps, projects, services } from "@/lib/content";
import { CtaBand, Faq, Marquee, SectionHeading } from "@/components/Sections";
import { WhatsAppIcon } from "@/components/Icons";

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as React.CSSProperties;

export default function HomePage() {
  // Picked to avoid repeating the photos already used by the service cards above.
  const featured = [projects[4], projects[11], projects[15], projects[6], projects[10], projects[20]];

  return (
    <>
      {/* ───────────── Hero ───────────── */}
      <section className="grain relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink text-ivory">
        <Image
          src="/images/hero-living.jpg"
          alt="A warm, earthy living room with a grey sofa, wooden coffee table and woven accents"
          fill
          priority
          sizes="100vw"
          className="-z-20 animate-ken object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/50 to-ink/25" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/60 to-transparent" />

        <div className="container-x pb-14 pt-36 sm:pb-20">
          <p className="eyebrow !text-brass-light" data-reveal>
            Design · Manufacture · Install
          </p>
          <h1 className="h-display mt-6 max-w-5xl text-[3.1rem] sm:text-7xl lg:text-[6.4rem]" data-reveal style={delay(100)}>
            Interiors crafted <em className="text-brass-light">in-house,</em>
            <br className="hidden sm:block" /> made to be lived in.
          </h1>
          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
            <p className="max-w-xl text-base leading-relaxed text-ivory/75 sm:text-lg lg:col-span-6" data-reveal style={delay(200)}>
              BSR Elite designs and manufactures bespoke interiors for every kind of home — modular kitchens, wardrobes, living
              spaces and complete makeovers — built in our own workshop, installed by our own team.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-6 lg:justify-end" data-reveal style={delay(300)}>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-brass">
                <WhatsAppIcon className="h-4 w-4" /> Book a Free Consultation
              </a>
              <Link href="/portfolio/" className="btn-ghost-light">
                View Our Work <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-16 hidden items-center justify-between border-t border-ivory/15 pt-6 text-xs uppercase tracking-[0.25em] text-ivory/55 md:flex">
            <span className="flex items-center gap-3">
              <ArrowDown className="h-4 w-4 animate-bounce text-brass-light" /> Scroll to explore
            </span>
            <span>Apartments · Villas · Independent Houses</span>
          </div>
        </div>
      </section>

      <Marquee
        items={["Modular Kitchens", "Wardrobes", "Living Rooms", "Bedrooms", "TV Units", "False Ceilings", "Pooja Units", "Full Home Interiors"]}
      />

      {/* ───────────── Intro / Philosophy ───────────── */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <p className="eyebrow" data-reveal>
              The BSR Elite Studio
            </p>
            <h2 className="h-display mt-5 text-[2.5rem] text-charcoal sm:text-5xl lg:text-[3.8rem]" data-reveal style={delay(80)}>
              We don&apos;t just design your home. <em className="text-brass">We build it</em> — in our own workshop.
            </h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg" data-reveal style={delay(160)}>
              Most interior firms design and then outsource the making. At BSR Elite, designers, craftsmen and installers work
              under one roof. That means sharper detailing, honest materials, fewer delays — and a home that looks exactly like the
              design you approved.
            </p>

            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-charcoal/10 sm:grid-cols-3">
              {[
                ["01", "Design", "Layouts, 3D views & material palettes tailored to you."],
                ["02", "Manufacture", "Precision-built in our workshop with quality checks."],
                ["03", "Install", "Fitted on site by our own trained team."],
              ].map(([n, t, d], i) => (
                <div key={n} className="bg-ivory p-6" data-reveal style={delay(200 + i * 80)}>
                  <span className="font-display text-3xl text-brass">{n}</span>
                  <h3 className="mt-3 text-sm font-bold uppercase tracking-[0.18em]">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative ml-auto aspect-[4/5] w-[82%] overflow-hidden rounded-[2rem]" data-reveal>
              <Image
                src="/images/living-blush.jpg"
                alt="Airy living room with a leather sofa, blush armchairs and a brass chandelier"
                fill
                sizes="(min-width:1024px) 40vw, 80vw"
                className="object-cover"
              />
            </div>
            <div
              className="absolute -bottom-10 left-0 aspect-[3/4] w-[46%] overflow-hidden rounded-[1.5rem] border-[6px] border-ivory shadow-2xl"
              data-reveal
              style={delay(150)}
            >
              <Image src="/images/craft-saw.jpg" alt="Craftsman cutting panels on a mitre saw" fill sizes="(min-width:1024px) 22vw, 45vw" className="object-cover" />
            </div>
            <div className="absolute right-4 top-6 flex h-28 w-28 items-center justify-center rounded-full bg-charcoal text-center text-ivory sm:right-0 sm:h-32 sm:w-32" data-reveal style={delay(250)}>
              <span className="text-[0.62rem] font-semibold uppercase leading-relaxed tracking-[0.2em]">
                Made
                <br />
                <span className="font-display text-2xl normal-case italic tracking-normal text-brass-light">in-house</span>
                <br />
                Since day one
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Services ───────────── */}
      <section className="bg-sand py-24 sm:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="What we do"
              title={
                <>
                  Every room, <em className="text-brass">every kind</em> of home.
                </>
              }
            />
            <Link href="/services/" className="btn-ghost-dark shrink-0" data-reveal>
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <Link
                key={s.id}
                href={`/services/#${s.id}`}
                className="img-zoom group relative isolate flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[1.75rem] p-7 text-ivory"
                data-reveal
                style={delay((i % 3) * 90)}
              >
                <Image src={s.image} alt="" fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="-z-20 object-cover" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent transition-opacity duration-500 group-hover:from-ink" />
                <span className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-ivory/15 backdrop-blur transition-all duration-500 group-hover:rotate-45 group-hover:bg-brass">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
                <span className="font-sans text-xs tracking-[0.3em] text-brass-light">0{i + 1}</span>
                <h3 className="mt-2 font-display text-3xl sm:text-[2.1rem]">{s.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-ivory/75">{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Why BSR Elite ───────────── */}
      <section className="grain relative overflow-hidden bg-charcoal py-24 text-ivory sm:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-12 lg:items-center">
          <div className="relative lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem]" data-reveal>
              <Image src="/images/villa-night.jpg" alt="Contemporary villa lit up at dusk" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
            </div>
            <div className="absolute -right-2 bottom-8 max-w-[15rem] rounded-2xl bg-ivory p-6 text-charcoal shadow-2xl sm:-right-8" data-reveal style={delay(160)}>
              <p className="font-display text-2xl leading-tight">
                &ldquo;What you approve is <em className="text-brass">exactly</em> what we build.&rdquo;
              </p>
              <p className="mt-3 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-muted">The BSR Elite promise</p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            <SectionHeading
              tone="light"
              eyebrow="The Elite difference"
              title={
                <>
                  A manufacturer&apos;s precision. <em className="text-brass-light">A designer&apos;s eye.</em>
                </>
              }
            />
            <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
              {differentiators.map((d, i) => (
                <div key={d.title} className="border-t border-ivory/15 pt-6" data-reveal style={delay(i * 90)}>
                  <span className="font-display text-lg italic text-brass-light">0{i + 1}</span>
                  <h3 className="mt-2 font-display text-[1.75rem]">{d.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ivory/65">{d.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Featured work ───────────── */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Selected work"
              title={
                <>
                  Homes we&apos;ve <em className="text-brass">shaped.</em>
                </>
              }
              intro="A glimpse of kitchens, bedrooms, living spaces and storage crafted by our studio."
            />
            <Link href="/portfolio/" className="btn-dark shrink-0" data-reveal>
              Full portfolio <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-14 grid auto-rows-[260px] grid-cols-1 gap-5 sm:auto-rows-[300px] sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p, i) => {
              const span = ["sm:col-span-2 lg:row-span-2", "lg:row-span-2", "", "", "lg:col-span-2", "sm:col-span-2"][i];
              return (
                <Link
                  key={p.title}
                  href="/portfolio/"
                  className={`img-zoom group relative isolate overflow-hidden rounded-[1.5rem] ${span}`}
                  data-reveal
                  style={delay((i % 3) * 80)}
                >
                  <Image src={p.image} alt={p.title} fill sizes="(min-width:1024px) 50vw, 100vw" className="-z-10 object-cover" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-ink/85 to-transparent p-6 pt-20 text-ivory">
                    <div>
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-brass-light">
                        {p.category} · {p.type}
                      </p>
                      <h3 className="mt-1.5 font-display text-2xl sm:text-[1.7rem]">{p.title}</h3>
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────── Process ───────────── */}
      <section className="border-t border-charcoal/10 bg-ivory pb-24 pt-24 sm:pb-32 sm:pt-32">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="How we work"
            title={
              <>
                From first visit to <em className="text-brass">final handover.</em>
              </>
            }
            intro="A clear, five-step process — so you always know what's happening and what comes next."
          />
          <ol className="relative mt-16 grid gap-10 md:grid-cols-5 md:gap-6">
            <span aria-hidden className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brass/50 to-transparent md:block" />
            {processSteps.map((s, i) => (
              <li key={s.title} className="relative flex gap-5 md:flex-col md:items-center md:text-center" data-reveal style={delay(i * 90)}>
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-brass bg-ivory font-display text-xl text-brass">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-2xl md:mt-5">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────── Statement ───────────── */}
      <section className="relative isolate overflow-hidden bg-ink py-28 text-ivory sm:py-40">
        <Image src="/images/kitchen-marble.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/60 to-ink/90" />
        <div className="container-x text-center">
          <svg viewBox="0 0 100 100" className="mx-auto h-14 w-14" aria-hidden>
            <path d="M22 90V46a28 28 0 0 1 56 0v44" fill="none" stroke="#C9A96E" strokeWidth="2.5" />
            <rect x="46.5" y="14.5" width="7" height="7" transform="rotate(45 50 18)" fill="#C9A96E" />
          </svg>
          <blockquote className="h-display mx-auto mt-8 max-w-4xl text-[2.2rem] italic sm:text-5xl lg:text-6xl" data-reveal>
            A home should feel like it was made for the people who live in it — <span className="text-brass-light">because it was.</span>
          </blockquote>
          <p className="mt-8 text-xs uppercase tracking-[0.35em] text-ivory/55" data-reveal style={delay(120)}>
            {site.legalName}
          </p>
        </div>
      </section>

      <Faq />
      <CtaBand />
    </>
  );
}
