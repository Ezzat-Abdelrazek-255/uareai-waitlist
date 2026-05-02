"use client";

import { useState } from "react";
import {
  HEADING_CASES,
  HEADING_FONTS,
  STACK_FOLDERS,
  type HeadingCaseKey,
  type HeadingFontKey,
  type StackFolderKey,
} from "./hero-section";

const STORAGE_KEY = "hero-animation-controller:minimized";

// CSS-variable easings paired with friendly labels for the dropdown.
// `value` is the underlying token (CSS var name or `linear`); `label` is
// what the user sees.
const EASINGS = [
  { value: "--ease-smooth", label: "Smooth (default)" },
  { value: "linear", label: "Linear (no easing)" },
  { value: "--ease-primary", label: "Primary" },
  { value: "--ease-gleasing", label: "Gleasing" },
  { value: "--ease-doppio", label: "Doppio" },
  { value: "--ease-slow-down", label: "Slow down" },
  { value: "--ease-back-in", label: "Back in (snap-out)" },
  { value: "--ease-back-out", label: "Back out (overshoot)" },
  { value: "--ease-back-in-out", label: "Back both ways" },
  { value: "--ease-in-quad", label: "Accelerate — quad" },
  { value: "--ease-in-cubic", label: "Accelerate — cubic" },
  { value: "--ease-in-quart", label: "Accelerate — quart" },
  { value: "--ease-in-quint", label: "Accelerate — quint" },
  { value: "--ease-in-expo", label: "Accelerate — expo" },
  { value: "--ease-in-circ", label: "Accelerate — circ" },
  { value: "--ease-out-quad", label: "Decelerate — quad" },
  { value: "--ease-out-cubic", label: "Decelerate — cubic" },
  { value: "--ease-out-quart", label: "Decelerate — quart" },
  { value: "--ease-out-quint", label: "Decelerate — quint" },
  { value: "--ease-out-expo", label: "Decelerate — expo" },
  { value: "--ease-out-circ", label: "Decelerate — circ" },
  { value: "--ease-in-out-quad", label: "In-out — quad" },
  { value: "--ease-in-out-cubic", label: "In-out — cubic" },
  { value: "--ease-in-out-quart", label: "In-out — quart" },
  { value: "--ease-in-out-quint", label: "In-out — quint" },
  { value: "--ease-in-out-expo", label: "In-out — expo" },
  { value: "--ease-in-out-circ", label: "In-out — circ" },
];

// GSAP eases for the scrub-driven peel exit. Friendlier labels paired with
// the GSAP curve keys.
const PEEL_EASES = [
  { value: "power2.in", label: "Accelerate (default)" },
  { value: "back.in(1.4)", label: "Pull-back — gentle" },
  { value: "back.in(2)", label: "Pull-back — strong" },
  { value: "power2.inOut", label: "Smooth in-out" },
  { value: "sine.inOut", label: "Wave (sine)" },
  { value: "expo.out", label: "Glide out" },
  { value: "none", label: "Linear (no easing)" },
];

type Props = {
  delay: number;
  setDelay: (v: number) => void;
  duration: number;
  setDuration: (v: number) => void;
  stagger: number;
  setStagger: (v: number) => void;
  easing: string;
  setEasing: (v: string) => void;
  cmykSplit: boolean;
  setCmykSplit: (v: boolean) => void;
  softStart: number;
  setSoftStart: (v: number) => void;
  softEnd: number;
  setSoftEnd: (v: number) => void;
  stackDelay: number;
  setStackDelay: (v: number) => void;
  stackDuration: number;
  setStackDuration: (v: number) => void;
  stackStagger: number;
  setStackStagger: (v: number) => void;
  exitRotation: number;
  setExitRotation: (v: number) => void;
  peelEase: string;
  setPeelEase: (v: string) => void;
  peelScrollPerImage: number;
  setPeelScrollPerImage: (v: number) => void;
  headingFont: HeadingFontKey;
  setHeadingFont: (v: HeadingFontKey) => void;
  headingCase: HeadingCaseKey;
  setHeadingCase: (v: HeadingCaseKey) => void;
  imageFolder: StackFolderKey;
  setImageFolder: (v: StackFolderKey) => void;
  onReplay: () => void;
  onReset: () => void;
};

// Inline help affordance: small "i" disc that reveals a tooltip on hover or
// keyboard focus. preventDefault on the click stops the parent <label> from
// forwarding the click to its slider/input (which would jump the thumb).
//
// The tooltip is `absolute` but its wrapper is intentionally NOT `relative` —
// it positions against the nearest positioned ancestor instead, which is the
// row/section title-row (each adds `relative`). That anchors the tooltip's
// right edge to the row's right edge (= panel content edge), so the tooltip
// stays inside the panel regardless of where the icon sits horizontally.
const Hint = ({ text }: { text: string }) => (
  <span
    className="group inline-flex"
    onClick={(e) => e.preventDefault()}
  >
    <span
      tabIndex={0}
      role="img"
      aria-label={text}
      className="flex h-3.5 w-3.5 cursor-help items-center justify-center rounded-full border border-current text-[9px] leading-none font-semibold opacity-50 hover:opacity-90 focus:opacity-90"
    >
      i
    </span>
    <span
      role="tooltip"
      className="pointer-events-none absolute top-full right-0 z-50 mt-1 w-56 rounded-sm border border-[var(--border)] bg-[var(--color-foreground)] px-2 py-1.5 text-[10px] leading-snug font-normal tracking-normal normal-case text-[var(--color-background)] opacity-0 shadow-lg transition-opacity duration-100 group-hover:opacity-100 group-focus-within:opacity-100"
    >
      {text}
    </span>
  </span>
);

const Section = ({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-3 border-t border-[var(--border)] pt-3">
    <div className="relative flex items-center gap-1.5">
      <span className="text-[11px] font-semibold tracking-[0.18em] uppercase">
        {title}
      </span>
      {description && <Hint text={description} />}
    </div>
    {children}
  </div>
);

const Row = ({
  label,
  value,
  hint,
  children,
}: {
  label: string;
  value: string;
  hint?: string;
  children: React.ReactNode;
}) => (
  <label className="flex flex-col gap-1">
    <span className="relative flex items-baseline justify-between gap-2 text-[10px] tracking-wider uppercase opacity-80">
      <span className="flex items-center gap-1.5">
        <span>{label}</span>
        {hint && <Hint text={hint} />}
      </span>
      <span className="tabular-nums opacity-90">{value}</span>
    </span>
    {children}
  </label>
);

const HeroAnimationController = ({
  delay,
  setDelay,
  duration,
  setDuration,
  stagger,
  setStagger,
  easing,
  setEasing,
  cmykSplit,
  setCmykSplit,
  softStart,
  setSoftStart,
  softEnd,
  setSoftEnd,
  stackDelay,
  setStackDelay,
  stackDuration,
  setStackDuration,
  stackStagger,
  setStackStagger,
  exitRotation,
  setExitRotation,
  peelEase,
  setPeelEase,
  peelScrollPerImage,
  setPeelScrollPerImage,
  headingFont,
  setHeadingFont,
  headingCase,
  setHeadingCase,
  imageFolder,
  setImageFolder,
  onReplay,
  onReset,
}: Props) => {
  const [minimized, setMinimizedState] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    return window.localStorage.getItem(STORAGE_KEY) !== "0";
  });

  const setMinimized = (v: boolean) => {
    setMinimizedState(v);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, v ? "1" : "0");
    }
  };

  const easingLabel =
    EASINGS.find((e) => e.value === easing)?.label ?? easing;
  const peelEaseLabel =
    PEEL_EASES.find((p) => p.value === peelEase)?.label ?? peelEase;
  const headingFontLabel =
    HEADING_FONTS.find((f) => f.key === headingFont)?.label ?? headingFont;
  const headingCaseLabel =
    HEADING_CASES.find((c) => c.key === headingCase)?.label ?? headingCase;
  const imageFolderLabel =
    STACK_FOLDERS.find((f) => f.key === imageFolder)?.label ?? imageFolder;

  if (minimized) {
    return (
      <button
        type="button"
        onClick={() => setMinimized(false)}
        aria-label="Open intro animation tweaks"
        className="fixed right-4 bottom-20 z-50 rounded-full border border-[var(--border)] bg-[var(--color-background)]/80 px-3 py-2 font-mono text-[10px] tracking-[0.2em] uppercase opacity-80 shadow-lg backdrop-blur hover:opacity-100"
      >
        Intro tweaks ▴
      </button>
    );
  }

  return (
    <div
      className="fixed right-4 bottom-4 z-50 flex max-h-[calc(70dvh-2rem)] w-[300px] flex-col gap-3 overflow-y-auto overscroll-contain rounded-[var(--radius)] border border-[var(--border)] bg-[var(--color-background)]/85 p-3 font-mono text-xs shadow-lg backdrop-blur"
      role="region"
      aria-label="Intro animation tweaks"
      data-lenis-prevent
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex min-w-0 flex-col gap-1">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase">
            Intro tweaks
          </span>
          <span className="text-[10px] leading-snug opacity-60">
            Tune the homepage intro. Hit Replay to preview your changes from
            the top.
          </span>
        </div>
        <div className="flex shrink-0 gap-1">
          <button
            type="button"
            onClick={onReset}
            title="Restore all controls to their defaults"
            className="rounded-sm border border-[var(--border)] px-2 py-0.5 text-[10px] uppercase hover:opacity-80"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={onReplay}
            title="Replay the intro animation from the top"
            className="rounded-sm bg-[var(--color-foreground)] px-2 py-0.5 text-[10px] text-[var(--color-background)] uppercase hover:opacity-80"
          >
            Replay
          </button>
          <button
            type="button"
            onClick={() => setMinimized(true)}
            aria-label="Minimize"
            title="Minimize panel"
            className="rounded-sm border border-[var(--border)] px-2 py-0.5 text-[10px] uppercase hover:opacity-80"
          >
            ▾
          </button>
        </div>
      </div>

      <Section
        title="Headline style"
        description="Look of the big U are AI heading."
      >
        <Row
          label="Font"
          value={headingFontLabel}
          hint="Try a serif (Playfair, Fraunces, DM Serif) for a softer, editorial feel. Condensed sans (Bebas, Oswald, Anton) read lighter than Futura."
        >
          <select
            value={headingFont}
            onChange={(e) => setHeadingFont(e.target.value as HeadingFontKey)}
            className="rounded-sm border border-[var(--border)] bg-transparent px-1 py-1 text-xs"
          >
            {HEADING_FONTS.map((f) => (
              <option key={f.key} value={f.key}>
                {f.label}
              </option>
            ))}
          </select>
        </Row>

        <Row
          label="Casing"
          value={headingCaseLabel}
          hint="Letter case applied to the headline. Uppercase reads loudest; capitalize and lowercase soften it."
        >
          <select
            value={headingCase}
            onChange={(e) => setHeadingCase(e.target.value as HeadingCaseKey)}
            className="rounded-sm border border-[var(--border)] bg-transparent px-1 py-1 text-xs"
          >
            {HEADING_CASES.map((c) => (
              <option key={c.key} value={c.key}>
                {c.label}
              </option>
            ))}
          </select>
        </Row>

        <label className="relative flex items-center justify-between gap-2 text-[10px] tracking-wider uppercase opacity-80">
          <span className="flex items-center gap-1.5">
            <span>Color split effect</span>
            <Hint text="Magazine-style RGB color separation around each letter. Toggle on for a printed-zine vibe." />
          </span>
          <input
            type="checkbox"
            checked={cmykSplit}
            onChange={(e) => setCmykSplit(e.target.checked)}
          />
        </label>
      </Section>

      <Section
        title="Headline reveal"
        description="How the two heading lines sweep in on first load."
      >
        <Row
          label="Reveal duration"
          value={`${duration}ms`}
          hint="How long one line takes to wipe across left to right."
        >
          <input
            type="range"
            min={200}
            max={10000}
            step={50}
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
          />
        </Row>

        <Row
          label="Start delay"
          value={`${delay}ms`}
          hint="How long to wait after the page loads before the first line starts."
        >
          <input
            type="range"
            min={0}
            max={10000}
            step={50}
            value={delay}
            onChange={(e) => setDelay(Number(e.target.value))}
          />
        </Row>

        <Row
          label="Stagger between lines"
          value={`${stagger}ms`}
          hint="Pause between line 1 starting and line 2 starting."
        >
          <input
            type="range"
            min={0}
            max={1500}
            step={50}
            value={stagger}
            onChange={(e) => setStagger(Number(e.target.value))}
          />
        </Row>

        <Row
          label="Motion curve"
          value={easingLabel}
          hint="Easing applied to the wipe — smooth, snappy, or with overshoot."
        >
          <select
            value={easing}
            onChange={(e) => setEasing(e.target.value)}
            className="rounded-sm border border-[var(--border)] bg-transparent px-1 py-1 text-xs"
          >
            {EASINGS.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </Row>

        <Row
          label="Wipe edge — opaque from"
          value={`${softStart.toFixed(1)}%`}
          hint="Where the wipe becomes fully solid. Lower = harder leading edge."
        >
          <input
            type="range"
            min={0}
            max={100}
            step={0.5}
            value={softStart}
            onChange={(e) => setSoftStart(Number(e.target.value))}
          />
        </Row>

        <Row
          label="Wipe edge — fade to"
          value={`${softEnd.toFixed(1)}%`}
          hint="Where the wipe fades to invisible. Wider gap from 'opaque from' = softer edge."
        >
          <input
            type="range"
            min={0}
            max={100}
            step={0.5}
            value={softEnd}
            onChange={(e) => setSoftEnd(Number(e.target.value))}
          />
        </Row>
      </Section>

      <Section
        title="Image stack drop"
        description="Photos that fall in behind the headline like a stack of polaroids."
      >
        <Row
          label="Image set"
          value={imageFolderLabel}
          hint="Which folder under /public the stack pulls images from. Each folder contains numbered files (0.png, 1.png, …)."
        >
          <select
            value={imageFolder}
            onChange={(e) => setImageFolder(e.target.value as StackFolderKey)}
            className="rounded-sm border border-[var(--border)] bg-transparent px-1 py-1 text-xs"
          >
            {STACK_FOLDERS.map((f) => (
              <option key={f.key} value={f.key}>
                {f.label}
              </option>
            ))}
          </select>
        </Row>

        <Row
          label="Drop speed"
          value={`${stackDuration}ms`}
          hint="How long each image takes to fall into place."
        >
          <input
            type="range"
            min={100}
            max={5000}
            step={50}
            value={stackDuration}
            onChange={(e) => setStackDuration(Number(e.target.value))}
          />
        </Row>

        <Row
          label="Drop timing"
          value={`${stackDelay}ms`}
          hint="When the first image starts falling, measured from the headline reveal. Negative values overlap with the reveal so they happen together."
        >
          <input
            type="range"
            min={-2000}
            max={5000}
            step={50}
            value={stackDelay}
            onChange={(e) => setStackDelay(Number(e.target.value))}
          />
        </Row>

        <Row
          label="Gap between drops"
          value={`${stackStagger}ms`}
          hint="Pause between consecutive images falling. 0 = they all drop at once."
        >
          <input
            type="range"
            min={0}
            max={1000}
            step={25}
            value={stackStagger}
            onChange={(e) => setStackStagger(Number(e.target.value))}
          />
        </Row>
      </Section>

      <Section
        title="Scroll peel-away"
        description="As you scroll, photos peel off one by one to reveal the call-to-action."
      >
        <Row
          label="Peel motion"
          value={peelEaseLabel}
          hint="How each image accelerates off-screen as the page scrolls."
        >
          <select
            value={peelEase}
            onChange={(e) => setPeelEase(e.target.value)}
            className="rounded-sm border border-[var(--border)] bg-transparent px-1 py-1 text-xs"
          >
            {PEEL_EASES.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </Row>

        <Row
          label="Scroll per image"
          value={`${peelScrollPerImage}vh`}
          hint="How much page scroll each image takes to peel away. Higher = slower, more deliberate. Lower = faster, snappier."
        >
          <input
            type="range"
            min={25}
            max={300}
            step={25}
            value={peelScrollPerImage}
            onChange={(e) => setPeelScrollPerImage(Number(e.target.value))}
          />
        </Row>

        <Row
          label="Spin angle"
          value={`${exitRotation}°`}
          hint="How much each image rotates as it flies off. 0 = no spin."
        >
          <input
            type="range"
            min={0}
            max={90}
            step={1}
            value={exitRotation}
            onChange={(e) => setExitRotation(Number(e.target.value))}
          />
        </Row>
      </Section>
    </div>
  );
};

export default HeroAnimationController;
