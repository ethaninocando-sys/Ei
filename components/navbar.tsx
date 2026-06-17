import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="text-lg font-bold tracking-tight">
          {siteConfig.name}
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/local-seo"
            className="hidden text-sm font-medium text-foreground/80 hover:text-accent sm:block"
          >
            Local SEO
          </Link>
          <Button asChild variant="cta" size="cta" className="h-10 px-6 text-sm">
            <Link href="/local-seo#book">Book a Call</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
