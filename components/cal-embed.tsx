"use client";
import { useEffect, type ReactNode } from "react";
import { motion } from "framer-motion";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Button } from "@/components/ui/button";

const MotionButton = motion(Button);

export function CalEmbed({ children = "Book a Free Strategy Call" }: { children?: ReactNode }) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "popup" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <MotionButton
      type="button"
      variant="cta"
      size="cta"
      data-cal-namespace="popup"
      data-cal-link="thic-435i-g4ubsl/website"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      onClick={() => {
        const y = window.scrollY;
        requestAnimationFrame(() =>
          requestAnimationFrame(() =>
            window.scrollTo({ top: y, behavior: "instant" })
          )
        );
      }}
    >
      {children}
    </MotionButton>
  );
}

export function CalInline() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "inline" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <div className="w-full">
      <Cal
        namespace="inline"
        calLink="thic-435i-g4ubsl/website"
        style={{ width: "100%" }}
        config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
      />
    </div>
  );
}
