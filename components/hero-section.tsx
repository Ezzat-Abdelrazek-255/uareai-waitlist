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

// Six-slot recipe used by every folder. Rotates are kept fixed so the visual
// composition stays consistent across folders; the image index per slot is
// derived from the folder size at render time so we only repeat when a
// folder has fewer images than slots.
const STACK_ROTATES = ["3deg", "0deg", "-4deg", "0deg", "-4deg", "0deg"];

// Image folders the user can switch between in the controller. Each folder
// holds files named `{idx}.png` starting at 0; `dims` is intrinsic size per
// index, used by next/image for aspect reservation.
export const STACK_FOLDERS = [
  {
    key: "originals",
    label: "Originals",
    path: "/originals",
    dims: [
      { width: 2371, height: 2606 },
      { width: 2225, height: 2439 },
      { width: 2362, height: 2597 },
    ],
  },
  {
    key: "parloa",
    label: "Parloa",
    path: "/parloa",
    dims: Array.from({ length: 7 }, () => ({ width: 928, height: 1140 })),
  },
  {
    key: "others",
    label: "Others",
    path: "/others",
    dims: Array.from({ length: 10 }, () => ({ width: 928, height: 1140 })),
  },
] as const;

export type StackFolderKey = (typeof STACK_FOLDERS)[number]["key"];

// Peel count = number of images that scroll-out. Every image peels (including
// the bottom-most one) so the final scrub frame is empty behind the heading.
// Used to derive the pin scroll range so every peeling image gets exactly
// 100vh of scroll.
const PEEL_COUNT = STACK_ROTATES.length;

// Heading font alternates exposed via the dev controller. `varName` is the
// CSS variable injected by next/font in app/layout.tsx; `weight` is the
// single weight that font was actually loaded at — applied inline so the
// h1's `font-black` utility doesn't trigger browser-simulated bolding.
export const HEADING_FONTS = [
  {
    key: "futura",
    label: "Futura Extra Bold",
    varName: "--font-futura",
    weight: 800,
  },
  {
    key: "bebas",
    label: "Bebas Neue",
    varName: "--font-bebas-neue",
    weight: 400,
  },
  { key: "oswald", label: "Oswald", varName: "--font-oswald", weight: 600 },
  { key: "anton", label: "Anton", varName: "--font-anton", weight: 400 },
  {
    key: "archivo-black",
    label: "Archivo Black",
    varName: "--font-archivo-black",
    weight: 400,
  },
  {
    key: "playfair",
    label: "Playfair Display",
    varName: "--font-playfair-display",
    weight: 800,
  },
  {
    key: "fraunces",
    label: "Fraunces",
    varName: "--font-fraunces",
    weight: 700,
  },
  {
    key: "dm-serif",
    label: "DM Serif Display",
    varName: "--font-dm-serif-display",
    weight: 400,
  },
] as const;

export type HeadingFontKey = (typeof HEADING_FONTS)[number]["key"];

const DEFAULTS = {
  delay: 200,
  duration: 2150,
  stagger: 250,
  easing: "--ease-smooth",
  cmykSplit: false,
  softStart: 33.3,
  softEnd: 66.6,
  stackDelay: -1500,
  stackDuration: 900,
  stackStagger: 150,
  exitRotation: 25,
  peelEase: "power2.in",
  headingFont: "futura" as HeadingFontKey,
  imageFolder: "originals" as StackFolderKey,
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
  // pinViewports is derived (not state) — always equals PEEL_COUNT so every
  // peeling image gets exactly 100vh of scroll regardless of stack size.
  const pinViewports = PEEL_COUNT;
  const [exitRotation, setExitRotation] = useState(DEFAULTS.exitRotation);
  const [peelEase, setPeelEase] = useState(DEFAULTS.peelEase);
  const [headingFont, setHeadingFont] = useState<HeadingFontKey>(
    DEFAULTS.headingFont,
  );
  const [imageFolder, setImageFolder] = useState<StackFolderKey>(
    DEFAULTS.imageFolder,
  );

  const headingFontConfig =
    HEADING_FONTS.find((f) => f.key === headingFont) ?? HEADING_FONTS[0];

  const folderConfig =
    STACK_FOLDERS.find((f) => f.key === imageFolder) ?? STACK_FOLDERS[0];
  // Bottom-most slot (slot 0, lowest z, peels last) is pinned to the final
  // originals image so every folder shares the same anchor frame.
  const originals = STACK_FOLDERS[0];
  const anchorIdx = originals.dims.length - 1;
  const anchorDim = originals.dims[anchorIdx];
  const STACK = STACK_ROTATES.map((rotate, slot) => {
    if (slot === 0) {
      return {
        src: `${originals.path}/${anchorIdx}.png`,
        rotate,
        width: anchorDim.width,
        height: anchorDim.height,
      };
    }
    const idx = (slot - 1) % folderConfig.dims.length;
    const dim = folderConfig.dims[idx];
    return {
      src: `${folderConfig.path}/${idx}.png`,
      rotate,
      width: dim.width,
      height: dim.height,
    };
  });

  // Becomes true after the CSS intro finishes — gates GSAP/ScrollTrigger init
  // and Lenis start. Stays true after the first transition.
  const [scrollReady, setScrollReady] = useState(false);

  const stageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const stackRefs = useRef<(HTMLDivElement | null)[]>([]);
  const waitlistRef = useRef<HTMLDivElement>(null);

  const lenis = useLenis();

  // When the LAST CSS intro animation finishes. Three candidates:
  //   - Heading reveal line 2: delay + stagger + duration
  //   - Stack drop (last image): heading-reveal-2 + stackDelay + (n-1)*stackStagger + stackDuration
  //   - Sync fade-in (CTA + kicker) and gap-spread: heading-reveal-2 + stackDelay + stackDuration
  // stackDelay can be negative (stack overlaps the reveal), so we don't clamp it.
  const heroReveal2End = delay + stagger + duration;
  const stackEnd =
    heroReveal2End +
    stackDelay +
    (STACK.length - 1) * stackStagger +
    stackDuration;
  const fadeEnd = heroReveal2End + stackDelay + stackDuration;
  const introEndsAt = Math.max(heroReveal2End, stackEnd, fadeEnd);

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
  } as React.CSSProperties;

  // 3. GSAP scroll-pin timeline. Initializes only after intro completes.
  //    Replay does NOT rebuild this — outer wrappers have stable identity.
  useGSAP(
    () => {
      if (!scrollReady) return;
      if (typeof window === "undefined") return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // Peel every image, top-of-stack first so the visually-frontmost image
      // leaves first and the anchor (bottom-most) leaves last.
      const peelTargets = stackRefs.current
        .filter((el): el is HTMLDivElement => el !== null)
        .reverse();
      if (peelTargets.length === 0) return;

      gsap.set(peelTargets, { x: 0, y: 0, rotation: 0 });
      const wlEl = waitlistRef.current;
      if (wlEl) gsap.set(wlEl, { y: 0 });

      // Threshold is the moment the last image finishes peeling — before the
      // 100vh hold tail. Crossing it lights the CTA + drops the cursor in.
      const peelDoneAt = PEEL_COUNT / (PEEL_COUNT + 1);
      let highlighted = false;
      let didAutoFocus = false;

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
          onUpdate: (self) => {
            const should = self.progress >= peelDoneAt;
            if (should === highlighted) return;
            highlighted = should;
            waitlistRef.current?.classList.toggle("is-highlighted", should);
            if (should && !didAutoFocus) {
              didAutoFocus = true;
              // preventScroll keeps the scrub timeline at its current progress —
              // browsers otherwise scroll a focused input into view.
              window.setTimeout(() => {
                const input =
                  waitlistRef.current?.querySelector<HTMLInputElement>(
                    'input[type="email"]',
                  );
                if (input && document.activeElement === document.body) {
                  input.focus({ preventScroll: true });
                }
              }, 700);
            }
          },
        },
      });

      // Each image gets a 1-unit slot in the timeline, sequenced from front
      // to back. Even slots exit right with negative rotation, odd slots exit
      // left with positive rotation — same alternation pattern as the
      // original 2-image version.
      peelTargets.forEach((el, idx) => {
        const goRight = idx % 2 === 0;
        const direction = goRight ? 1 : -1;
        tl.fromTo(
          el,
          { x: 0, y: 0, rotation: 0 },
          {
            x: () => direction * window.innerWidth * 0.85,
            y: () => -window.innerHeight * 1.0,
            rotation: goRight ? -exitRotation : exitRotation,
            ease: peelEase,
            duration: 1,
          },
          idx,
        );
      });

      // Lift the waitlist CTA upward across the last peel slot + the hold slot.
      // Replaces the prior empty-hold tween — total timeline length is unchanged
      // (peelTargets.length - 1 + (1 + peelTargets.length / pinViewports) =
      // peelTargets.length + peelTargets.length / pinViewports), so peelDoneAt
      // and the sticky scroll range stay correct. offsetTop / offsetHeight are
      // transform-agnostic, so the function re-evaluates correctly on refresh
      // regardless of the wrapper's current transform.
      const liftDuration = 1 + peelTargets.length / pinViewports;
      const liftStart = peelTargets.length - 1;
      tl.to(
        wlEl,
        {
          y: () => {
            const el = waitlistRef.current;
            if (!el) return 0;
            const naturalCenter = el.offsetTop + el.offsetHeight / 2;
            return window.innerHeight / 2 - naturalCenter;
          },
          duration: liftDuration,
          ease: "power2.out",
        },
        liftStart,
      );
    },
    {
      scope: sectionRef,
      dependencies: [scrollReady, exitRotation, peelEase],
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
    setExitRotation(DEFAULTS.exitRotation);
    setPeelEase(DEFAULTS.peelEase);
    setHeadingFont(DEFAULTS.headingFont);
    setImageFolder(DEFAULTS.imageFolder);
    setReplayKey((k) => k + 1);
  };

  // Shown in production too so the client can tweak the intro on the live site.
  const showController = true;

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
          className="stamp-impact absolute top-[12.5rem] left-1/2 flex -translate-x-1/2 items-center justify-center gap-4 font-mono text-xs tracking-[0.3em] uppercase"
        >
          <span className="bg-foreground/30 h-px w-32 flex-1" aria-hidden />
          <span>Waitlist · Issue 01 · Apr 2026</span>
          <span className="bg-foreground/30 h-px flex-1" aria-hidden />
        </div>
        {/* aspect-ratio + explicit -translate-x/y-1/2 keep the stack visually
            centered. The shorthand -translate-1/2 only sets one axis in
            Tailwind v4 — fine when the container collapsed to 0 height,
            broken once the box has real dimensions. */}
        <div className="absolute top-1/2 left-1/2 -z-10 aspect-[2371/2606] w-[min(30vw,368px)] -translate-x-1/2 -translate-y-1/2">
          {STACK.map((item, i) => (
            // Outer wrapper: stable identity, holds GSAP ref. Never remounts on Replay.
            // Index is fine here — STACK is module-level static, never reordered.
            <div
              key={i}
              ref={(el) => {
                stackRefs.current[i] = el;
              }}
              className="absolute inset-0 will-change-transform"
              style={{ zIndex: i } as React.CSSProperties}
            >
              {/* Inner wrapper: re-mounts on Replay to retrigger the CSS drop animation. */}
              <div
                key={`drop-${replayKey}`}
                className="stack-drop absolute inset-0"
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
          ref={waitlistRef}
          className="waitlist-cta absolute bottom-16 w-full"
        >
          <div
            key={`cta-${replayKey}`}
            className="sync-fade-in flex w-full flex-col items-center justify-center gap-4"
          >
            <h1
              className={`${cmykSplit ? "cmyk-split" : ""} text-[min(6vw,74px)] leading-none font-black uppercase`}
              style={{
                fontFamily: `var(${headingFontConfig.varName})`,
                fontWeight: headingFontConfig.weight,
              }}
            >
              <div
                key={`l1-${replayKey}`}
                data-line="1"
                className="hero-reveal"
              >
                <div className="flex justify-center gap-4">
                  <div className="flex items-baseline gap-3">
                    <UMark className="h-[0.8em] w-auto" />
                    <div>are</div>
                  </div>
                  <div>
                    <em>AI</em>
                  </div>
                </div>
              </div>
              <div
                key={`l2-${replayKey}`}
                data-line="2"
                className="hero-reveal"
              >
                <div className="flex justify-center gap-4">
                  <div>Authentic</div>
                  <div className="relative">
                    <div className="line-through">Artificial</div>
                  </div>
                </div>
              </div>
            </h1>
            <WaitlistInput />
          </div>
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
            exitRotation={exitRotation}
            setExitRotation={setExitRotation}
            peelEase={peelEase}
            setPeelEase={setPeelEase}
            headingFont={headingFont}
            setHeadingFont={setHeadingFont}
            imageFolder={imageFolder}
            setImageFolder={setImageFolder}
            onReplay={replay}
            onReset={reset}
          />
        )}
      </section>
    </div>
  );
};

export default HeroSection;
