import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRightGlyph } from "@/icons/glyphs";

type CommonProps = {
  children: ReactNode;
  variant?: "solid" | "outline";
  /** Glyph rendered to the right of the label. Defaults to ArrowRight. */
  trailing?: ReactNode | null;
  className?: string;
};

type LinkProps = CommonProps & {
  href: string;
  external?: boolean;
};

const baseClasses =
  "inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3 font-mono text-xs tracking-[0.3em] uppercase";

const variantClasses = {
  solid:
    "bg-foreground text-background transition-opacity hover:opacity-90",
  outline:
    "border border-foreground/30 text-foreground transition-colors hover:bg-foreground hover:text-background",
} as const;

const CtaButton = ({
  children,
  variant = "solid",
  trailing,
  className,
  href,
  external,
}: LinkProps) => {
  const cls = `${baseClasses} ${variantClasses[variant]}${className ? ` ${className}` : ""}`;
  const trail =
    trailing === null
      ? null
      : (trailing ?? <ArrowRightGlyph className="h-3.5 w-3.5" />);

  if (external || /^(https?:|mailto:|tel:)/.test(href)) {
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
        {trail}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
      {trail}
    </Link>
  );
};

export default CtaButton;
