const ITEMS = [
  "UAREAI",
  "Waitlist open",
  "Issue 01 · Apr 2026",
  "Be the first inside",
  "Human-first AI",
  "Refuse to fake it",
];

const SEP = "✦";

const IssueTicker = () => {
  const line = ITEMS.flatMap((item, i) =>
    i === ITEMS.length - 1 ? [item] : [item, SEP],
  );

  return (
    <div
      role="marquee"
      aria-label="Issue ticker"
      className="ticker fixed top-0 right-0 left-0 z-[60] flex h-7 items-center overflow-hidden border-b border-[var(--border)] bg-[var(--color-background)] font-mono text-[10px] tracking-[0.3em] uppercase"
    >
      <div className="ticker-track flex w-max items-center gap-10 pl-10 will-change-transform">
        {[0, 1].map((dup) => (
          <div
            key={dup}
            aria-hidden={dup === 1}
            className="flex shrink-0 items-center gap-10"
          >
            {line.map((token, i) => (
              <span
                key={`${dup}-${i}`}
                className={
                  token === SEP
                    ? "text-[var(--color-foreground)]/50"
                    : "text-[var(--color-foreground)]/80"
                }
              >
                {token}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IssueTicker;
