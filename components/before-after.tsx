"use client";

import { useState } from "react";
import { ArrowLeftRight, MapPin } from "lucide-react";
import {
  SectionWrapper,
  PillBadge,
  SectionHeading,
  Em,
} from "@/components/section-wrapper";
import { cn } from "@/lib/utils";

type Stat = { label: string; value: string };

const data: Record<"before" | "after", { stats: Stat[] }> = {
  before: {
    stats: [
      { label: "Average rank", value: "#86" },
      { label: "Market share", value: "1%" },
      { label: "Clicks per month", value: "5" },
      { label: "New clients / month", value: "1–2" },
    ],
  },
  after: {
    stats: [
      { label: "Average rank", value: "Top 3" },
      { label: "Market share", value: "30%+" },
      { label: "Clicks per month", value: "250+" },
      { label: "New clients / month", value: "10+" },
    ],
  },
};

/**
 * Stylized ranking-grid "map". A grid of pins, mostly low-rank (dark/empty) in
 * the Before state and high-rank (filled) in the After state — mimicking the
 * reference site's local grid map without any map dependency.
 */
function PinGrid({ mode }: { mode: "before" | "after" }) {
  const cells = Array.from({ length: 64 });
  return (
    <div className="grid grid-cols-8 gap-1.5 rounded-xl bg-foreground/5 p-4">
      {cells.map((_, i) => {
        // After: nearly all filled. Before: only a sparse few.
        const filled = mode === "after" ? i % 7 !== 0 : i % 9 === 0;
        return (
          <div
            key={i}
            className={cn(
              "flex aspect-square items-center justify-center rounded-full text-[8px] font-semibold",
              filled
                ? "bg-foreground text-background"
                : "bg-foreground/10 text-transparent",
            )}
          >
            {filled ? "1" : "·"}
          </div>
        );
      })}
    </div>
  );
}

export function BeforeAfter() {
  const [mode, setMode] = useState<"before" | "after">("after");

  return (
    <SectionWrapper className="text-center">
      <PillBadge icon={ArrowLeftRight}>Before / after</PillBadge>
      <SectionHeading className="mt-5">
        The <Em>difference</Em>
      </SectionHeading>

      <div className="mt-12 rounded-2xl border border-border bg-card p-5 shadow-soft sm:p-7">
        {/* Tabs */}
        <div className="inline-flex rounded-full border border-border bg-background p-1">
          {(["before", "after"] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              className={cn(
                "rounded-full px-5 py-1.5 text-sm font-medium capitalize transition-colors",
                mode === m
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {m}
            </button>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Stats */}
          <div className="text-left">
            <div className="flex items-center gap-2 rounded-xl border border-border bg-background p-4">
              <MapPin className="size-5 shrink-0" strokeWidth={1.5} />
              <div>
                <p className="font-semibold">Your business</p>
                <p className="text-sm text-muted-foreground">
                  123 Main Street, Your City
                </p>
              </div>
            </div>
            <dl className="mt-4 space-y-3">
              {data[mode].stats.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center justify-between border-b border-border/60 pb-3"
                >
                  <dt className="text-muted-foreground">{s.label}</dt>
                  <dd>
                    <span className="rounded-md bg-foreground px-2.5 py-1 text-sm font-semibold text-background">
                      {s.value}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Map */}
          <PinGrid mode={mode} />
        </div>
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        Illustrative numbers — replace with your own client results.
      </p>
    </SectionWrapper>
  );
}
