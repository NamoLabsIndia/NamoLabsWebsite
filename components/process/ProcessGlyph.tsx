import React from "react";

/**
 * Hand-drawn glyphs for the six engagement phases.
 *
 * These replace the generic icon-in-a-tinted-rounded-square pattern. Each one
 * is drawn for its specific phase rather than picked from a set: the research
 * flask actually holds liquid with a meniscus and rising bubbles, the discovery
 * lens magnifies the strata beneath it, the validation shield is mid-scan.
 *
 * Two tones. `light` is used on /process (white background); `dark` is used by
 * the condensed strip on /consulting, which sits on a dark photo. Both share
 * the same drawings so a phase looks like itself on either page — the ink and
 * "paper" colours swap, the accent does not.
 *
 * Every gradient/clip id is namespaced per glyph AND per tone: both tones can
 * legitimately appear in one document, and duplicate SVG ids would silently
 * cross-reference each other.
 */

const ACCENT = "#3B5BFF";

export type GlyphTone = "light" | "dark";

interface Palette {
  /** Line work and solid shapes. */
  ink: string;
  /** The surface the glyph sits on — used to knock out shapes behind a lens. */
  paper: string;
  /** Opacity for ink washes, lifted on dark so they don't vanish. */
  wash: string;
}

const PALETTE: Record<GlyphTone, Palette> = {
  light: { ink: "#0A0A0A", paper: "#ffffff", wash: "0.05" },
  dark: { ink: "#ffffff", paper: "#0C1220", wash: "0.1" },
};

type GlyphProps = { className?: string; tone?: GlyphTone };

const svgProps = {
  viewBox: "0 0 64 64",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true as const,
};

/** Ids must be unique per tone as well as per glyph — see file header. */
const uid = (name: string, tone: GlyphTone) => `${name}-${tone}`;

/** 01 — a lens resolving an existing system into its actual structure. */
function DiscoveryGlyph({ className, tone = "light" }: GlyphProps) {
  const { ink, paper, wash } = PALETTE[tone];
  const clip = uid("disc-clip", tone);
  return (
    <svg {...svgProps} className={className}>
      <defs>
        <clipPath id={clip}>
          <circle cx="36" cy="26" r="15.5" />
        </clipPath>
      </defs>

      {/* the system as it appears from outside: a flat, featureless stack */}
      <rect
        x="6"
        y="12"
        width="44"
        height="40"
        rx="4"
        fill={ink}
        fillOpacity={wash}
        stroke={ink}
        strokeWidth="2.5"
      />
      <path
        d="M14 23h20M14 32h24M14 41h16"
        stroke={ink}
        strokeOpacity="0.35"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* under the lens the same rows resolve into real components and links */}
      <g clipPath={`url(#${clip})`}>
        <rect x="6" y="12" width="44" height="40" rx="4" fill={paper} />
        <path
          d="M22 23h22M22 32h22M22 41h22"
          stroke={ACCENT}
          strokeOpacity="0.35"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="28" cy="23" r="3.25" fill={ACCENT} />
        <circle cx="40" cy="32" r="3.25" fill={ACCENT} />
        <circle cx="30" cy="41" r="3.25" fill={ACCENT} fillOpacity="0.6" />
        <path
          d="M28 23c8 2 4 7 12 9M40 32c-6 3-4 7-10 9"
          stroke={ACCENT}
          strokeWidth="2"
          strokeLinecap="round"
          strokeOpacity="0.8"
        />
      </g>

      <circle cx="36" cy="26" r="15.5" stroke={ink} strokeWidth="2.75" />
      <path
        d="M47.5 37.5 57 47"
        stroke={ACCENT}
        strokeWidth="4.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** 02 — a flask actually holding something, mid-reaction. */
function ResearchGlyph({ className, tone = "light" }: GlyphProps) {
  const { ink } = PALETTE[tone];
  const liquid = uid("res-liquid", tone);
  const clip = uid("res-clip", tone);
  const body =
    "M25 10v15.5L12.6 47.8A5.5 5.5 0 0 0 17.4 56h29.2a5.5 5.5 0 0 0 4.8-8.2L39 25.5V10";
  return (
    <svg {...svgProps} className={className}>
      <defs>
        <linearGradient id={liquid} x1="16" y1="34" x2="48" y2="56">
          <stop offset="0%" stopColor="#5AC8FA" />
          <stop offset="55%" stopColor={ACCENT} />
          <stop offset="100%" stopColor="#2F3FD9" />
        </linearGradient>
        <clipPath id={clip}>
          <path d={`${body}Z`} />
        </clipPath>
      </defs>

      {/* liquid, with a meniscus that sits slightly high at the glass */}
      <g clipPath={`url(#${clip})`}>
        <path
          d="M4 38c6.5 0 8-3.2 14-3.2S30 38 36 38s9-3.4 15-3.4 9 3.4 13 3.4v26H4Z"
          fill={`url(#${liquid})`}
        />
        {/* bubbles rising through it */}
        <circle cx="27" cy="47" r="2.6" fill="#fff" fillOpacity="0.55" />
        <circle cx="35" cy="52" r="1.8" fill="#fff" fillOpacity="0.4" />
        <circle cx="31" cy="42" r="1.3" fill="#fff" fillOpacity="0.65" />
        {/* light catching the left wall */}
        <path d="M18 52 24 40v16Z" fill="#fff" fillOpacity="0.14" />
      </g>

      <path
        d={body}
        stroke={ink}
        strokeWidth="2.75"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* ground-glass rim */}
      <path d="M22 10h20" stroke={ink} strokeWidth="3.25" strokeLinecap="round" />
      {/* graduation marks */}
      <path
        d="M20.5 44h5M18 50h4"
        stroke={ink}
        strokeOpacity="0.4"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      {/* a little vapour */}
      <path
        d="M31 5.5c2-1.6.4-3.4 2.4-5"
        stroke={ACCENT}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeOpacity="0.7"
      />
    </svg>
  );
}

/** 03 — layered blueprint planes, pinned together. */
function ArchitectureGlyph({ className, tone = "light" }: GlyphProps) {
  const { ink, paper, wash } = PALETTE[tone];
  const top = uid("arch-top", tone);
  return (
    <svg {...svgProps} className={className}>
      <defs>
        <linearGradient id={top} x1="10" y1="8" x2="54" y2="26">
          <stop offset="0%" stopColor={ACCENT} stopOpacity="0.9" />
          <stop offset="100%" stopColor="#6C82FF" stopOpacity="0.75" />
        </linearGradient>
      </defs>

      {/* base plane */}
      <path
        d="M32 42 8 50l24 8 24-8Z"
        fill={ink}
        fillOpacity={wash}
        stroke={ink}
        strokeWidth="2.25"
        strokeLinejoin="round"
      />
      {/* middle plane */}
      <path
        d="M32 27 8 35l24 8 24-8Z"
        fill={ink}
        fillOpacity={wash}
        stroke={ink}
        strokeWidth="2.25"
        strokeLinejoin="round"
      />
      {/* top plane — the one being designed */}
      <path
        d="M32 12 8 20l24 8 24-8Z"
        fill={`url(#${top})`}
        stroke={ink}
        strokeWidth="2.25"
        strokeLinejoin="round"
      />
      {/* structural pin through all three */}
      <path
        d="M32 20v30"
        stroke={ACCENT}
        strokeWidth="2.25"
        strokeDasharray="3 3.5"
        strokeLinecap="round"
      />
      <circle cx="32" cy="20" r="3.25" fill={paper} stroke={ink} strokeWidth="2.25" />
    </svg>
  );
}

/** 04 — blocks being set into place, one still landing. */
function ImplementationGlyph({ className, tone = "light" }: GlyphProps) {
  const { ink, wash } = PALETTE[tone];
  const live = uid("impl-live", tone);
  return (
    <svg {...svgProps} className={className}>
      <defs>
        <linearGradient id={live} x1="30" y1="6" x2="48" y2="24">
          <stop offset="0%" stopColor="#6C82FF" />
          <stop offset="100%" stopColor={ACCENT} />
        </linearGradient>
      </defs>

      {/* laid courses, bonded like brickwork */}
      <rect x="7" y="45" width="23" height="12" rx="2.5" stroke={ink} strokeWidth="2.5" />
      <rect x="34" y="45" width="23" height="12" rx="2.5" stroke={ink} strokeWidth="2.5" />
      <rect x="20" y="30" width="23" height="12" rx="2.5" stroke={ink} strokeWidth="2.5" />
      <rect
        x="47"
        y="30"
        width="10"
        height="12"
        rx="2.5"
        stroke={ink}
        strokeWidth="2.5"
        fill={ink}
        fillOpacity={wash}
      />

      {/* the slot still open in that course */}
      <rect
        x="7"
        y="30"
        width="10"
        height="12"
        rx="2.5"
        stroke={ACCENT}
        strokeWidth="2.25"
        strokeDasharray="3.5 3"
        fill={ACCENT}
        fillOpacity="0.07"
      />

      {/* the block being set into it */}
      <rect x="7" y="10" width="10" height="12" rx="2.5" fill={`url(#${live})`} />
      <path d="M12 25.5v2.5" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/** 05 — a shield being scanned, not just stamped. */
function ValidationGlyph({ className, tone = "light" }: GlyphProps) {
  const { ink } = PALETTE[tone];
  const scan = uid("val-scan", tone);
  const clip = uid("val-clip", tone);
  const shield = "M32 6 54 14v16c0 12.5-8.6 21.7-22 28-13.4-6.3-22-15.5-22-28V14Z";
  return (
    <svg {...svgProps} className={className}>
      <defs>
        <linearGradient id={scan} x1="10" y1="30" x2="54" y2="30">
          <stop offset="0%" stopColor={ACCENT} stopOpacity="0" />
          <stop offset="45%" stopColor={ACCENT} stopOpacity="0.85" />
          <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
        </linearGradient>
        <clipPath id={clip}>
          <path d={shield} />
        </clipPath>
      </defs>

      <g clipPath={`url(#${clip})`}>
        <path d={shield} fill={ACCENT} fillOpacity="0.12" />
        {/* scan band sweeping the shield */}
        <rect x="0" y="27" width="64" height="7" fill={`url(#${scan})`} />
        <path d="M0 27h64" stroke={ACCENT} strokeWidth="1.5" strokeOpacity="0.5" />
      </g>

      <path d={shield} stroke={ink} strokeWidth="2.75" strokeLinejoin="round" />
      <path
        d="m22.5 31.5 6.5 6.5 13-13.5"
        stroke={ACCENT}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** 06 — a system kept in orbit long after launch. */
function SupportGlyph({ className, tone = "light" }: GlyphProps) {
  const { ink } = PALETTE[tone];
  const core = uid("sup-core", tone);
  return (
    <svg {...svgProps} className={className}>
      <defs>
        <radialGradient id={core} cx="0.4" cy="0.35" r="0.75">
          <stop offset="0%" stopColor="#6C82FF" />
          <stop offset="100%" stopColor={ACCENT} />
        </radialGradient>
      </defs>

      {/* orbits */}
      <ellipse
        cx="32"
        cy="32"
        rx="27"
        ry="12"
        stroke={ink}
        strokeOpacity="0.32"
        strokeWidth="2.25"
        transform="rotate(-24 32 32)"
      />
      <ellipse
        cx="32"
        cy="32"
        rx="27"
        ry="12"
        stroke={ACCENT}
        strokeOpacity="0.5"
        strokeWidth="2.25"
        strokeDasharray="4 4"
        transform="rotate(38 32 32)"
      />

      {/* the running system */}
      <circle cx="32" cy="32" r="9.5" fill={`url(#${core})`} />
      {/* steady heartbeat across the core */}
      <path
        d="m25 32.5 3-.2 2-3.6 2.6 6.4 2.2-2.6h2.7"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* satellites on the orbits */}
      <circle cx="53" cy="21" r="3.25" fill={ink} />
      <circle cx="12" cy="41" r="2.5" fill={ACCENT} fillOpacity="0.75" />
    </svg>
  );
}

const GLYPHS = {
  discovery: DiscoveryGlyph,
  research: ResearchGlyph,
  architecture: ArchitectureGlyph,
  implementation: ImplementationGlyph,
  validation: ValidationGlyph,
  support: SupportGlyph,
} as const;

export type GlyphKey = keyof typeof GLYPHS;

export default function ProcessGlyph({
  name,
  className,
  tone = "light",
}: {
  name: GlyphKey;
  className?: string;
  tone?: GlyphTone;
}) {
  const Glyph = GLYPHS[name];
  return <Glyph className={className} tone={tone} />;
}
