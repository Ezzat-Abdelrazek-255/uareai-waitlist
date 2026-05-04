"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const LenisScrollTriggerBridge = () => {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const onScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onScroll);

    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", onScroll);
      gsap.ticker.remove(tick);
    };
  }, [lenis]);

  return null;
};

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  // Key on pathname so Lenis is torn down and re-instantiated on every route
  // change. Each page owns a fresh scroller — no started/stopped state, scroll
  // position, or cached document height leaks across navigations.
  const pathname = usePathname();

  return (
    <ReactLenis
      key={pathname ?? "root"}
      root
      options={{ lerp: 0.1, smoothWheel: true }}
    >
      <LenisScrollTriggerBridge />
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
