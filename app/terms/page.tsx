import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Terms of Service | EI Conversion",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-2xl px-5 py-16 sm:px-8">
        <h1 className="text-5xl font-bold tracking-tight">Terms of Service</h1>

        <section className="mt-12">
          <h2 className="text-2xl font-bold uppercase tracking-wide">Service Agreement</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            This agreement is made between you (the client) and EI Conversion (hereinafter &quot;we&quot;, &quot;us&quot; or &quot;our&quot;). By agreeing to this document, you agree to the following terms.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Our Offer</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We will optimize your Google Business Profile with the goal of achieving a top 3 ranking in Google Maps for your target area [Location] and your main keyword within 90 days.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Scope of Services:</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-muted-foreground">
            <li>Complete Google Business Profile audit and optimization</li>
            <li>Optional website build with SEO</li>
            <li>Building a strategic review generation system</li>
            <li>Weekly post planning including content strategy</li>
            <li>Competitive analysis and clear positioning in the local market</li>
            <li>Weekly ranking reports and progress updates</li>
            <li>Ongoing support, optimization and adjustments throughout the 90 days</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">What we need from you</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We need access to your Google Business Profile and your website. Of course, we will notify you before making any major changes. Once payment is completed, we will send you detailed instructions on how to provide us with secure access to everything we need.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold uppercase tracking-wide">Guarantee</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Should you not achieve a top 3/first page ranking (whichever package applies) in Google Maps for your main keyword in your target area within 90 days, we will stop your billing period until we have reached that goal. From that point onwards, billing will continue starting from the next billing cycle.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold uppercase tracking-wide">Exclusivity</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            During our collaboration, we commit to not serving any other businesses from your industry in the same target area.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold uppercase tracking-wide">Next Steps</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            After agreement and signing, you will receive an invoice with the above-mentioned price.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">Payment possible via:</p>
          <ul className="mt-2 list-disc space-y-2 pl-5 leading-relaxed text-muted-foreground">
            <li>Bank transfer / SEPA</li>
            <li>PayPal / Apple Pay</li>
            <li>All major credit cards</li>
          </ul>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Within 24 hours after payment receipt, you will receive an onboarding email with all further steps. The 90-day period begins as soon as we receive access to the previously mentioned items.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
