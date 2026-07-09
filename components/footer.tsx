import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-border">
      <div className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Brand + headline */}
          <div>
            <div className="flex items-center gap-2">
              <Image src="/logo.svg" alt={siteConfig.name} width={120} height={32} className="h-8 w-auto" />
              <span className="text-lg font-semibold tracking-tight">{siteConfig.name}</span>
            </div>
            <h2 className="mt-6 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
              Dominate your local market.
            </h2>
            <p className="mt-3 text-muted-foreground">Built for local businesses.</p>
          </div>

          {/* Pages */}
          <div>
            <p className="text-sm font-semibold">Pages</p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground">Home</Link>
              </li>
              <li>
                <Link href="/local-seo" className="hover:text-foreground">Local SEO</Link>
              </li>
              <li>
                <Link href="/local-seo#apply" className="hover:text-foreground">Book a call</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-sm font-semibold">Legal</p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/terms" className="hover:text-foreground">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">
                  ethan(at)ei-conversion.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-6 text-xs text-muted-foreground">
          © {year} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
