"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, GraduationCap } from "lucide-react";
import {
  SectionWrapper,
  PillBadge,
  SectionHeading,
} from "@/components/section-wrapper";
import { cn } from "@/lib/utils";

type Stat = { label: string; value: string; numeric: number; suffix: string };

const data: Record<"before" | "after", { stats: Stat[]; map: string }> = {
  before: {
    stats: [
      { label: "Average Rank", value: "86", numeric: 86, suffix: "" },
      { label: "Market Share", value: "1%", numeric: 1, suffix: "%" },
      { label: "Clicks Per Month", value: "5", numeric: 5, suffix: "" },
      { label: "Clients Per Month", value: "1-2", numeric: 2, suffix: "" },
    ],
    map: "/map-before.png",
  },
  after: {
    stats: [
      { label: "Average Rank", value: "2", numeric: 2, suffix: "" },
      { label: "Market Share", value: "82%", numeric: 82, suffix: "%" },
      { label: "Clicks Per Month", value: "80", numeric: 80, suffix: "" },
      { label: "Clients Per Month", value: "15+", numeric: 15, suffix: "+" },
    ],
    map: "/map-after.png",
  },
};

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<number>(0);

  useEffect(() => {
    ref.current = 0;
    setDisplay(0);
    const duration = 800;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(eased * target);
      setDisplay(value);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [target]);

  return <>{display}{suffix}</>;
}

export function BeforeAfter() {
  const [mode, setMode] = useState<"before" | "after">("before");
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const badgeColor =
    mode === "before" ? "bg-red-700 text-white" : "bg-green-500 text-white";

  return (
    <SectionWrapper className="text-center">
      <PillBadge icon={CheckCircle}>Before / After</PillBadge>
      <SectionHeading className="mt-5">
        The <span className="font-serif font-bold italic">Difference</span>
      </SectionHeading>

      <div ref={ref} className="mt-12 rounded-2xl border border-border bg-card p-5 shadow-soft sm:p-7">
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
          <AnimatePresence mode="wait">
            <motion.div
              key={mode + "-stats"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="text-left"
            >
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
                      <span className={cn("rounded-md px-2.5 py-1 text-sm font-semibold", badgeColor)}>
                        {inView ? <AnimatedNumber target={s.numeric} suffix={s.suffix} /> : "0"}
                      </span>
                    </dd>
                    <dt className="text-sm font-medium">{s.label}</dt>
                  </div>
                ))}
              </dl>
            </motion.div>
          </AnimatePresence>

          {/* Map */}
          <AnimatePresence mode="wait">
            <motion.div
              key={mode + "-map"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-xl"
            >
              <Image
                src={data[mode].map}
                alt={`Map showing ${mode} state`}
                width={600}
                height={500}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
