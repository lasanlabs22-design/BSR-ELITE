import { MONOGRAM_TEXT_PATH } from "./logo-paths";

type Tone = "light" | "dark";

const palette = {
  // "light" = for use on dark backgrounds, "dark" = for use on light backgrounds
  light: { ink: "#F6F1E9", accent: "#C9A96E", muted: "rgba(246,241,233,0.62)" },
  dark: { ink: "#1C1A17", accent: "#A8834B", muted: "rgba(28,26,23,0.6)" },
};

/** The arched-doorway monogram. Works standalone as an icon / favicon. */
export function LogoMark({ tone = "dark", className = "" }: { tone?: Tone; className?: string }) {
  const c = palette[tone];
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label="BSR Elite monogram">
      <path d="M22 90V46a28 28 0 0 1 56 0v44" fill="none" stroke={c.accent} strokeWidth="2.6" />
      <path d="M29 58V47a21 21 0 0 1 42 0v11" fill="none" stroke={c.accent} strokeWidth="1.1" opacity="0.75" />
      <line x1="29" y1="58" x2="71" y2="58" stroke={c.accent} strokeWidth="1.1" opacity="0.75" />
      <rect x="46.5" y="14.5" width="7" height="7" transform="rotate(45 50 18)" fill={c.accent} />
      <path d={MONOGRAM_TEXT_PATH} fill={c.ink} />
      <line x1="12" y1="90" x2="88" y2="90" stroke={c.accent} strokeWidth="2.6" />
    </svg>
  );
}

/** Horizontal lockup: monogram + wordmark. Used in the header and footer. */
export function Logo({ tone = "dark", className = "", compact = false }: { tone?: Tone; className?: string; compact?: boolean }) {
  const c = palette[tone];
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark tone={tone} className={compact ? "h-10 w-10" : "h-12 w-12"} />
      <span className="flex flex-col leading-none">
        <span
          className="font-display text-[1.45rem] font-semibold tracking-[0.18em]"
          style={{ color: c.ink }}
        >
          BSR ELITE
        </span>
        <span className="mt-1 text-[0.56rem] font-medium uppercase tracking-[0.42em]" style={{ color: c.muted }}>
          Home Interiors
        </span>
      </span>
    </span>
  );
}
