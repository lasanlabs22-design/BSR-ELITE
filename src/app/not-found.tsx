import Link from "next/link";
import { LogoMark } from "@/components/Logo";

export default function NotFound() {
  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center bg-charcoal px-5 text-center text-ivory">
      <LogoMark tone="light" className="h-24 w-24" />
      <p className="eyebrow mt-10 !text-brass-light">404</p>
      <h1 className="h-display mt-4 text-5xl sm:text-6xl">This room hasn&apos;t been built yet.</h1>
      <p className="mt-5 max-w-md text-ivory/65">The page you&apos;re looking for doesn&apos;t exist. Let&apos;s take you back home.</p>
      <Link href="/" className="btn-brass mt-10">
        Back to home
      </Link>
    </section>
  );
}
