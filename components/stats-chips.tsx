"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CalendarX, PhoneCall } from "lucide-react";

const stats = [
  { icon: ShieldCheck, label: "90-Day Top 3 Guarantee" },
  { icon: CalendarX, label: "No Long-Term Contracts" },
  { icon: PhoneCall, label: "Free Strategy Call" },
];

export function StatsChips() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {stats.map((s, i) => (
        <motion.span
          key={s.label}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.3 + i * 0.08 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium shadow-soft"
        >
          <s.icon className="size-4 text-green-500" strokeWidth={1.5} />
          {s.label}
        </motion.span>
      ))}
    </div>
  );
}
