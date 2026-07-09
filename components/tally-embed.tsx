"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

export function TallyEmbed({
  src,
  title,
  height = 374,
}: {
  src: string;
  title: string;
  height?: number;
}) {
  useEffect(() => {
    window.Tally?.loadEmbeds();
  }, [src]);

  return (
    <>
      <iframe
        data-tally-src={src}
        loading="lazy"
        width="100%"
        height={height}
        title={title}
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
      />
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onLoad={() => window.Tally?.loadEmbeds()}
      />
    </>
  );
}
