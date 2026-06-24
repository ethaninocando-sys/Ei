"use client";
import { useEffect, type ReactNode } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Button } from "@/components/ui/button";

export function CalEmbed({ children = "Book a Free Strategy Call" }: { children?: ReactNode }) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "popup" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <Button
      type="button"
      variant="cta"
      size="cta"
      data-cal-namespace="popup"
      data-cal-link="thic-435i-g4ubsl/website"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
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
    </Button>
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
    <div className="w-full overflow-x-hidden">
      <Cal
        namespace="inline"
        calLink="thic-435i-g4ubsl/website"
        style={{ width: "100%" }}
        config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
      />
    </div>
  );
}
