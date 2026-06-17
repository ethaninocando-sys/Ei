"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle, GraduationCap } from "lucide-react";
import {
  SectionWrapper,
  PillBadge,
  SectionHeading,
} from "@/components/section-wrapper";
import { cn } from "@/lib/utils";

type Stat = { label: string; value: string };

const data: Record<"before" | "after", { stats: Stat[]; map: string }> = {
  before: {
    stats: [
      { label: "Average Rank", value: "86" },
      { label: "Market Share", value: "1%" },
      { label: "Clicks Per Month", value: "5" },
      { label: "Clients Per Month", value: "1-2" },
    ],
    map: "/map-before.png",
  },
  after: {
    stats: [
      { label: "Average Rank", value: "2" },
      { label: "Market Share", value: "82%" },
      { label: "Clicks Per Month", value: "80" },
      { label: "Clients Per Month", value: "15+" },
    ],
    map: "/map-after.png",
  },
};

export function BeforeAfter() {
  const [mode, setMode] = useState<"before" | "after">("before");

  const badgeColor =
    mode === "before"
      ? "bg-red-700 text-white"
      : "bg-green-500 text-white";

  return (
    <SectionWrapper className="text-center">
      <PillBadge icon={CheckCircle}>Before / After</PillBadge>
      <SectionHeading className="mt-5">
        The <span className="font-serif font-bold italic">Difference</span>
      </SectionHeading>

      <div className="mt-12 rounded-2xl border border-border bg-card p-5 shadow-soft sm:p-7">
        {/* Tabs */}
        <div className="flex items-center gap-2 text-left">
          {(["before", "after"] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              className={cn(
                "rounded-lg border border-border px-5 py-1.5 text-sm font-medium capitalize transition-colors",
                mode === m
                  ? "bg-foreground text-background"
                  : "bg-card text-muted-foreground hover:text-foreground",
              )}
            >
              {m.charAt(0).toUpperCase() + m.slice(1)}
            </button>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Stats */}
          <div className="text-left">
            <div className="flex items-center gap-3 rounded-xl bg-muted/50 p-4">
              <GraduationCap className="size-5 shrink-0" strokeWidth={1.5} />
              <div>
                <p className="font-semibold">Your Company</p>
                <p className="text-sm text-muted-foreground">
                  Alphabet Street 123, 12345 New York
                </p>
              </div>
            </div>
            <dl className="mt-5 space-y-3">
              {data[mode].stats.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-3 rounded-lg border border-border/60 bg-card px-4 py-3"
                >
                  <dd>
                    <span
                      className={cn(
                        "rounded-md px-2.5 py-1 text-sm font-semibold",
                        badgeColor,
                      )}
                    >
                      {s.value}
                    </span>
                  </dd>
                  <dt className="text-sm font-medium">{s.label}</dt>
                </div>
              ))}
            </dl>
          </div>

          {/* Map */}
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src={data[mode].map}
              alt={`Map showing ${mode} state`}
              width={600}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        Illustrative numbers — replace with your own client results.
      </p>
    </SectionWrapper>
  );
}
