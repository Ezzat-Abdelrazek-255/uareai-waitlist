import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  /** Reading-column max-width. `wide` for grids, `narrow` for prose. */
  width?: "wide" | "narrow";
  /** Adds the hairline rule + top padding that section blocks share. */
  divided?: boolean;
  /** Override default vertical rhythm — useful for hero sections. */
  className?: string;
  id?: string;
};

const widths = {
  wide: "max-w-6xl",
  narrow: "max-w-4xl",
} as const;

const Section = ({
  children,
  width = "wide",
  divided = true,
  className,
  id,
}: SectionProps) => {
  return (
    <section
      id={id}
      className={
        className ??
        `mx-auto w-full ${widths[width]} px-safe pb-24 lg:pb-32`
      }
    >
      {divided ? (
        <div className="border-t border-foreground/15 pt-12">{children}</div>
      ) : (
        children
      )}
    </section>
  );
};

export default Section;

export const Eyebrow = ({ children }: { children: ReactNode }) => (
  <p className="font-mono text-[10px] tracking-[0.3em] text-foreground/60 uppercase">
    {children}
  </p>
);
