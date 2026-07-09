import { Sparkles } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { VideoEmbed } from "@/components/video-embed";
import { EmailForm } from "@/components/email-form";
import { CaseStudy } from "@/components/case-study";
import {
  SectionWrapper,
  PillBadge,
  SectionHeading,
  Em,
} from "@/components/section-wrapper";
import { wistia } from "@/lib/config";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero — two columns: copy + form left, video right */}
        <SectionWrapper className="py-14 sm:py-20">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
                Is your business invisible on Google?
              </h1>
              <p className="mt-5 max-w-md text-lg text-muted-foreground">
                Watch this short video to learn why you&apos;re not ranking in
                the top 3.
              </p>
              <p className="mt-5 max-w-md font-medium">
                Sign up below to get three free tips you can put to work today and
                start climbing.
              </p>
              <div className="mt-6">
                <EmailForm align="start" cta="Subscribe" />
              </div>
            </div>

            <VideoEmbed
              mediaId={wistia.homepageHookVideoId}
              label="Homepage hook video (2–3 min)"
            />
          </div>
        </SectionWrapper>

        <CaseStudy />

        {/* Lead magnet */}
        <SectionWrapper className="text-center">
          <PillBadge icon={Sparkles}>Free stuff</PillBadge>
          <SectionHeading className="mt-5">
            3 tips to rank <Em>higher</Em> on Google
          </SectionHeading>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Get a free video showing the first three things we do when we start
            working with a local business to get them ranking in the top 3. No
            technical know-how needed — enter your email and you&apos;ll get
            instant access.
          </p>
          <div className="mt-8">
            <EmailForm cta="Get 3 free tips" />
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
