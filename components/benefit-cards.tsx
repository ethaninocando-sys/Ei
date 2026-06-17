import { Eye, BadgeDollarSign, TrendingUp, Sparkles } from "lucide-react";
import {
  SectionWrapper,
  PillBadge,
  SectionHeading,
  Em,
} from "@/components/section-wrapper";

const benefits = [
  {
    icon: Eye,
    title: "Visibility",
    body: "Most people searching for your service only ever click one of the top 3 results. If you're not there, you're invisible.",
  },
  {
    icon: BadgeDollarSign,
    title: "No ad spend",
    body: "No pay-per-click and no huge monthly ad budgets like Google or Meta Ads. This is organic, earned ranking.",
  },
  {
    icon: TrendingUp,
    title: "Long term",
    body: "Once you're in the top 3 you tend to stay there for years — without any additional monthly cost.",
  },
];

export function BenefitCards() {
  return (
    <SectionWrapper className="text-center">
      <PillBadge icon={Sparkles}>The advantage</PillBadge>
      <SectionHeading className="mt-5">
        But — is this even <Em>worth it</Em>?
      </SectionHeading>

      <div className="mt-12 grid grid-cols-1 gap-6 text-left sm:grid-cols-3">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="rounded-2xl border border-border bg-card p-7 shadow-soft"
          >
            <b.icon className="size-7 text-foreground" strokeWidth={1.5} />
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
