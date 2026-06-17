"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SectionWrapper, Eyebrow, SectionHeading } from "@/components/section-wrapper";

const faqs = [
  {
    q: "What's the difference between SEO and Google Ads?",
    a: "Google Ads charges you every time someone clicks, and the moment you stop paying you disappear. Local SEO earns you a top organic spot that keeps sending leads without an ongoing ad budget.",
  },
  {
    q: "Which companies do you work with?",
    a: "Local, service-based businesses — dentists, contractors, law firms, med spas and similar — who get most of their customers from their local area.",
  },
  {
    q: "How much time will I need to invest?",
    a: "Very little. After a short onboarding where you give us access to your Google Business Profile, we handle the work and keep you updated.",
  },
  {
    q: "What are the contract terms?",
    a: "We keep it simple and flexible. We'll cover the exact terms on your free strategy call so there are no surprises.",
  },
  {
    q: "How can we get started?",
    a: "Book a free strategy call. We'll review your market and rankings and show you exactly how we'd get you into the top 3.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SectionWrapper>
      <Eyebrow>FAQs</Eyebrow>
      <SectionHeading>Frequently asked questions</SectionHeading>
      <div className="mt-10 divide-y divide-border border border-border bg-card">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-semibold"
              >
                {f.q}
                {isOpen ? (
                  <Minus className="size-5 shrink-0 text-accent" />
                ) : (
                  <Plus className="size-5 shrink-0 text-accent" />
                )}
              </button>
              {isOpen ? (
                <p className="px-5 pb-5 text-muted-foreground">{f.a}</p>
              ) : null}
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
