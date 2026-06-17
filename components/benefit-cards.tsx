import { Eye, Gift, TrendingUp } from "lucide-react";
import { SectionWrapper, Eyebrow, SectionHeading } from "@/components/section-wrapper";

const benefits = [
  {
    icon: Eye,
    title: "Visibility",
    body: "75% of leads searching for your service click one of the top 3 results. If you're not there, you're invisible.",
  },
  {
    icon: Gift,
    title: "No ad spend",
    body: "No pay-per-click and no huge ad budgets like Google or Meta Ads. This is organic, earned ranking.",
  },
  {
    icon: TrendingUp,
    title: "Long-term",
    body: "Once you're in the top 3 you usually stay there for years — without any extra monthly ad cost.",
  },
];

export function BenefitCards() {
  return (
    <SectionWrapper>
      <Eyebrow>The advantage</Eyebrow>
      <SectionHeading>But — is this even worth it?</SectionHeading>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {benefits.map((b) => (
          <div key={b.title} className="border border-border bg-card p-6">
            <b.icon className="size-8 text-accent" />
            <h3 className="mt-4 text-xl font-bold">{b.title}</h3>
            <p className="mt-2 text-muted-foreground">{b.body}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
