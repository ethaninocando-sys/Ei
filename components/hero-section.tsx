"use client";

import { motion } from "framer-motion";
import { VideoEmbed } from "@/components/video-embed";
import { StatsChips } from "@/components/stats-chips";
import { wistia } from "@/lib/config";

export function HeroSection() {
  return (
    <section className="w-full px-5 py-14 text-center sm:px-8 sm:py-20">
      <div className="mx-auto w-full max-w-5xl">
        <motion.h1
          className="mx-auto max-w-3xl text-4xl font-normal leading-[1.05] tracking-tight sm:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="font-bold">The ONLY two things</span> you need to know about marketing
        </motion.h1>

        <motion.div
          className="mx-auto mt-10 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
        >
          <VideoEmbed
            mediaId={wistia.salesVideoId}
            label="Sales / pitch video (~7 min)"
          />
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.35 }}
        >
          <StatsChips />
        </motion.div>
      </div>
    </section>
  );
}
