type GlyphProps = { className?: string };

const baseProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
};

export const PersonGlyph = ({ className }: GlyphProps) => (
  <svg {...baseProps} className={className}>
    <circle cx="16" cy="11" r="4.5" />
    <path d="M6.5 26c1.6-4.6 5.4-7 9.5-7s7.9 2.4 9.5 7" />
  </svg>
);

export const ShieldGlyph = ({ className }: GlyphProps) => (
  <svg {...baseProps} className={className}>
    <path d="M16 4.5 6 8v6.5c0 6 4.3 11 10 12.5 5.7-1.5 10-6.5 10-12.5V8L16 4.5Z" />
    <path d="m12 15.5 3 3 5.5-6" />
  </svg>
);

export const NetworkGlyph = ({ className }: GlyphProps) => (
  <svg {...baseProps} className={className}>
    <circle cx="8" cy="8" r="2.5" />
    <circle cx="24" cy="8" r="2.5" />
    <circle cx="16" cy="24" r="2.5" />
    <path d="M10 9.5 14.5 22.5M22 9.5 17.5 22.5M10.5 8h11" />
  </svg>
);

export const SparkGlyph = ({ className }: GlyphProps) => (
  <svg {...baseProps} className={className}>
    <path d="M16 4v8M16 20v8M4 16h8M20 16h8" />
    <path d="m9 9 4.5 4.5M18.5 18.5 23 23M9 23l4.5-4.5M18.5 13.5 23 9" />
  </svg>
);

export const QuoteGlyph = ({ className }: GlyphProps) => (
  <svg {...baseProps} className={className}>
    <path d="M11.5 21H7l1-7c.5-3.4 2.4-5.6 5.5-6.5M22.5 21H18l1-7c.5-3.4 2.4-5.6 5.5-6.5" />
  </svg>
);

export const LinkGlyph = ({ className }: GlyphProps) => (
  <svg {...baseProps} className={className}>
    <circle cx="12" cy="16" r="6" />
    <circle cx="20" cy="16" r="6" />
  </svg>
);

export const SproutGlyph = ({ className }: GlyphProps) => (
  <svg {...baseProps} className={className}>
    <path d="M16 26V13" />
    <path d="M16 14c0-4 3-6 7-6 0 4-3 6-7 6Z" />
    <path d="M16 17c0-3-2.5-5-6-5 0 3 2.5 5 6 5Z" />
    <path d="M8 26h16" />
  </svg>
);

export const HeartGlyph = ({ className }: GlyphProps) => (
  <svg {...baseProps} className={className}>
    <path d="M16 26s-9-5.5-9-12.5A5.5 5.5 0 0 1 16 9a5.5 5.5 0 0 1 9 4.5C25 20.5 16 26 16 26Z" />
  </svg>
);

export const UmbrellaGlyph = ({ className }: GlyphProps) => (
  <svg {...baseProps} className={className}>
    <path d="M5 16a11 11 0 0 1 22 0Z" />
    <path d="M16 6V3.5" />
    <path d="M16 16v8a3 3 0 0 0 6 0" />
  </svg>
);

export const ArrowRightGlyph = ({ className }: GlyphProps) => (
  <svg {...baseProps} className={className}>
    <path d="M6 16h20M19 9l7 7-7 7" />
  </svg>
);

export const ArrowDownGlyph = ({ className }: GlyphProps) => (
  <svg {...baseProps} className={className}>
    <path d="M16 6v20M9 19l7 7 7-7" />
  </svg>
);

// Brand glyphs use `currentColor` like the rest, but solid where the official
// mark is filled. baseProps keeps stroke-based defaults; brand marks override.

export const XGlyph = ({ className }: GlyphProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    aria-hidden
    className={className}
  >
    <path d="M19.4 13.9 28.6 4h-2.8l-7.7 8.4L11.7 4H4l9.6 13.4L4 28h2.8l8.3-9 6.7 9H30L19.4 13.9Zm-2.9 3.2-1-1.4L7.7 6h3.6l5.5 7.7 1 1.4 7.4 10.4h-3.5l-6-8.4Z" />
  </svg>
);

export const InstagramGlyph = ({ className }: GlyphProps) => (
  <svg {...baseProps} className={className}>
    <rect x="5" y="5" width="22" height="22" rx="6" />
    <circle cx="16" cy="16" r="5" />
    <circle cx="22.5" cy="9.5" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export const LinkedInGlyph = ({ className }: GlyphProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    aria-hidden
    className={className}
  >
    <path d="M27 4H5a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1ZM12 24H8.3V13h3.7v11ZM10.1 11.4a2.1 2.1 0 1 1 0-4.3 2.1 2.1 0 0 1 0 4.3ZM24 24h-3.7v-5.4c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V24H12.8V13h3.5v1.5h.1a3.8 3.8 0 0 1 3.5-1.9c3.7 0 4.4 2.5 4.4 5.7V24Z" />
  </svg>
);
