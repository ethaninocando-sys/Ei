import type { Metadata } from "next";
import { Send } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { VideoEmbed } from "@/components/video-embed";
import { StatsChips } from "@/components/stats-chips";
import { CalEmbed, CalInline } from "@/components/cal-embed";
import { BenefitCards } from "@/components/benefit-cards";
import { BeforeAfter } from "@/components/before-after";
import { HowItWorks } from "@/components/how-it-works";
import { FaqSection } from "@/components/faq-section";
import { ApplicationForm } from "@/components/application-form";
import {
  SectionWrapper,
  PillBadge,
  SectionHeading,
  Em,
} from "@/components/section-wrapper";
import { wistia } from "@/lib/config";

export const metadata: Metadata = {
  title: "EI Conversion | Local SEO",
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
          <h1 className="mx-auto max-w-3xl text-4xl font-normal leading-[1.05] tracking-tight sm:text-6xl">
            <span className="font-bold">The ONLY two things</span> you need to know about marketing
          </h1>

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
        <SectionWrapper id="book" className="py-0">
          <CalInline />
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
            <CalEmbed>Book strategy call</CalEmbed>
          </div>
        </SectionWrapper>

        {/* Application */}
        <SectionWrapper id="apply" className="pt-0">
          <div className="mx-auto max-w-xl text-center">
            <PillBadge>Apply now</PillBadge>
            <SectionHeading className="mt-5">
              Send in your <Em>application</Em>
            </SectionHeading>
            <p className="mt-5 text-muted-foreground">
              If we think we would be a good fit, we will reach back out and
              schedule a call with you.
            </p>
            <div className="mt-6">
              <CalEmbed />
            </div>
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
