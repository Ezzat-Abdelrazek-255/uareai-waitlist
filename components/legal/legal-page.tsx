import type { ReactNode } from "react";
import SiteShell from "@/components/site-shell";
import { Eyebrow } from "@/components/ui/section";

type LegalPageProps = {
  title: string;
  lastRevised: string;
  children: ReactNode;
};

const LegalPage = ({ title, lastRevised, children }: LegalPageProps) => {
  return (
    <SiteShell>
      <article className="mx-auto w-full max-w-[68ch] px-safe pt-[10rem] pb-24 lg:pt-[12rem]">
        <div className="mb-12 border-b border-foreground/15 pb-8 lg:mb-16">
          <Eyebrow>Last revised · {lastRevised}</Eyebrow>
          <h1
            className="mt-4 text-[12vw] leading-[0.95] tracking-tight sm:text-6xl lg:text-[min(6vw,88px)]"
            style={{
              fontFamily: "var(--font-plus-jakarta-sans)",
              fontWeight: 600,
            }}
          >
            {title}
          </h1>
        </div>

        <div className="legal-prose font-serif text-[1.0625rem] leading-relaxed text-foreground/85">
          {children}
        </div>
      </article>
    </SiteShell>
  );
};

export default LegalPage;
