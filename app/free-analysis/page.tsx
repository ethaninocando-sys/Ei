import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnalysisForm } from "@/components/analysis-form";
import { PillBadge } from "@/components/section-wrapper";

export const metadata: Metadata = {
  title: "Get your profile analyzed | EI Conversion",
  robots: { index: false },
};

export default function FreeAnalysisPage() {
  return (
    <>
      <Navbar />
      <main className="w-full px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: pitch */}
          <div>
            <PillBadge>Free stuff</PillBadge>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl">
              Get your profile analyzed
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Fill out the form and we&apos;ll record your personalized analysis
              with the exact things that need to happen so you can rank in the
              top 3 within your area.
            </p>
            <p className="mt-6 max-w-md text-muted-foreground">
              No costs, no obligations, no annoying sales pitch. Guaranteed.
            </p>
          </div>

          {/* Right: form */}
          <div>
            <AnalysisForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
