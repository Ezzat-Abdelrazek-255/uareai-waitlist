"use client";

import { useState } from "react";

const STORAGE_KEY = "hero-animation-controller:minimized";

const EASINGS = [
  "linear",
  "--ease-primary",
  "--ease-gleasing",
  "--ease-smooth",
  "--ease-doppio",
  "--ease-slow-down",
  "--ease-back-in",
  "--ease-back-out",
  "--ease-back-in-out",
  "--ease-in-quad",
  "--ease-in-cubic",
  "--ease-in-quart",
  "--ease-in-quint",
  "--ease-in-expo",
  "--ease-in-circ",
  "--ease-out-quad",
  "--ease-out-cubic",
  "--ease-out-quart",
  "--ease-out-quint",
  "--ease-out-expo",
  "--ease-out-circ",
  "--ease-in-out-quad",
  "--ease-in-out-cubic",
  "--ease-in-out-quart",
  "--ease-in-out-quint",
  "--ease-in-out-expo",
  "--ease-in-out-circ",
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
  pinViewports: number;
  setPinViewports: (v: number) => void;
  exitRotation: number;
  setExitRotation: (v: number) => void;
  halftone: boolean;
  setHalftone: (v: boolean) => void;
  halftoneDuration: number;
  setHalftoneDuration: (v: number) => void;
  onReplay: () => void;
  onReset: () => void;
};

const Row = ({
  label,
  value,
  children,
}: {
  label: string;
  value: string;
  children: React.ReactNode;
}) => (
  <label className="flex flex-col gap-1">
    <span className="flex items-baseline justify-between text-[10px] tracking-wider uppercase opacity-70">
      <span>{label}</span>
      <span className="tabular-nums">{value}</span>
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
  pinViewports,
  setPinViewports,
  exitRotation,
  setExitRotation,
  halftone,
  setHalftone,
  halftoneDuration,
  setHalftoneDuration,
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

  if (minimized) {
    return (
      <button
        type="button"
        onClick={() => setMinimized(false)}
        aria-label="Expand hero animation controls"
        className="fixed right-4 bottom-4 z-50 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--color-background)]/80 px-3 py-2 font-mono text-[10px] tracking-[0.2em] uppercase opacity-80 shadow-lg backdrop-blur hover:opacity-100"
      >
        Hero reveal ▴
      </button>
    );
  }

  return (
    <div
      className="fixed right-4 bottom-4 z-50 flex max-h-[calc(100dvh-2rem)] w-[280px] flex-col gap-3 overflow-y-auto rounded-[var(--radius)] border border-[var(--border)] bg-[var(--color-background)]/80 p-3 font-mono text-xs shadow-lg backdrop-blur"
      role="region"
      aria-label="Hero animation controls"
    >
      <div className="flex items-center justify-between">
        <span className="text-[10px] tracking-[0.2em] uppercase opacity-70">
          Hero reveal
        </span>
        <div className="flex gap-1">
          <button
            type="button"
            onClick={onReset}
            className="rounded-sm border border-[var(--border)] px-2 py-0.5 text-[10px] uppercase hover:opacity-80"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={onReplay}
            className="rounded-sm bg-[var(--color-foreground)] px-2 py-0.5 text-[10px] text-[var(--color-background)] uppercase hover:opacity-80"
          >
            Replay
          </button>
          <button
            type="button"
            onClick={() => setMinimized(true)}
            aria-label="Minimize hero animation controls"
            className="rounded-sm border border-[var(--border)] px-2 py-0.5 text-[10px] uppercase hover:opacity-80"
          >
            ▾
          </button>
        </div>
      </div>

      <Row label="Delay" value={`${delay}ms`}>
        <input
          type="range"
          min={0}
          max={10000}
          step={50}
          value={delay}
          onChange={(e) => setDelay(Number(e.target.value))}
        />
      </Row>

      <Row label="Duration" value={`${duration}ms`}>
        <input
          type="range"
          min={200}
          max={10000}
          step={50}
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
        />
      </Row>

      <Row label="Stagger" value={`${stagger}ms`}>
        <input
          type="range"
          min={0}
          max={1500}
          step={50}
          value={stagger}
          onChange={(e) => setStagger(Number(e.target.value))}
        />
      </Row>

      <Row label="Soft start" value={`${softStart.toFixed(1)}%`}>
        <input
          type="range"
          min={0}
          max={100}
          step={0.5}
          value={softStart}
          onChange={(e) => setSoftStart(Number(e.target.value))}
        />
      </Row>

      <Row label="Soft end" value={`${softEnd.toFixed(1)}%`}>
        <input
          type="range"
          min={0}
          max={100}
          step={0.5}
          value={softEnd}
          onChange={(e) => setSoftEnd(Number(e.target.value))}
        />
      </Row>

      <Row label="Easing" value={easing}>
        <select
          value={easing}
          onChange={(e) => setEasing(e.target.value)}
          className="rounded-sm border border-[var(--border)] bg-transparent px-1 py-0.5 text-xs"
        >
          {EASINGS.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </Row>

      <div className="flex flex-col gap-3 border-t border-[var(--border)] pt-3">
        <span className="text-[10px] tracking-[0.2em] uppercase opacity-70">
          Stack drop
        </span>

        <Row label="Stack delay" value={`${stackDelay}ms`}>
          <input
            type="range"
            min={-2000}
            max={5000}
            step={50}
            value={stackDelay}
            onChange={(e) => setStackDelay(Number(e.target.value))}
          />
        </Row>

        <Row label="Stack duration" value={`${stackDuration}ms`}>
          <input
            type="range"
            min={100}
            max={5000}
            step={50}
            value={stackDuration}
            onChange={(e) => setStackDuration(Number(e.target.value))}
          />
        </Row>

        <Row label="Stack stagger" value={`${stackStagger}ms`}>
          <input
            type="range"
            min={0}
            max={1000}
            step={25}
            value={stackStagger}
            onChange={(e) => setStackStagger(Number(e.target.value))}
          />
        </Row>

        <label className="flex items-center justify-between gap-2 text-[10px] uppercase">
          <span>Halftone resolve</span>
          <input
            type="checkbox"
            checked={halftone}
            onChange={(e) => setHalftone(e.target.checked)}
          />
        </label>

        <Row label="Halftone duration" value={`${halftoneDuration}ms`}>
          <input
            type="range"
            min={100}
            max={3000}
            step={50}
            value={halftoneDuration}
            disabled={!halftone}
            onChange={(e) => setHalftoneDuration(Number(e.target.value))}
          />
        </Row>
      </div>

      <div className="flex flex-col gap-3 border-t border-[var(--border)] pt-3">
        <span className="text-[10px] tracking-[0.2em] uppercase opacity-70">
          Scroll peel
        </span>

        <Row label="Pin viewports" value={`${pinViewports.toFixed(2)}× vh`}>
          <input
            type="range"
            min={0.5}
            max={5}
            step={0.05}
            value={pinViewports}
            onChange={(e) => setPinViewports(Number(e.target.value))}
          />
        </Row>

        <Row label="Exit rotation" value={`${exitRotation}°`}>
          <input
            type="range"
            min={0}
            max={90}
            step={1}
            value={exitRotation}
            onChange={(e) => setExitRotation(Number(e.target.value))}
          />
        </Row>
      </div>

      <div className="border-t border-[var(--border)] pt-3">
        <span className="text-[10px] tracking-[0.2em] uppercase opacity-70">
          Heading effects
        </span>
        <label className="mt-2 flex items-center justify-between gap-2 text-[10px] uppercase">
          <span>CMYK split</span>
          <input
            type="checkbox"
            checked={cmykSplit}
            onChange={(e) => setCmykSplit(e.target.checked)}
          />
        </label>
      </div>
    </div>
  );
};

export default HeroAnimationController;
