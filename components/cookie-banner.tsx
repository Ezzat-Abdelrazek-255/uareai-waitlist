"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "uareai:cookies-consent";
const SHOW_DELAY_MS = 2500;
const SCROLL_DISMISS_THRESHOLD = 30;
const LEAVE_DURATION_MS = 320;
type Choice = "accepted" | "declined";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  // Schedule the initial appearance after the delay, only if no prior choice.
  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {}
    if (stored === "accepted" || stored === "declined") return;

    const t = window.setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => window.clearTimeout(t);
  }, []);

  // Scroll-triggered dismissal: fades out the banner without persisting a
  // choice. The banner will reappear on the next visit.
  useEffect(() => {
    if (!visible || leaving) return;
    const startY = window.scrollY;
    const onScroll = () => {
      if (Math.abs(window.scrollY - startY) > SCROLL_DISMISS_THRESHOLD) {
        setLeaving(true);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [visible, leaving]);

  // Run the leave animation, then unmount.
  useEffect(() => {
    if (!leaving) return;
    const t = window.setTimeout(() => setVisible(false), LEAVE_DURATION_MS);
    return () => window.clearTimeout(t);
  }, [leaving]);

  const persist = (choice: Choice) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch {}
    setLeaving(true);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className={`${
        leaving ? "cookie-banner-out" : "cookie-banner-in"
      } fixed right-4 bottom-4 z-[55] w-[280px] border border-foreground/25 bg-background/95 p-4 shadow-xl backdrop-blur-md sm:right-5 sm:bottom-5`}
    >
      {/* Vintage corner ticks for the printed-zine feel. */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-px -left-px h-2.5 w-2.5 border-t border-l border-foreground"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -top-px -right-px h-2.5 w-2.5 border-t border-r border-foreground"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-px -left-px h-2.5 w-2.5 border-b border-l border-foreground"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-px -bottom-px h-2.5 w-2.5 border-r border-b border-foreground"
      />

      <p className="font-mono text-[9px] tracking-[0.3em] text-foreground/60 uppercase">
        Notice · Cookies
      </p>
      <p className="mt-2 font-serif text-[13px] leading-snug text-foreground/85">
        We use a few cookies to make this site work and to learn how
        it&rsquo;s used.{" "}
        <Link href="/cookie-notice" className="cookie-banner-link">
          Read more
        </Link>
        .
      </p>

      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={() => persist("declined")}
          className="flex-1 rounded-full border border-foreground/30 px-3 py-1.5 font-mono text-[9px] tracking-[0.25em] text-foreground uppercase transition-colors hover:bg-foreground hover:text-background"
        >
          Decline
        </button>
        <button
          type="button"
          onClick={() => persist("accepted")}
          className="flex-1 rounded-full bg-foreground px-3 py-1.5 font-mono text-[9px] tracking-[0.25em] text-background uppercase transition-opacity hover:opacity-90"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
