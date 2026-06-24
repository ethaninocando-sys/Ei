"use client";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { Button } from "@/components/ui/button";

export function CalEmbed() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "website" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <Button
      variant="cta"
      size="cta"
      data-cal-namespace="website"
      data-cal-link="thic-435i-g4ubsl/website"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
    >
      Book a Free Strategy Call
    </Button>
  );
}
