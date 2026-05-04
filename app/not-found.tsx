import CtaButton from "@/components/ui/cta-button";
import { Eyebrow } from "@/components/ui/section";

const NotFound = () => {
  return (
    <main className="relative z-0 flex min-h-dvh flex-col items-center justify-center bg-background px-safe text-center text-foreground">
      <Eyebrow>404</Eyebrow>
      <h1
        className="mt-6 text-[14vw] leading-[0.92] tracking-tight sm:text-7xl lg:text-[min(9vw,140px)]"
        style={{
          fontFamily: "var(--font-plus-jakarta-sans)",
          fontWeight: 600,
        }}
      >
        Lost the thread.
      </h1>
      <p className="mt-8 max-w-md font-serif text-lg leading-relaxed text-foreground/80">
        That page isn&rsquo;t here. Head back to the waitlist or pick up the
        story from the start.
      </p>
      <div className="mt-10">
        <CtaButton href="/">Back to home</CtaButton>
      </div>
    </main>
  );
};

export default NotFound;
