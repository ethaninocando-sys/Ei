import Link from "next/link";
import { siteConfig } from "@/lib/config";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-border/60">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-5 py-10 sm:flex-row sm:px-8">
        <div className="text-center sm:text-left">
          <p className="font-bold tracking-tight">{siteConfig.name}</p>
          <p className="text-sm text-muted-foreground">{siteConfig.tagline}</p>
        </div>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-accent">
            Home
          </Link>
          <Link href="/local-seo" className="hover:text-accent">
            Local SEO
          </Link>
          <a
            href={`mailto:${siteConfig.email}`}
            className="hover:text-accent"
          >
            Contact
          </a>
        </nav>
      </div>
      <div className="border-t border-border/40 py-4 text-center text-xs text-muted-foreground">
        © {year} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
