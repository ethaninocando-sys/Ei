"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getCalApi } from "@calcom/embed-react";
import { Button } from "@/components/ui/button";
import { cal, siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    (async () => {
      const calApi = await getCalApi({ namespace: "navbar-popup" });
      calApi("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/90 shadow-soft backdrop-blur-sm"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 w-full max-w-5xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt={siteConfig.name} width={120} height={32} priority className="h-8 w-auto" />
          <span className="text-lg font-semibold tracking-tight">{siteConfig.name}</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Button
            type="button"
            variant="cta"
            className="h-9 px-5 text-sm"
            data-cal-namespace="navbar-popup"
            data-cal-link={cal.bookingLink}
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          >
            See if we&apos;re a fit
          </Button>
        </nav>
      </div>
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className={cn("border-t border-border transition-opacity duration-300", scrolled ? "opacity-0" : "opacity-100")} />
      </div>
    </header>
  );
}
