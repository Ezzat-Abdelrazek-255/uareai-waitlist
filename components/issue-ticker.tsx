const SEP = "✦";

const IssueTicker = () => {
  // Server-component render time. The ticker is not interactive and not
  // re-rendered on the client, so there's no hydration mismatch. The date
  // refreshes on every deploy / static rebuild.
  const issueDate = new Date().toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });

  const items = [
    "UAREAI",
    "Waitlist open",
    `Issue 01 · ${issueDate}`,
    "Be the first inside",
    "Human-first AI",
    "Refuse to fake it",
  ];

  const line = items.flatMap((item, i) =>
    i === items.length - 1 ? [item] : [item, SEP],
  );

  return (
    // Decorative looping brand strip — hidden from assistive tech. `role="marquee"`
    // is non-standard ARIA so we omit it; an `aria-live` region would announce
    // every loop and is not what we want.
    <div
      aria-hidden
      className="ticker fixed top-0 right-0 left-0 z-[60] flex h-7 items-center overflow-hidden border-b border-foreground/15 bg-background font-mono text-[10px] tracking-[0.3em] uppercase"
    >
      <div className="ticker-track flex w-max items-center gap-10 pl-10 will-change-transform">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center gap-10">
            {line.map((token, i) => (
              <span
                key={`${dup}-${i}`}
                className={
                  token === SEP
                    ? "text-foreground/50"
                    : "text-foreground/80"
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
