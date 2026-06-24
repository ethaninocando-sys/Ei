"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
    q: "What is the difference between SEO and Google Ads?",
    a: "Google Ads puts you at the top of search results as long as you keep paying. The moment you stop, you disappear. SEO (what we do) gets you ranking organically, meaning Google puts you there because it considers you the most relevant result. Once you're there, you stay there without ongoing ad spend.",
  },
  {
    q: "Which companies do you work with?",
    a: "We work exclusively with local businesses — think dentists, plumbers, lawyers, restaurants, physiotherapists, any business that serves customers in a specific area. If people search for your service + your city on Google, we can help you.",
  },
  {
    q: "How much time will I need to invest?",
    a: "Very little. We handle everything on our end. During onboarding we'll need about 15 minutes of your time to get secure access to your Google Business Profile. After that, we do the work and send you regular updates so you always know where you stand.",
  },
  {
    q: "What are the contract terms?",
    a: "It's 497 dollars per month. No long-term lock-in contracts. You can cancel anytime, though most clients stick around because the results speak for themselves. We guarantee top 3 rankings within 90 days or we keep working for free until you're there.",
  },
  {
    q: "How can we get started?",
    a: "Book a quick strategy call with us using the button on this page. We'll look at your current Google presence together, assess your market, and tell you exactly what it would take to get you into the top 3. No pressure, no obligation.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SectionWrapper className="text-center">
      <PillBadge icon={HelpCircle}>FAQs</PillBadge>
      <SectionHeading className="mt-5">
        Frequently Asked <Em>Questions</Em>
      </SectionHeading>

      <div className="mx-auto mt-12 max-w-3xl space-y-3 text-left">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={i}
              whileHover={!isOpen ? { y: -2, transition: { type: "spring", stiffness: 400, damping: 25 } } : {}}
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
                    isOpen ? "bg-background/20" : "bg-transparent",
                  )}
                >
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-center justify-center"
                  >
                    <Plus className="size-3.5" />
                  </motion.span>
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <p className="px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
