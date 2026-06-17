import { Rocket } from "lucide-react";
import {
  SectionWrapper,
  PillBadge,
  SectionHeading,
  Em,
} from "@/components/section-wrapper";

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
    <SectionWrapper className="text-center">
      <PillBadge icon={Rocket}>How does it work?</PillBadge>
      <SectionHeading className="mt-5">
        It&apos;s pretty <Em>easy</Em>.
      </SectionHeading>

      <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-3 text-left">
        {steps.map((s) => (
          <div
            key={s.n}
            className="flex items-center gap-5 rounded-xl border border-border bg-card px-6 py-5 shadow-soft"
          >
            <span className="text-lg font-semibold text-muted-foreground">
              {s.n}
            </span>
            <div>
              <span className="font-semibold">{s.title}</span>
              <span className="text-muted-foreground"> — {s.body}</span>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
