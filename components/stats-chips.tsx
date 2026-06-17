import { CheckCircle2, Clock, Zap } from "lucide-react";

// Placeholder proof stats — edit the labels/numbers freely.
const stats = [
  { icon: CheckCircle2, label: "Satisfied Clients" },
  { icon: Clock, label: "Years of Experience" },
  { icon: Zap, label: "Lightning Fast Results" },
];

export function StatsChips() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {stats.map((s) => (
        <span
          key={s.label}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium shadow-soft"
        >
          <s.icon className="size-4 text-green-500" strokeWidth={1.5} />
          {s.label}
        </span>
      ))}
    </div>
  );
}
