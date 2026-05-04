import Link from "next/link";
import type { ReactNode } from "react";
import {
  InstagramGlyph,
  LinkedInGlyph,
  XGlyph,
} from "@/icons/glyphs";

const SOCIALS = [
  {
    label: "X (Twitter)",
    href: "https://uareai.info/4hK2izI",
    Icon: XGlyph,
  },
  {
    label: "Instagram",
    href: "https://uareai.info/482h95m",
    Icon: InstagramGlyph,
  },
  {
    label: "LinkedIn",
    href: "https://uareai.info/3Xhba6u",
    Icon: LinkedInGlyph,
  },
] as const;

type FooterLink = { label: string; href: string; external?: boolean };

const FOOTER_LINKS: ReadonlyArray<FooterLink> = [
  { label: "Mission", href: "/our-mission" },
  { label: "Careers", href: "/career" },
];

const LEGAL_LINKS = [
  { label: "Terms", href: "/terms-of-service" },
  { label: "Privacy", href: "/privacy-policy" },
] as const;

const SiteFooter = () => {
  return (
    <footer className="mt-auto border-t border-foreground/15">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-safe py-6 lg:gap-10 lg:py-12">
        {/* Top row: nav + socials */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <nav className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-[10px] tracking-[0.3em] text-foreground/70 uppercase">
            {FOOTER_LINKS.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:text-foreground"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <ul className="flex items-center gap-3">
            {SOCIALS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-content-center rounded-full border border-foreground/20 text-foreground/70 transition-colors hover:border-foreground hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom row: copyright + legal */}
        <div className="flex flex-col gap-4 border-t border-foreground/15 pt-6 font-mono text-[10px] tracking-[0.3em] text-foreground/60 uppercase sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getUTCFullYear()} uare.ai · all rights reserved
          </span>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

const SiteShell = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative z-0 flex min-h-dvh flex-col bg-background text-foreground">
      {children}
      <SiteFooter />
    </main>
  );
};

export default SiteShell;
