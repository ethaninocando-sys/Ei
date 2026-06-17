import { CalendarClock, Map, ListOrdered, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  SectionWrapper,
  PillBadge,
  SectionHeading,
  Em,
} from "@/components/section-wrapper";

const steps: { n: string; icon: LucideIcon; title: string; body: string }[] = [
  {
    n: "01",
    icon: CalendarClock,
    title: "Strategy Call",
    body: "Book a free call so we can assess your market and current rankings.",
  },
  {
    n: "02",
    icon: Map,
    title: "Onboarding",
    body: "We'll send you detailed instructions that shows you how we can get secure access to your profile.",
  },
  {
    n: "03",
    icon: ListOrdered,
    title: "Execution",
    body: "We'll walk through every step of the process so we not only fill your calendar for weeks.",
  },
  {
    n: "04",
    icon: Rocket,
    title: "What works?",
    body: "We track relevant data to see what actually works and do more of it.",
  },
];

export function HowItWorks() {
  return (
    <SectionWrapper className="text-center">
      <PillBadge icon={Rocket}>How Does It Work?</PillBadge>
      <SectionHeading className="mt-5">
        It&apos;s Pretty <Em>easy</Em>.
      </SectionHeading>

      <div className="mx-auto mt-12 flex max-w-4xl flex-col gap-3 text-left">
        {steps.map((s) => (
          <div
            key={s.n}
            className="flex items-center gap-5 rounded-xl border border-border bg-card px-6 py-5 shadow-soft"
          >
            <s.icon className="size-5 shrink-0 text-foreground" strokeWidth={1.5} />
            <div>
              <span className="font-semibold">{s.n}. {s.title}</span>
              <span className="ml-3 text-muted-foreground">{s.body}</span>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
