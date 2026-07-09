import type { Metadata } from "next";
import { Send } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { CalEmbed, CalInline } from "@/components/cal-embed";
import { BenefitCards } from "@/components/benefit-cards";
import { BeforeAfter } from "@/components/before-after";
import { HowItWorks } from "@/components/how-it-works";
import { FaqSection } from "@/components/faq-section";
import { TallyEmbed } from "@/components/tally-embed";
import {
  SectionWrapper,
  PillBadge,
  SectionHeading,
  Em,
} from "@/components/section-wrapper";

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
        <HeroSection />

        {/* Booking */}
        <section id="book" className="w-full px-5 sm:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <CalInline />
          </div>
        </section>

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
            <TallyEmbed
              src="https://tally.so/embed/QKylxY?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              title="Send in your application"
              height={374}
            />
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
