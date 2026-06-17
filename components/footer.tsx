import Link from "next/link";
import { siteConfig } from "@/lib/config";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-border">
      <div className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {/* Brand + headline */}
          <div>
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-md bg-primary text-[13px] font-bold text-primary-foreground">
                Ei
              </span>
              <span className="text-lg font-semibold tracking-tight">
                {siteConfig.name}
              </span>
            </div>
            <h2 className="mt-6 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
              Dominate your local market.
            </h2>
            <p className="mt-3 text-muted-foreground">Built for local businesses.</p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:justify-items-end">
            <div>
              <p className="text-sm font-semibold">Pages</p>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link href="/" className="hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/local-seo" className="hover:text-foreground">
                    Local SEO
                  </Link>
                </li>
                <li>
                  <Link href="/local-seo#book" className="hover:text-foreground">
                    Book a call
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold">Contact</p>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-foreground"
                  >
                    {siteConfig.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-6 text-xs text-muted-foreground">
          © {year} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
