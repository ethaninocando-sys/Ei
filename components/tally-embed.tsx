"use client";

import Script from "next/script";
import { FileText } from "lucide-react";
import { tally } from "@/lib/config";

export function TallyEmbed() {
  if (!tally.applicationFormId) {
    return (
      <div className="flex min-h-[200px] w-full flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-foreground/25 bg-card p-8 text-center">
        <FileText className="size-12 text-foreground/40" />
        <p className="px-6 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">
            Application form
          </span>
          <br />
          Add the Tally form ID in{" "}
          <code className="rounded bg-muted px-1">lib/config.ts</code>
        </p>
      </div>
    );
  }

  return (
    <>
      <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
      <iframe
        data-tally-src={`https://tally.so/embed/${tally.applicationFormId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
        loading="lazy"
        width="100%"
        height="200"
        title="Send in your application"
        className="w-full border-0"
      />
    </>
  );
}
