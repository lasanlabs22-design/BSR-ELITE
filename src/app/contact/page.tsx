import type { Metadata } from "next";
import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import { Faq, PageHero } from "@/components/Sections";
import { EnquiryForm } from "@/components/EnquiryForm";
import { InstagramIcon, WhatsAppIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact",
  description: `Book a free interior design consultation with BSR Elite. Call or WhatsApp ${site.founder} on ${site.phone}.`,
};

const channels = [
  { icon: Phone, label: "Call", value: site.phone, href: site.phoneHref, note: `Speak with ${site.founder} directly` },
  { icon: WhatsAppIcon, label: "WhatsApp", value: "Chat with us", href: whatsappLink(), note: "Share photos & floor plans", external: true },
  { icon: InstagramIcon, label: "Instagram", value: site.instagramHandle, href: site.instagram, note: "Latest projects & reels", external: true },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s talk about <em className="text-brass-light">your home.</em>
          </>
        }
        intro="Book a free consultation. We'll visit, measure, listen — and show you what's possible."
        image="/images/dining-emerald.jpg"
      />

      <section className="py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <aside className="space-y-4 lg:col-span-5">
            {channels.map((c, i) => (
              <a
                key={c.label}
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center gap-5 rounded-[1.5rem] border border-charcoal/10 bg-sand/60 p-6 transition-all duration-300 hover:border-brass hover:bg-sand"
                data-reveal
                style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-charcoal text-brass-light transition-colors group-hover:bg-brass group-hover:text-ivory">
                  <c.icon className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-muted">{c.label}</span>
                  <span className="mt-0.5 block truncate font-display text-2xl text-charcoal">{c.value}</span>
                  <span className="block text-sm text-muted">{c.note}</span>
                </span>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-all group-hover:rotate-45 group-hover:text-brass" />
              </a>
            ))}

            <div className="grid gap-4 rounded-[1.5rem] bg-charcoal p-7 text-ivory sm:grid-cols-2 lg:grid-cols-1" data-reveal>
              <div className="flex items-start gap-4">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-brass-light" strokeWidth={1.5} />
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-ivory/50">Working hours</p>
                  <p className="mt-1">{site.hours}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-brass-light" strokeWidth={1.5} />
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-ivory/50">Studio & workshop</p>
                  <p className="mt-1">{site.serviceArea}</p>
                </div>
              </div>
            </div>
          </aside>

          <div className="rounded-[2rem] border border-charcoal/10 bg-white/50 p-6 shadow-[0_30px_80px_-40px_rgba(28,26,23,0.35)] sm:p-10 lg:col-span-7" data-reveal>
            <p className="eyebrow">Enquiry form</p>
            <h2 className="h-display mb-8 mt-4 text-4xl sm:text-5xl">Tell us what you&apos;re planning.</h2>
            <EnquiryForm />
          </div>
        </div>
      </section>

      <Faq />
    </>
  );
}
