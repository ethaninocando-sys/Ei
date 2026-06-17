import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { VideoEmbed } from "@/components/video-embed";
import { CalEmbed } from "@/components/cal-embed";
import { BenefitCards } from "@/components/benefit-cards";
import { BeforeAfter } from "@/components/before-after";
import { HowItWorks } from "@/components/how-it-works";
import { FaqSection } from "@/components/faq-section";
import { ApplicationForm } from "@/components/application-form";
import { Button } from "@/components/ui/button";
import { SectionWrapper, Eyebrow, SectionHeading } from "@/components/section-wrapper";
import { wistia } from "@/lib/config";

export const metadata: Metadata = {
  title: "Local SEO | EI Conversion",
  description:
    "The only two things you need to know about local SEO — and how EI Conversion gets you into the top 3 on Google.",
};

const stats = [
  { value: "32+", label: "Satisfied clients" },
  { value: "4+", label: "Years of experience" },
  { value: "Fast", label: "Results that compound" },
];

export default function LocalSeoPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero + sales video */}
        <SectionWrapper className="pt-12 text-center sm:pt-20">
          <div className="animate-fade-up">
            <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
              The <span className="text-accent">only two things</span> you need to
              know about local SEO
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              Watch this and you&apos;ll understand exactly how we get local
              businesses ranking in the top 3 — and staying there.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <VideoEmbed
              mediaId={wistia.salesVideoId}
              label="Sales / pitch video (~7 min)"
            />
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-accent">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Booking */}
        <SectionWrapper id="book" className="pt-0">
          <Eyebrow>Book a time</Eyebrow>
          <SectionHeading>Grab a free strategy call</SectionHeading>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Pick a slot that works for you. We&apos;ll review your market and
            current rankings and show you exactly how we&apos;d get you into the
            top 3.
          </p>
          <div className="mt-8">
            <CalEmbed />
          </div>
        </SectionWrapper>

        <BenefitCards />
        <BeforeAfter />
        <HowItWorks />
        <FaqSection />

        {/* Bottom CTA */}
        <SectionWrapper className="text-center">
          <Eyebrow>Free stuff</Eyebrow>
          <SectionHeading>Book your free strategy call</SectionHeading>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            If this sounds like what your business needs, let&apos;s talk. We&apos;ll
            walk you through exactly how we&apos;d get you ranking in the top 3.
          </p>
          <div className="mt-8">
            <Button asChild variant="cta" size="cta">
              <Link href="#book">Book strategy call</Link>
            </Button>
          </div>
        </SectionWrapper>

        {/* Application form */}
        <SectionWrapper className="pt-0">
          <div className="mx-auto max-w-xl">
            <Eyebrow>Apply now</Eyebrow>
            <SectionHeading>Or send in your application</SectionHeading>
            <p className="mt-3 text-muted-foreground">
              Prefer to apply? Tell us about your business. If we think we&apos;re a
              good fit, we&apos;ll reach back out to schedule a call.
            </p>
            <div className="mt-8">
              <ApplicationForm />
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
