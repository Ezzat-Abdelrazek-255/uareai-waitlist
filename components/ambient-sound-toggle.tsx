"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const SRC = "/audio/ambient.mp3";
const TARGET_VOLUME = 0.35;
const FADE_MS = 600;
const STORAGE_KEY = "uareai:ambient-on";

const WAVE_W = 36;
const WAVE_H = 32;
const WAVE_PADDING = 2;
const WAVE_SAMPLES = 48;
const ON_AMP = 9;
const ON_FREQ = 0.85;
const ON_SPEED = 0.0014;
const OFF_AMP = 1.6;
const OFF_FREQ = 1.6;
const OFF_SPEED = 0.0014;
const MORPH = 0.09;

const buildWavePath = (amp: number, freq: number, phase: number) => {
  const innerW = WAVE_W - WAVE_PADDING * 2;
  const cy = WAVE_H / 2;
  let d = "";
  for (let i = 0; i <= WAVE_SAMPLES; i++) {
    const t = i / WAVE_SAMPLES;
    const x = WAVE_PADDING + t * innerW;
    const y = cy + amp * Math.sin(2 * Math.PI * freq * t + phase);
    d += i === 0 ? `M${x.toFixed(2)} ${y.toFixed(2)}` : ` L${x.toFixed(2)} ${y.toFixed(2)}`;
  }
  return d;
};

const INITIAL_PATH = buildWavePath(OFF_AMP, OFF_FREQ, 0);

const AmbientSoundToggle = () => {
  const [on, setOn] = useState(false);
  const [ready, setReady] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeRafRef = useRef<number | null>(null);
  const onRef = useRef(false);
  const pathRef = useRef<SVGPathElement | null>(null);
  const waveRafRef = useRef<number | null>(null);

  useEffect(() => {
    const audio = new Audio(SRC);
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0;
    audioRef.current = audio;
    setReady(true);

    return () => {
      if (fadeRafRef.current !== null) cancelAnimationFrame(fadeRafRef.current);
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
  }, []);

  const fadeTo = useCallback((target: number, onDone?: () => void) => {
    const audio = audioRef.current;
    if (!audio) return;
    if (fadeRafRef.current !== null) cancelAnimationFrame(fadeRafRef.current);

    const start = audio.volume;
    const startTime = performance.now();

    const tick = (now: number) => {
      const t = Math.max(0, Math.min(1, (now - startTime) / FADE_MS));
      audio.volume = start + (target - start) * t;
      if (t < 1) {
        fadeRafRef.current = requestAnimationFrame(tick);
      } else {
        fadeRafRef.current = null;
        onDone?.();
      }
    };
    fadeRafRef.current = requestAnimationFrame(tick);
  }, []);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    setOn((prev) => {
      const next = !prev;
      onRef.current = next;
      if (next) {
        audio.play().then(() => fadeTo(TARGET_VOLUME)).catch(() => {});
      } else {
        fadeTo(0, () => audio.pause());
      }
      try {
        window.localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
      } catch {}
      return next;
    });
  }, [fadeTo]);

  useEffect(() => {
    let amp = OFF_AMP;
    let freq = OFF_FREQ;
    let phase = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      const targetAmp = onRef.current ? ON_AMP : OFF_AMP;
      const targetFreq = onRef.current ? ON_FREQ : OFF_FREQ;
      const speed = onRef.current ? ON_SPEED : OFF_SPEED;
      amp += (targetAmp - amp) * MORPH;
      freq += (targetFreq - freq) * MORPH;
      phase += dt * speed * Math.PI;
      if (pathRef.current) {
        pathRef.current.setAttribute("d", buildWavePath(amp, freq, phase));
      }
      waveRafRef.current = requestAnimationFrame(tick);
    };
    waveRafRef.current = requestAnimationFrame(tick);

    return () => {
      if (waveRafRef.current !== null) cancelAnimationFrame(waveRafRef.current);
    };
  }, []);

  useEffect(() => {
    if (!ready) return;
    const audio = audioRef.current;
    if (!audio) return;

    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {}
    if (stored !== "1") return;

    const start = () => {
      audio
        .play()
        .then(() => {
          fadeTo(TARGET_VOLUME);
          onRef.current = true;
          setOn(true);
        })
        .catch(() => {});
      window.removeEventListener("pointerdown", start);
      window.removeEventListener("keydown", start);
    };
    window.addEventListener("pointerdown", start, { once: true });
    window.addEventListener("keydown", start, { once: true });

    return () => {
      window.removeEventListener("pointerdown", start);
      window.removeEventListener("keydown", start);
    };
  }, [ready, fadeTo]);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={on}
      aria-label={on ? "Mute ambient sound" : "Play ambient sound"}
      title={on ? "Mute ambient sound" : "Play ambient sound"}
      className="fixed bottom-6 left-6 z-50 grid h-12 w-12 place-content-center rounded-full border border-foreground/20 bg-background/60 text-foreground/70 backdrop-blur-sm transition-colors hover:text-foreground hover:border-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
    >
      <svg
        viewBox={`0 0 ${WAVE_W} ${WAVE_H}`}
        width="28"
        height="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path ref={pathRef} d={INITIAL_PATH} />
      </svg>
    </button>
  );
};

export default AmbientSoundToggle;
