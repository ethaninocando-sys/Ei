import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";

export function Navbar() {
  return (
    <header className="w-full">
      <div className="mx-auto flex h-20 w-full max-w-5xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-md bg-primary text-[13px] font-bold text-primary-foreground">
            Ei
          </span>
          <span className="text-lg font-semibold tracking-tight">
            {siteConfig.name}
          </span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/local-seo"
            className="hidden text-sm font-medium text-foreground/70 hover:text-foreground sm:block"
          >
            Local SEO
          </Link>
          <Button asChild variant="cta" className="h-9 px-5 text-sm">
            <Link href="/local-seo#book">Book a Call</Link>
          </Button>
        </nav>
      </div>
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="border-t border-border" />
      </div>
    </header>
  );
}
