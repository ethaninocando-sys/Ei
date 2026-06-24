"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, Zap } from "lucide-react";

const stats = [
  { icon: CheckCircle2, label: "Satisfied Clients" },
  { icon: Clock, label: "Years of Experience" },
  { icon: Zap, label: "Lightning Fast Results" },
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
