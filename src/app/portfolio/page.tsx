import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { CtaBand, PageHero } from "@/components/Sections";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { InstagramIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Kitchens, bedrooms, living rooms, storage and more — explore interiors designed and manufactured by BSR Elite.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            Spaces, <em className="text-brass-light">thoughtfully made.</em>
          </>
        }
        intro="Browse living rooms, kitchens, bedrooms, storage and more. Tap any project to view it full-screen."
        image="/images/bedroom-luxe.jpg"
      />

      <section className="py-20 sm:py-28">
        <div className="container-x">
          <PortfolioGrid />

          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-16 flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-charcoal p-8 text-ivory sm:flex-row sm:items-center sm:p-12"
            data-reveal
          >
            <div className="flex items-center gap-5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]">
                <InstagramIcon className="h-6 w-6" />
              </span>
              <div>
                <p className="font-display text-3xl">See our latest installations</p>
                <p className="mt-1 text-sm text-ivory/60">Site reels and work-in-progress on {site.instagramHandle}</p>
              </div>
            </div>
            <span className="btn-brass">
              Follow on Instagram <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </span>
          </a>
        </div>
      </section>

      <CtaBand title="Like what you see? Let's make yours next." />
    </>
  );
}
