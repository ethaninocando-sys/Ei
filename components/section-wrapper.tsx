import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "@/components/animated-section";

export function SectionWrapper({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("w-full px-5 py-20 sm:px-8 sm:py-28", className)}
    >
      <AnimatedSection className="mx-auto w-full max-w-5xl">
        {children}
      </AnimatedSection>
    </section>
  );
}

export function PillBadge({
  icon: Icon,
  children,
  className,
}: {
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground/70 shadow-soft",
        className,
      )}
    >
      {Icon ? <Icon className="size-3.5" /> : null}
      {children}
    </span>
  );
}

export function Em({ children }: { children: React.ReactNode }) {
  return <span className="font-serif font-normal italic">{children}</span>;
}

export function SectionHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-3xl font-semibold leading-[1.1] tracking-tight sm:text-5xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}
