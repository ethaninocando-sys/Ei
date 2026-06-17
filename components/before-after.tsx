import { SectionWrapper, Eyebrow, SectionHeading } from "@/components/section-wrapper";

const rows = [
  { label: "Average rank", before: "#86", after: "Top 3" },
  { label: "Market share", before: "1%", after: "30%+" },
  { label: "Clicks per month", before: "5", after: "250+" },
  { label: "New clients / month", before: "1–2", after: "10+" },
];

export function BeforeAfter() {
  return (
    <SectionWrapper>
      <Eyebrow>Before / after</Eyebrow>
      <SectionHeading>The difference</SectionHeading>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Before */}
        <div className="border border-border bg-card p-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Before
          </p>
          <dl className="mt-5 space-y-4">
            {rows.map((r) => (
              <div key={r.label} className="flex items-baseline justify-between border-b border-border/50 pb-3">
                <dt className="text-muted-foreground">{r.label}</dt>
                <dd className="text-xl font-bold">{r.before}</dd>
              </div>
            ))}
          </dl>
        </div>
        {/* After */}
        <div className="border-2 border-accent bg-card p-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            After
          </p>
          <dl className="mt-5 space-y-4">
            {rows.map((r) => (
              <div key={r.label} className="flex items-baseline justify-between border-b border-border/50 pb-3">
                <dt className="text-muted-foreground">{r.label}</dt>
                <dd className="text-xl font-bold text-accent">{r.after}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <p className="mt-4 text-center text-xs text-muted-foreground">
        Illustrative numbers — replace with your own client results.
      </p>
    </SectionWrapper>
  );
}
