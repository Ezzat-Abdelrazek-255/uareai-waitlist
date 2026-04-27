"use client";

import { useEffect } from "react";

const MIN_GAP_MS = 25_000;
const MAX_GAP_MS = 45_000;
const BURST_MS = 220;

const VhsBlip = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const html = document.documentElement;
    let burstTimer: number | undefined;
    let scheduleTimer: number | undefined;
    let cancelled = false;

    const scheduleNext = () => {
      if (cancelled) return;
      const gap = MIN_GAP_MS + Math.random() * (MAX_GAP_MS - MIN_GAP_MS);
      scheduleTimer = window.setTimeout(() => {
        if (cancelled) return;
        html.setAttribute("data-vhs", "1");
        burstTimer = window.setTimeout(() => {
          html.removeAttribute("data-vhs");
          scheduleNext();
        }, BURST_MS);
      }, gap);
    };

    scheduleNext();

    return () => {
      cancelled = true;
      if (burstTimer !== undefined) window.clearTimeout(burstTimer);
      if (scheduleTimer !== undefined) window.clearTimeout(scheduleTimer);
      html.removeAttribute("data-vhs");
    };
  }, []);

  return null;
};

export default VhsBlip;
