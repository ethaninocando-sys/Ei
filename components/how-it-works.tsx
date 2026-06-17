import { SectionWrapper, Eyebrow, SectionHeading } from "@/components/section-wrapper";

const steps = [
  {
    n: "01",
    title: "Strategy call",
    body: "Book a free call so we can assess your market and current rankings.",
  },
  {
    n: "02",
    title: "Onboarding",
    body: "We send simple instructions showing how to give us secure access to your profile.",
  },
  {
    n: "03",
    title: "Execution",
    body: "We walk through every step of the process and start filling your calendar.",
  },
  {
    n: "04",
    title: "What works?",
    body: "We track the data to see what's actually working — and do more of it.",
  },
];

export function HowItWorks() {
  return (
    <SectionWrapper>
      <Eyebrow>How does it work?</Eyebrow>
      <SectionHeading>It&apos;s pretty easy.</SectionHeading>
      <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div key={s.n} className="bg-card p-6">
            <span className="text-3xl font-bold text-accent">{s.n}</span>
            <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
