"use client";

import Script from "next/script";
import { PlayCircle } from "lucide-react";

export function VideoEmbed({
  mediaId,
  label,
}: {
  mediaId: string;
  label: string;
}) {
  if (!mediaId) {
    return (
      <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-foreground/25 bg-card text-center">
        <PlayCircle className="size-12 text-foreground/40" />
        <p className="px-6 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{label}</span>
          <br />
          Add the Wistia media ID in{" "}
          <code className="rounded bg-muted px-1">lib/config.ts</code>
        </p>
      </div>
    );
  }

  return (
    <>
      <Script src="https://fast.wistia.com/assets/external/E-v1.js" strategy="afterInteractive" />
      <div className="w-full max-w-[440px]">
        <div
          className={`wistia_embed wistia_async_${mediaId} videoFoam=true`}
          style={{ position: "relative", width: "100%" }}
        />
      </div>
    </>
  );
}
