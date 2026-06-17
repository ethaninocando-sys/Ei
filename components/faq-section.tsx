"use client";

import { useState } from "react";
import { Plus, X, HelpCircle } from "lucide-react";
import {
  SectionWrapper,
  PillBadge,
  SectionHeading,
  Em,
} from "@/components/section-wrapper";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What's the difference between SEO and Google Ads?",
    a: "Google Ads keeps you visible only while you keep paying — the moment you stop, you vanish. Local SEO earns you a top organic spot that keeps bringing in leads without an ongoing ad budget.",
  },
  {
    q: "Which businesses do you work with?",
    a: "Local, service-based businesses — dentists, contractors, law firms, med spas and similar — who win most of their customers from their surrounding area.",
  },
  {
    q: "How much time will I need to invest?",
    a: "Very little. After a short onboarding where you give us access to your Google Business Profile, we handle the work and keep you in the loop.",
  },
  {
    q: "What are the contract terms?",
    a: "We keep it simple and flexible. We'll walk you through the exact terms on your free strategy call so there are no surprises.",
  },
  {
    q: "How can we get started?",
    a: "Book a free strategy call. We'll review your market and current rankings and show you exactly how we'd get you into the top 3.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SectionWrapper className="text-center">
      <PillBadge icon={HelpCircle}>FAQs</PillBadge>
      <SectionHeading className="mt-5">
        Frequently asked <Em>questions</Em>
      </SectionHeading>

      <div className="mx-auto mt-12 max-w-3xl space-y-3 text-left">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className={cn(
                "overflow-hidden rounded-xl border bg-card shadow-soft transition-colors",
                isOpen ? "border-foreground" : "border-border",
              )}
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className={cn(
                  "flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium transition-colors",
                  isOpen ? "bg-primary text-primary-foreground" : "bg-card",
                )}
              >
                {f.q}
                <span
                  className={cn(
                    "flex size-6 shrink-0 items-center justify-center rounded-full",
                    isOpen ? "bg-background/15" : "bg-foreground/5",
                  )}
                >
                  {isOpen ? (
                    <X className="size-3.5" />
                  ) : (
                    <Plus className="size-3.5" />
                  )}
                </span>
              </button>
              {isOpen ? (
                <p className="px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
