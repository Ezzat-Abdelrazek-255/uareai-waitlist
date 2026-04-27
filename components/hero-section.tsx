"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";
import UMark from "@/icons/u-mark";
import WaitlistInput from "./waitlist-input";
import HeroAnimationController from "./hero-animation-controller";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const STACK = [
  { src: "/images/2.png", rotate: "3deg", width: 2362, height: 2597 },
  { src: "/images/1.png", rotate: "-4deg", width: 2225, height: 2439 },
  { src: "/images/0.png", rotate: "0deg", width: 2371, height: 2606 },
];

const DEFAULTS = {
  delay: 200,
  duration: 2150,
  stagger: 250,
  easing: "--ease-smooth",
  cmykSplit: true,
  softStart: 33.3,
  softEnd: 66.6,
  stackDelay: -1500,
  stackDuration: 900,
  stackStagger: 150,
  pinViewports: 4,
  exitRotation: 25,
  halftone: true,
  halftoneDuration: 700,
};

const HeroSection = () => {
  const [replayKey, setReplayKey] = useState(0);
  const [delay, setDelay] = useState(DEFAULTS.delay);
  const [duration, setDuration] = useState(DEFAULTS.duration);
  const [stagger, setStagger] = useState(DEFAULTS.stagger);
  const [easing, setEasing] = useState(DEFAULTS.easing);
  const [cmykSplit, setCmykSplit] = useState(DEFAULTS.cmykSplit);
  const [softStart, setSoftStart] = useState(DEFAULTS.softStart);
  const [softEnd, setSoftEnd] = useState(DEFAULTS.softEnd);
  const [stackDelay, setStackDelay] = useState(DEFAULTS.stackDelay);
  const [stackDuration, setStackDuration] = useState(DEFAULTS.stackDuration);
  const [stackStagger, setStackStagger] = useState(DEFAULTS.stackStagger);
  const [pinViewports, setPinViewports] = useState(DEFAULTS.pinViewports);
  const [exitRotation, setExitRotation] = useState(DEFAULTS.exitRotation);
  const [halftone, setHalftone] = useState(DEFAULTS.halftone);
  const [halftoneDuration, setHalftoneDuration] = useState(
    DEFAULTS.halftoneDuration,
  );

  // Becomes true after the CSS intro finishes — gates GSAP/ScrollTrigger init
  // and Lenis start. Stays true after the first transition.
  const [scrollReady, setScrollReady] = useState(false);

  const stageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const stackRefs = useRef<(HTMLDivElement | null)[]>([]);

  const lenis = useLenis();

  const introEndsAt =
    delay +
    stagger +
    duration +
    Math.max(0, stackDelay) +
    (STACK.length - 1) * stackStagger +
    stackDuration;

  // 1. Mount-only effect: scroll to top, lock body, schedule scrollReady flip.
  //    Decoupled from `lenis` so the timer is anchored to actual page-mount time.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setScrollReady(true);
      return;
    }

    // Defeat browser scroll restoration — start at the top so ScrollTrigger
    // pin engages with `progress = 0`, not whatever scroll the browser remembered.
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    const t = window.setTimeout(() => {
      document.body.style.overflow = "";
      setScrollReady(true);
    }, introEndsAt);

    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = "";
    };
    // First-mount only — knob changes don't reset the lock.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 2. Lenis follows `scrollReady`. Runs whenever lenis appears or scrollReady
  //    flips, so we don't depend on lenis being ready at mount-time.
  useEffect(() => {
    if (!lenis) return;
    if (scrollReady) {
      lenis.start();
    } else {
      lenis.stop();
    }
  }, [lenis, scrollReady]);

  const heroStyle = {
    "--reveal-delay": `${delay}ms`,
    "--reveal-duration": `${duration}ms`,
    "--reveal-stagger": `${stagger}ms`,
    "--reveal-easing": easing.startsWith("--") ? `var(${easing})` : easing,
    "--reveal-soft-start": `${softStart}%`,
    "--reveal-soft-end": `${softEnd}%`,
    "--stack-delay": `${stackDelay}ms`,
    "--stack-duration": `${stackDuration}ms`,
    "--stack-stagger": `${stackStagger}ms`,
    "--halftone-duration": `${halftoneDuration}ms`,
  } as React.CSSProperties;

  // 3. GSAP scroll-pin timeline. Initializes only after intro completes.
  //    Replay does NOT rebuild this — outer wrappers have stable identity.
  useGSAP(
    () => {
      if (!scrollReady) return;
      if (typeof window === "undefined") return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const front = stackRefs.current[2];
      const middle = stackRefs.current[1];
      if (!front || !middle) return;

      gsap.set([front, middle], { x: 0, y: 0, rotation: 0 });

      // Sticky-driven scrub. We deliberately do NOT use ScrollTrigger's `pin: true`
      // because it re-parents the trigger into a pin-spacer div, which restarts
      // every CSS animation on the section's children when the pin first engages.
      // Instead, the section is `position: sticky` inside a tall stage wrapper —
      // the section never leaves its DOM parent, so animations don't re-trigger.
      // The stage's height (set in JSX) defines the sticky scroll range.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stageRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(
        front,
        { x: 0, y: 0, rotation: 0 },
        {
          x: () => window.innerWidth * 0.85,
          y: () => -window.innerHeight * 1.0,
          rotation: -exitRotation,
          ease: "power2.in",
          duration: 1,
        },
        0,
      ).fromTo(
        middle,
        { x: 0, y: 0, rotation: 0 },
        {
          x: () => -window.innerWidth * 0.85,
          y: () => -window.innerHeight * 1.0,
          rotation: exitRotation,
          ease: "power2.in",
          duration: 1,
        },
        1,
      );

      // Pad the timeline with a hold tween so the last 100vh of pin is dead
      // time — images stay off-screen, title stays centered.
      // Peel timeline duration = 2 (front [0,1] + middle [1,2]).
      // Pin range = (pinViewports + 1) viewports.
      // Hold should map to 1 viewport → hold/total = 1/(pinViewports+1)
      // → hold duration = 2 / pinViewports.
      tl.to({}, { duration: 2 / pinViewports });
    },
    {
      scope: sectionRef,
      dependencies: [scrollReady, pinViewports, exitRotation],
    },
  );

  const replay = () => {
    // Scroll back to top so the scrub timeline is at progress 0 — otherwise the
    // outer wrappers stay at their exit transforms while the CSS intro retriggers,
    // and the images animate inside the wrong frame.
    if (typeof window !== "undefined") {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }
    setReplayKey((k) => k + 1);
  };
  const reset = () => {
    setDelay(DEFAULTS.delay);
    setDuration(DEFAULTS.duration);
    setStagger(DEFAULTS.stagger);
    setEasing(DEFAULTS.easing);
    setCmykSplit(DEFAULTS.cmykSplit);
    setSoftStart(DEFAULTS.softStart);
    setSoftEnd(DEFAULTS.softEnd);
    setStackDelay(DEFAULTS.stackDelay);
    setStackDuration(DEFAULTS.stackDuration);
    setStackStagger(DEFAULTS.stackStagger);
    setPinViewports(DEFAULTS.pinViewports);
    setExitRotation(DEFAULTS.exitRotation);
    setHalftone(DEFAULTS.halftone);
    setHalftoneDuration(DEFAULTS.halftoneDuration);
    setReplayKey((k) => k + 1);
  };

  const showController = process.env.NODE_ENV !== "production";

  // Stage height: section (1 viewport) + image-peel scroll (pinViewports) + hold (1).
  // Sticky range = stageHeight - sectionHeight = (pinViewports + 1) * 100vh.
  const stageHeight = `${(pinViewports + 2) * 100}vh`;

  return (
    <div
      ref={stageRef}
      className="hero-stage relative"
      style={{ ...heroStyle, height: stageHeight } as React.CSSProperties}
    >
    <section
      ref={sectionRef}
      className="sticky top-0 z-0 grid h-screen place-content-center"
    >
      <div
        key={`kicker-${replayKey}`}
        className="sync-fade-in absolute top-[12.5rem] left-1/2 flex -translate-x-1/2 items-center justify-center gap-4 font-mono text-xs tracking-[0.3em] uppercase"
      >
        <span className="bg-foreground/30 h-px w-32 flex-1" aria-hidden />
        <span>Waitlist · Issue 01 · Apr 2026</span>
        <span className="bg-foreground/30 h-px flex-1" aria-hidden />
      </div>
      <h1
        className={`${cmykSplit ? "cmyk-split" : ""} text-[6vw] leading-none font-black uppercase`}
      >
        <div key={`l1-${replayKey}`} data-line="1" className="hero-reveal">
          <div className="gap-spread flex justify-center">
            <div className="flex items-baseline gap-3">
              <UMark className="h-[0.8em] w-auto" />
              <div>are</div>
            </div>
            <div className="relative flex items-baseline gap-3">
              <UMark className="h-[0.8em] w-auto opacity-0" />
              <div className="opacity-0">are</div>
              <em className="absolute">AI</em>
            </div>
          </div>
        </div>
        <div key={`l2-${replayKey}`} data-line="2" className="hero-reveal">
          <div className="gap-spread flex justify-center">
            <div>Authentic</div>
            <div className="relative">
              <div className="line-through">Artificial</div>
            </div>
          </div>
        </div>
      </h1>
      <div className="absolute top-1/2 left-1/2 -z-10 h-fit w-[30vw] -translate-1/2">
        {STACK.map((item, i) => (
          // Outer wrapper: stable identity, holds GSAP ref. Never remounts on Replay.
          <div
            key={item.src}
            ref={(el) => {
              stackRefs.current[i] = el;
            }}
            className="absolute inset-0 will-change-transform"
            style={{ zIndex: i } as React.CSSProperties}
          >
            {/* Inner wrapper: re-mounts on Replay to retrigger the CSS drop animation. */}
            <div
              key={`drop-${replayKey}`}
              className={`stack-drop${halftone ? " halftone" : ""} absolute inset-0`}
              style={{ "--stack-i": i } as React.CSSProperties}
            >
              <Image
                src={item.src}
                alt=""
                width={item.width}
                height={item.height}
                priority={i === STACK.length - 1}
                sizes="30vw"
                draggable={false}
                aria-hidden
                className="absolute inset-0 top-1/2 h-full w-full -translate-y-1/2 object-contain [filter:contrast(1.08)_saturate(0.85)_drop-shadow(0_20px_40px_rgba(0,0,0,0.15))] select-none"
                style={{ transform: `rotate(${item.rotate})` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div
        key={`cta-${replayKey}`}
        className="sync-fade-in absolute bottom-24 flex w-full flex-col items-center justify-center gap-4"
      >
        <p className="max-w-md text-center font-mono">
          Human-first AI for brands and creators who refuse to fake it. Be the
          first to step inside.
        </p>
        <WaitlistInput />
      </div>
      {showController && (
        <HeroAnimationController
          delay={delay}
          setDelay={setDelay}
          duration={duration}
          setDuration={setDuration}
          stagger={stagger}
          setStagger={setStagger}
          easing={easing}
          setEasing={setEasing}
          cmykSplit={cmykSplit}
          setCmykSplit={setCmykSplit}
          softStart={softStart}
          setSoftStart={setSoftStart}
          softEnd={softEnd}
          setSoftEnd={setSoftEnd}
          stackDelay={stackDelay}
          setStackDelay={setStackDelay}
          stackDuration={stackDuration}
          setStackDuration={setStackDuration}
          stackStagger={stackStagger}
          setStackStagger={setStackStagger}
          pinViewports={pinViewports}
          setPinViewports={setPinViewports}
          exitRotation={exitRotation}
          setExitRotation={setExitRotation}
          halftone={halftone}
          setHalftone={setHalftone}
          halftoneDuration={halftoneDuration}
          setHalftoneDuration={setHalftoneDuration}
          onReplay={replay}
          onReset={reset}
        />
      )}
    </section>
    </div>
  );
};

export default HeroSection;
