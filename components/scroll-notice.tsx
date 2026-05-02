"use client";

import { useEffect, useState } from "react";

const HIDE_AFTER = 80;

const ScrollNotice = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > HIDE_AFTER);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={hidden}
      className={`fixed right-6 bottom-6 z-50 hidden items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-foreground/70 uppercase transition-opacity duration-500 lg:flex ${hidden ? "pointer-events-none opacity-0" : "opacity-100"}`}
    >
      <span>Scroll</span>
      <span className="scroll-notice-track relative block h-8 w-px overflow-hidden bg-foreground/20">
        <span className="scroll-notice-dot absolute left-1/2 h-2 w-px -translate-x-1/2 bg-foreground/80" />
      </span>
    </div>
  );
};

export default ScrollNotice;
