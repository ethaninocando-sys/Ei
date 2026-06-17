import { Eye, CreditCard, ClockArrowUp, CheckCircle } from "lucide-react";
import {
  SectionWrapper,
  PillBadge,
  SectionHeading,
} from "@/components/section-wrapper";

const benefits = [
  {
    icon: Eye,
    title: "Visibility",
    body: "75% of all leads who are searching for your services go to the top 3 results. If you're not there, you're invisible.",
  },
  {
    icon: CreditCard,
    title: "Free",
    body: "No pay per click or huge ad budgets as with running Google Ads, Meta Ads or alike.",
  },
  {
    icon: ClockArrowUp,
    title: "Long Term Strategy",
    body: "As soon as you're in the top 3, you'll usually stay there for years. Without any additional monthly costs.",
  },
];

export function BenefitCards() {
  return (
    <SectionWrapper className="text-center">
      <PillBadge icon={CheckCircle}>The Advantage</PillBadge>
      <SectionHeading className="mt-5">
        <span className="font-serif font-bold italic">But,</span> Is This Even Worth It?
      </SectionHeading>

      <div className="mt-12 grid grid-cols-1 gap-6 text-left sm:grid-cols-3">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="rounded-2xl border border-border bg-card p-7 shadow-soft"
          >
            <b.icon className="size-7 text-indigo-500" strokeWidth={1.5} />
            <h3 className="mt-5 text-lg font-semibold">{b.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {b.body}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
