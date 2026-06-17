import type { Metadata } from "next";
import Link from "next/link";
import { CalendarClock, Send } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { VideoEmbed } from "@/components/video-embed";
import { StatsChips } from "@/components/stats-chips";
import { CalEmbed } from "@/components/cal-embed";
import { BenefitCards } from "@/components/benefit-cards";
import { BeforeAfter } from "@/components/before-after";
import { HowItWorks } from "@/components/how-it-works";
import { FaqSection } from "@/components/faq-section";
import { ApplicationForm } from "@/components/application-form";
import { Button } from "@/components/ui/button";
import {
  SectionWrapper,
  PillBadge,
  SectionHeading,
  Em,
} from "@/components/section-wrapper";
import { wistia } from "@/lib/config";

export const metadata: Metadata = {
  title: "Local SEO | EI Conversion",
  description:
    "The only two things you need to know about local SEO — and how EI Conversion gets you into the top 3 on Google.",
};

export default function LocalSeoPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero — centered, video below */}
        <SectionWrapper className="py-14 text-center sm:py-20">
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            The only two things you need to know about local SEO
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            Watch this and you&apos;ll understand exactly how we get local
            businesses ranking in the top 3 — and staying there.
          </p>

          <div className="mx-auto mt-10 max-w-3xl">
            <VideoEmbed
              mediaId={wistia.salesVideoId}
              label="Sales / pitch video (~7 min)"
            />
          </div>

          <div className="mt-8">
            <StatsChips />
          </div>
        </SectionWrapper>

        {/* Booking */}
        <SectionWrapper id="book" className="py-0 text-center">
          <PillBadge icon={CalendarClock}>Book a time</PillBadge>
          <SectionHeading className="mt-5">
            Grab a <Em>free</Em> strategy call
          </SectionHeading>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Pick a slot that works for you. We&apos;ll review your market and
            current rankings and show you exactly how we&apos;d get you into the
            top 3.
          </p>
          <div className="mx-auto mt-10 max-w-3xl">
            <CalEmbed />
          </div>
        </SectionWrapper>

        <BenefitCards />
        <BeforeAfter />
        <HowItWorks />
        <FaqSection />

        {/* Bottom CTA */}
        <SectionWrapper className="text-center">
          <PillBadge icon={Send}>Free stuff</PillBadge>
          <SectionHeading className="mt-5">
            Book your <Em>free</Em> strategy call
          </SectionHeading>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            If this sounds like what your business needs, let&apos;s talk.
            We&apos;ll walk you through exactly how we&apos;d get you ranking in
            the top 3.
          </p>
          <div className="mt-8">
            <Button asChild variant="cta" size="cta">
              <Link href="#book">Book strategy call</Link>
            </Button>
          </div>
        </SectionWrapper>

        {/* Application */}
        <SectionWrapper className="pt-0">
          <div className="mx-auto max-w-xl text-center">
            <PillBadge>Apply now</PillBadge>
            <SectionHeading className="mt-5">
              Or send in your <Em>application</Em>
            </SectionHeading>
            <p className="mt-5 text-muted-foreground">
              Prefer to apply? Tell us about your business. If we think
              we&apos;re a good fit, we&apos;ll reach back out to schedule a
              call.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-xl">
            <ApplicationForm />
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
