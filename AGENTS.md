# Project notes for AI agents

This is a standard Next.js App Router project (Next 16, React 19). Conventions:

- App Router with server components by default; mark client components with `"use client"`.
- Tailwind CSS v4. Theme tokens are defined in `styles/css/uareai.css` and exposed via `@theme inline` in `styles/css/tailwind.css`. Prefer Tailwind utilities (`bg-background`, `text-foreground`, `border-foreground/15`) over raw `var(--*)` strings.
- Smooth scrolling is provided by `components/smooth-scroll.tsx`, which mounts a fresh Lenis instance per route via `key={pathname}`. Don't share scroll state across routes.
- The home hero owns its own scroll lock during the intro animation; the root layout intentionally does not pin body overflow.
- Icons live under `icons/` as React components using inline SVG (`u-mark.tsx`, `glyphs.tsx`). Match that style.
- Shared UI primitives go in `components/ui/`. Page-specific composition lives next to its route.
