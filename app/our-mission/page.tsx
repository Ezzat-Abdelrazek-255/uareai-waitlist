import type { Metadata } from "next";
import SiteShell from "@/components/site-shell";
import CtaButton from "@/components/ui/cta-button";
import Section, { Eyebrow } from "@/components/ui/section";
import {
  LinkGlyph,
  NetworkGlyph,
  PersonGlyph,
  QuoteGlyph,
  ShieldGlyph,
  SparkGlyph,
} from "@/icons/glyphs";

export const metadata: Metadata = {
  title: "Our Mission",
  description:
    "Uare.ai builds Individual AI digital twins designed to protect personal individuality and legacy — authentic over artificial.",
  alternates: { canonical: "/our-mission" },
};

const VALUES = [
  { label: "Be your best self", Icon: SparkGlyph },
  { label: "Let yourself speak", Icon: QuoteGlyph },
  { label: "Come together", Icon: LinkGlyph },
] as const;

const PILLARS = [
  {
    title: "Human Life Model",
    body: "A proprietary framework for building lifelong, human-centered Personal AIs that reflect your thought patterns, communication style, and memory.",
    Icon: PersonGlyph,
  },
  {
    title: "Ownership & Security",
    body: "Containerized data architecture with local model options and proof-of-person safeguards. Your data never trains a public LLM.",
    Icon: ShieldGlyph,
  },
  {
    title: "Share & Monetize",
    body: "Private circles and a curated marketplace let individuals and prosumers offer expertise on their own terms.",
    Icon: NetworkGlyph,
  },
] as const;

const FAQ = [
  {
    q: "Who owns my data?",
    a: "You do. Containerized data stays under your control, never trains public models, and is exportable or deletable on demand.",
  },
  {
    q: "How can I share my AI?",
    a: "From private circles with friends, family, or clients to publishing approved content in curated feeds and marketplaces.",
  },
  {
    q: "Does my data get shared in a public model?",
    a: "No. Your data remains private, containerized, and separate from generic AI systems.",
  },
  {
    q: "Can I make money from my AI?",
    a: "Yes. Prosumers can monetize AI-generated assets, conversations, and expertise directly with their audience while controlling pricing and visibility.",
  },
  {
    q: "What tools help me manage my AI?",
    a: "A unified prosumer workspace handles data uploads, asset previews, sharing approvals, and community management.",
  },
  {
    q: "Can I take my AI off Uare.ai?",
    a: "Yes. Your Individual AI is portable — remove your data, export it, or migrate to other environments.",
  },
  {
    q: "Does my AI voice sound like me?",
    a: "Yes. Neural Voice technology models natural speech based on your tone, cadence, and expression.",
  },
  {
    q: "Can you create an avatar of me?",
    a: "Yes. Digital avatars that reflect your likeness are optional and fully user-controlled.",
  },
  {
    q: "Am I going to be a large language model like ChatGPT?",
    a: "No. Your Individual AI is built exclusively on your personal data — your stories, values, and voice — separate from generic LLMs.",
  },
  {
    q: "How do you capture my personality?",
    a: "Through stories, memories, preferences, and thought patterns, structured by the Human Life Model.",
  },
  {
    q: "Is this useful for dementia or other conditions?",
    a: "It is not a medical device, but Individual AI can surface memories, preserve narratives, and support reflection and connection.",
  },
] as const;

const HEADING_STYLE = {
  fontFamily: "var(--font-plus-jakarta-sans)",
  fontWeight: 600,
} as const;

const OurMissionPage = () => {
  return (
    <SiteShell>
      {/* Hero */}
      <Section
        divided={false}
        className="mx-auto w-full max-w-6xl px-safe pt-[10rem] pb-24 lg:pt-[14rem] lg:pb-32"
      >
        <Eyebrow>Our Mission</Eyebrow>
        <h1
          className="mt-6 text-[14vw] leading-[0.92] tracking-tight sm:text-7xl lg:text-[min(9vw,140px)]"
          style={HEADING_STYLE}
        >
          The individual<br />comes first.
        </h1>
        <p className="mt-10 max-w-3xl font-serif text-xl leading-relaxed text-foreground/80 lg:text-2xl">
          General AIs like ChatGPT learn from everyone. Uare.ai learns from{" "}
          <em>you</em>. We build Individual AI digital twins to safeguard your
          individuality and legacy — because authentic human brilliance beats
          imitation.
        </p>
      </Section>

      {/* Vision · Mission · Values */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-10">
          <div>
            <Eyebrow>Vision</Eyebrow>
            <p
              className="mt-4 text-2xl leading-snug lg:text-[1.75rem]"
              style={HEADING_STYLE}
            >
              Discover &amp; protect Individual AI.
            </p>
          </div>
          <div>
            <Eyebrow>Mission</Eyebrow>
            <p
              className="mt-4 text-2xl leading-snug lg:text-[1.75rem]"
              style={HEADING_STYLE}
            >
              Take a person&rsquo;s uniqueness and bring it to life so others
              can share in their individuality.
            </p>
          </div>
          <div>
            <Eyebrow>Values</Eyebrow>
            <ul className="mt-4 space-y-4">
              {VALUES.map(({ label, Icon }) => (
                <li key={label} className="flex items-start gap-3">
                  <Icon className="mt-1 h-5 w-5 shrink-0 text-foreground/70" />
                  <span
                    className="text-2xl leading-snug lg:text-[1.75rem]"
                    style={HEADING_STYLE}
                  >
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* How we're building it */}
      <Section>
        <Eyebrow>How we&rsquo;re building it</Eyebrow>
        <h2
          className="mt-6 max-w-3xl text-4xl leading-[1.05] lg:text-6xl"
          style={HEADING_STYLE}
        >
          Three pillars of Individual AI.
        </h2>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-foreground/15 bg-foreground/15 lg:grid-cols-3">
          {PILLARS.map(({ title, body, Icon }, i) => (
            <article
              key={title}
              className="flex flex-col bg-background p-8 lg:p-10"
            >
              <div className="flex items-center justify-between">
                <Icon className="h-8 w-8 text-foreground" />
                <span className="font-mono text-[10px] tracking-[0.3em] text-foreground/50 uppercase">
                  0{i + 1}
                </span>
              </div>
              <h3
                className="mt-8 text-2xl leading-tight lg:text-[1.75rem]"
                style={HEADING_STYLE}
              >
                {title}
              </h3>
              <p className="mt-4 font-serif text-base leading-relaxed text-foreground/80">
                {body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* Founder note */}
      <Section width="narrow">
        <Eyebrow>Founder note</Eyebrow>
        <blockquote className="mt-8 flex gap-6">
          <QuoteGlyph className="h-10 w-10 shrink-0 text-foreground/40" />
          <div>
            <p className="font-serif text-2xl leading-snug text-foreground italic lg:text-4xl">
              This began with a question, not a roadmap. Could we preserve the
              fidelity of an individual — their life, voice, and way of
              thinking?
            </p>
            <footer className="mt-6 font-mono text-[10px] tracking-[0.3em] text-foreground/60 uppercase">
              — Rob LoCascio, Founder
            </footer>
          </div>
        </blockquote>
      </Section>

      {/* FAQ */}
      <Section width="narrow">
        <Eyebrow>Questions</Eyebrow>
        <h2
          className="mt-4 text-4xl leading-tight lg:text-5xl"
          style={HEADING_STYLE}
        >
          Frequently asked.
        </h2>

        <dl className="mt-10 divide-y divide-foreground/15 border-y border-foreground/15">
          {FAQ.map(({ q, a }) => (
            <div
              key={q}
              className="grid gap-3 py-6 lg:grid-cols-[1fr_2fr] lg:gap-10 lg:py-8"
            >
              <dt
                className="text-lg leading-snug lg:text-xl"
                style={HEADING_STYLE}
              >
                {q}
              </dt>
              <dd className="font-serif text-base leading-relaxed text-foreground/80">
                {a}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* CTA */}
      <Section>
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2
            className="text-4xl leading-[1.1] lg:text-6xl"
            style={HEADING_STYLE}
          >
            Be among the first<br />to build your Individual AI.
          </h2>
          <CtaButton href="/">Get Early Access</CtaButton>
        </div>
      </Section>
    </SiteShell>
  );
};

export default OurMissionPage;
