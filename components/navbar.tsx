import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";

export function Navbar() {
  return (
    <header className="w-full">
      <div className="mx-auto flex h-20 w-full max-w-5xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt={siteConfig.name} width={120} height={32} priority className="h-8 w-auto" />
          <span className="text-lg font-semibold tracking-tight">{siteConfig.name}</span>
        </Link>
        <nav className="flex items-center gap-6">
<Button asChild variant="cta" className="h-9 px-5 text-sm">
            <Link href="/#apply">See if we're a fit</Link>
          </Button>
        </nav>
      </div>
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="border-t border-border" />
      </div>
    </header>
  );
}
