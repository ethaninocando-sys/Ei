import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { VideoEmbed } from "@/components/video-embed";
import { EmailForm } from "@/components/email-form";
import { WorkingWith } from "@/components/working-with";
import { TeamSection } from "@/components/team-section";
import { SectionWrapper, Eyebrow, SectionHeading } from "@/components/section-wrapper";
import { wistia } from "@/lib/config";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <SectionWrapper className="pt-12 text-center sm:pt-20">
          <div className="animate-fade-up">
            <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
              Is your business <span className="text-accent">invisible</span> on
              Google?
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              Watch this short video to learn why you&apos;re not ranking in the
              top 3 — and the first three things to fix today.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <VideoEmbed
              mediaId={wistia.homepageHookVideoId}
              label="Homepage hook video (2–3 min)"
            />
          </div>

          <div className="mt-10">
            <p className="mb-4 font-semibold">
              Sign up to get 3 FREE tips you can use today ⬇️
            </p>
            <EmailForm />
          </div>
        </SectionWrapper>

        <WorkingWith />

        {/* Lead magnet repeat */}
        <SectionWrapper className="text-center">
          <Eyebrow>Free stuff</Eyebrow>
          <SectionHeading>3 tips to rank higher on Google</SectionHeading>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Get a free video showing the first three things we do when we start
            working with a local business to get them ranking in the top 3. No
            technical know-how needed — enter your email for instant access.
          </p>
          <div className="mt-8">
            <EmailForm />
          </div>
        </SectionWrapper>

        <TeamSection />
      </main>
      <Footer />
    </>
  );
}
