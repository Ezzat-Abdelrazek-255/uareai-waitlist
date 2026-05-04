import type { Metadata } from "next";
import SiteShell from "@/components/site-shell";
import CtaButton from "@/components/ui/cta-button";
import Section, { Eyebrow } from "@/components/ui/section";
import {
  ArrowDownGlyph,
  HeartGlyph,
  LinkGlyph,
  QuoteGlyph,
  SparkGlyph,
  SproutGlyph,
  UmbrellaGlyph,
} from "@/icons/glyphs";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Uare.ai and help shape the next era of Personal AI — built around human values, voice, and experience.",
  alternates: { canonical: "/career" },
};

const VALUES = [
  {
    title: "Be your best self",
    body: "Bring curiosity, candor, and craft. Hold a high bar for the work and for each other.",
    Icon: SparkGlyph,
  },
  {
    title: "Let yourself speak",
    body: "Share your perspective. Disagree directly. Trust that your voice belongs in the room.",
    Icon: QuoteGlyph,
  },
  {
    title: "Come together",
    body: "Build with care. The best Individual AI is the product of a team that listens deeply.",
    Icon: LinkGlyph,
  },
] as const;

const TEAM = [
  {
    name: "Rob LoCascio",
    role: "Founder & CEO",
    background: "Ex LivePerson",
    quote:
      "This began with a question, not a roadmap. Could we preserve the fidelity of an individual — their life, voice, and way of thinking?",
  },
  {
    name: "Sam Horton",
    role: "VP, Strategic Partnerships & Operations",
    background: "Ex Firework",
    quote:
      "I joined because I believe the future of AI isn't about replacing people, but empowering every individual to preserve.",
  },
  {
    name: "Matt Stegman",
    role: "Enterprise & Prosumer Partnerships",
    background: "Ex Sisense",
    quote:
      "I joined to help bring the next evolution of human–AI collaboration to life through scalable knowledge and connection.",
  },
  {
    name: "Alexis Durocher",
    role: "Head of AI Engineering",
    background: "Ex Apple, Ex GoPro",
    quote:
      "I joined Uare.ai because I want to build the newest, cutting-edge version of an Individual AI.",
  },
  {
    name: "Ghazal Tavakoli",
    role: "Head of Talent",
    background: "Ex Meta",
    quote:
      "I believe we can leverage AI to help people professionally and individually by empowering full potential while preserving.",
  },
  {
    name: "Yev Marusenko",
    role: "Head of Growth Marketing",
    background: "Ex Lovable",
    quote:
      "I joined because Individual AI is only the beginning. In a world where algorithms and emotions converge, I'm excited to empower.",
  },
  {
    name: "Kanoa Perman",
    role: "Chief of Staff",
    background: "Ross School of Business",
    quote:
      "I joined to build a foundation of creators who will shape the next generation of how humans engage digitally.",
  },
  {
    name: "Tim Wang",
    role: "Sr. Software Engineer",
    background: "Ex Google",
    quote:
      "I joined to build scalable infrastructure that puts people back in control of their AI interactions and personal data.",
  },
  {
    name: "Ronak Patel",
    role: "Senior Frontend Engineer",
    background: "Ex Apple",
    quote:
      "I joined to turn a bold vision of Individual AI into experiences that feel intuitive, human, and empowering.",
  },
  {
    name: "Eric Yu",
    role: "Forward Deployed Engineer",
    background: null,
    quote:
      "I joined to help create a product that preserves individuality in an age of mass generalization with limitless applications.",
  },
  {
    name: "Michele Du",
    role: "Lead Product Designer",
    background: "Ex Bolster AI",
    quote:
      "I joined because Individual AI is the next chapter. It's a shift from using AI as a tool to building connection.",
  },
  {
    name: "Robert Brooks",
    role: "Principal DevOps Engineer",
    background: "Ex Microsoft",
    quote:
      "I joined Uare.ai to architect secure, scalable, and resilient systems serving as the backbone for digital sovereignty.",
  },
  {
    name: "Sonia Lawrence-Emanuel",
    role: "Creator Marketing & Talent Success Lead",
    background: "Ex PeerNova",
    quote:
      "We're not just building technology — we're building opportunity. I'm excited to help creators grow, earn, and own their future.",
  },
] as const;

const BENEFITS = [
  {
    label: "Culture & Development",
    Icon: SproutGlyph,
    items: [
      "Professional development courses and business certification resources",
      "Leadership training and continuing education programs",
      "Online Academy with wellness and personal-development classes",
      "Workplace wellness programs covering weight management and nutrition",
      "Mental health support with 24/7 counselling access",
    ],
  },
  {
    label: "Life & Family",
    Icon: HeartGlyph,
    items: [
      "Caregiver Support Program through Cariloop for any family care needs",
      "Adoption Assistance per qualified adoption",
      "Employee Assistance Program with free counselling and crisis support",
      "Family coverage options for health, dental, and vision plans",
      "Childcare and eldercare coordination services",
      "Special-education support and IEP assistance for children",
      "Financial planning and coaching for family financial health",
    ],
  },
  {
    label: "For Employees",
    Icon: UmbrellaGlyph,
    items: [
      "Health, dental, and vision insurance through nationwide carriers",
      "Health Savings Account program with contribution limits",
      "Health Care Flexible Spending Account with annual carryover",
      "Free access to Calm for meditation and stress management",
      "Employer-paid Basic Life Insurance",
      "Short-term and long-term disability insurance",
      "Commuter Benefits using pre-tax dollars for transit and parking",
      "MarketPlace Perks at Work with discounts and rewards",
      "24/7 Health Care Support Program for medical guidance",
    ],
  },
] as const;

const HEADING_STYLE = {
  fontFamily: "var(--font-plus-jakarta-sans)",
  fontWeight: 600,
} as const;

const CareerPage = () => {
  return (
    <SiteShell>
      {/* Hero */}
      <Section
        divided={false}
        className="mx-auto w-full max-w-6xl px-safe pt-[10rem] pb-24 lg:pt-[14rem] lg:pb-32"
      >
        <Eyebrow>Careers</Eyebrow>
        <h1
          className="mt-6 text-[12vw] leading-[0.92] tracking-tight sm:text-7xl lg:text-[min(8vw,128px)]"
          style={HEADING_STYLE}
        >
          Join us in building<br />the future of AI.
        </h1>
        <p className="mt-10 max-w-3xl font-serif text-xl leading-relaxed text-foreground/80 lg:text-2xl">
          We&rsquo;re creating Individual AI that reflects your voice, values,
          and experiences — while keeping you in control. Build AI that&rsquo;s
          deeply human, safe, and beneficial.
        </p>
        <div className="mt-10">
          <CtaButton
            href="#open-roles"
            variant="outline"
            trailing={<ArrowDownGlyph className="h-3.5 w-3.5" />}
          >
            View Open Roles
          </CtaButton>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <Eyebrow>What we value</Eyebrow>
        <div className="mt-10 grid gap-12 lg:grid-cols-3 lg:gap-10">
          {VALUES.map(({ title, body, Icon }, i) => (
            <article key={title}>
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

      {/* Team */}
      <Section>
        <Eyebrow>Leadership &amp; team</Eyebrow>
        <h2
          className="mt-4 text-4xl leading-tight lg:text-6xl"
          style={HEADING_STYLE}
        >
          The people building it.
        </h2>
        <ul className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-2">
          {TEAM.map((m) => (
            <li key={m.name} className="border-t border-foreground/15 pt-6">
              <h3
                className="text-xl leading-tight lg:text-2xl"
                style={HEADING_STYLE}
              >
                {m.name}
              </h3>
              <p className="mt-3 font-mono text-[10px] tracking-[0.3em] text-foreground/60 uppercase">
                {m.role}
                {m.background ? ` · ${m.background}` : ""}
              </p>
              <p className="mt-4 flex gap-3 font-serif text-base leading-relaxed text-foreground/80 italic">
                <QuoteGlyph className="mt-1 h-4 w-4 shrink-0 text-foreground/40 not-italic" />
                <span>{m.quote}</span>
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Open roles placeholder */}
      <Section id="open-roles">
        <Eyebrow>Open roles</Eyebrow>
        <h2
          className="mt-4 max-w-3xl text-4xl leading-tight lg:text-6xl"
          style={HEADING_STYLE}
        >
          We&rsquo;re hiring across engineering, design, and growth.
        </h2>
        <p className="mt-6 max-w-2xl font-serif text-lg leading-relaxed text-foreground/80">
          Don&rsquo;t see the exact role you&rsquo;re looking for? Send us your
          story anyway. If you&rsquo;re excited by the mission, we want to hear
          from you.
        </p>
        <div className="mt-10">
          <CtaButton href="mailto:careers@uare.ai">careers@uare.ai</CtaButton>
        </div>
      </Section>

      {/* Benefits */}
      <Section>
        <Eyebrow>Benefits</Eyebrow>
        <h2
          className="mt-4 text-4xl leading-tight lg:text-6xl"
          style={HEADING_STYLE}
        >
          How we take care of our team.
        </h2>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-foreground/15 bg-foreground/15 lg:grid-cols-3">
          {BENEFITS.map(({ label, items, Icon }) => (
            <article
              key={label}
              className="flex flex-col bg-background p-8 lg:p-10"
            >
              <Icon className="h-8 w-8 text-foreground" />
              <h3
                className="mt-6 text-xl leading-tight lg:text-2xl"
                style={HEADING_STYLE}
              >
                {label}
              </h3>
              <ul className="mt-6 space-y-3 font-serif text-[0.95rem] leading-relaxed text-foreground/80">
                {items.map((item) => (
                  <li
                    key={item}
                    className="border-l border-foreground/15 pl-4"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* Closing */}
      <Section>
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2
              className="text-4xl leading-tight lg:text-6xl"
              style={HEADING_STYLE}
            >
              We celebrate individuality.
            </h2>
            <p className="mt-6 max-w-2xl font-serif text-lg leading-relaxed text-foreground/80">
              We build for everyone by welcoming every voice. If you&rsquo;re
              excited by the mission, we want to hear from you.
            </p>
          </div>
          <CtaButton href="/">Get Early Access</CtaButton>
        </div>
      </Section>
    </SiteShell>
  );
};

export default CareerPage;
