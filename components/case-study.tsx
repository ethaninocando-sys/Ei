"use client";

import { motion } from "framer-motion";
import { MapPin, Globe, ListChecks, Briefcase } from "lucide-react";
import {
  SectionWrapper,
  PillBadge,
  SectionHeading,
} from "@/components/section-wrapper";

// Real practice-client project. Ranking stayed the same (he was already
// ranking well) — this is scope of work delivered, not a results claim.
const work = [
  {
    icon: MapPin,
    title: "Google Business Profile",
    body: "Fully audited and optimized his GBP listing top to bottom.",
  },
  {
    icon: Globe,
    title: "SEO-Built Website",
    body: "Built a new website from the ground up with SEO best practices baked in.",
  },
  {
    icon: ListChecks,
    title: "Citations",
    body: "Built out citations across relevant directories to strengthen local trust signals.",
  },
];

export function CaseStudy() {
  return (
    <SectionWrapper className="text-center">
      <PillBadge icon={Briefcase}>Recent Project</PillBadge>
      <SectionHeading className="mt-5">
        A look at <span className="font-serif font-bold italic">our work</span>
      </SectionHeading>

      <motion.div
        className="mt-12 grid grid-cols-1 gap-6 text-left sm:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        transition={{ staggerChildren: 0.1 }}
      >
        {work.map((w, i) => (
          <motion.div
            key={w.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 20 } }}
            className="rounded-2xl border border-border bg-card p-7 shadow-soft"
          >
            <w.icon className="size-7 text-foreground/60" strokeWidth={1.5} />
            <h3 className="mt-5 text-lg font-semibold">{w.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {w.body}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
