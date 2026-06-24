"use client";
import { useEffect, type ReactNode } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Button } from "@/components/ui/button";

async function initCal() {
  const cal = await getCalApi({ namespace: "website" });
  cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
}

export function CalEmbed({ children = "Book a Free Strategy Call" }: { children?: ReactNode }) {
  useEffect(() => { initCal(); }, []);

  return (
    <Button
      variant="cta"
      size="cta"
      data-cal-namespace="website"
      data-cal-link="thic-435i-g4ubsl/website"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
    >
      {children}
    </Button>
  );
}

export function CalInline() {
  useEffect(() => { initCal(); }, []);

  return (
    <Cal
      namespace="website"
      calLink="thic-435i-g4ubsl/website"
      style={{ width: "100%", overflow: "hidden" }}
      config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
    />
  );
}
