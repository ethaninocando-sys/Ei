import { cn } from "@/lib/utils";

/**
 * Consistent vertical rhythm + max-width for every marketing section.
 * `eyebrow` is the small label above a heading (e.g. "Free stuff").
 */
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
      className={cn("w-full px-5 py-16 sm:px-8 sm:py-24", className)}
    >
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
      {children}
    </p>
  );
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
        "text-3xl font-bold leading-tight tracking-tight sm:text-4xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}
