import type { Metadata } from "next";
import Link from "next/link";
import { MailCheck } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Check your inbox | EI Conversion",
  robots: { index: false },
};

export default function FreeAnalysisPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[70vh] items-center justify-center px-5 py-20 text-center">
        <div className="max-w-md animate-fade-up">
          <MailCheck className="mx-auto size-14 text-accent" />
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Check your inbox
          </h1>
          <p className="mt-4 text-muted-foreground">
            Your 3 free tips are on the way. If you don&apos;t see the email in a
            minute or two, check your spam folder.
          </p>
          <div className="mt-8">
            <p className="mb-4 font-semibold">Ready to go further?</p>
            <Button asChild variant="cta" size="cta">
              <Link href="/local-seo#book">Book a free strategy call</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
