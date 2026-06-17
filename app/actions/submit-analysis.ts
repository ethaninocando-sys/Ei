"use server";

import { createClient } from "@/lib/supabase/server";
import { sendEmail } from "@/lib/email";
import { siteConfig } from "@/lib/config";

export type AnalysisResult = { ok: boolean; error?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * /free-analysis "Get your profile analyzed" form. Saves the request and emails
 * the team. DB write is the source of truth; the email is best-effort.
 */
export async function submitAnalysis(
  _prev: AnalysisResult,
  formData: FormData,
): Promise<AnalysisResult> {
  const get = (k: string) => String(formData.get(k) ?? "").trim();

  const full_name = get("full_name");
  const email = get("email");
  const phone = get("phone");
  const website = get("website");
  const company_name = get("company_name");
  const google_maps_url = get("google_maps_url");
  const timeline = get("timeline");

  if (!full_name || !company_name) {
    return { ok: false, error: "Please add your name and company name." };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return { ok: false, error: "The site isn't connected to a database yet." };
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase.from("analyses").insert({
      full_name,
      email,
      phone,
      website,
      company_name,
      google_maps_url,
      timeline,
    });

    if (error) {
      console.error("[submitAnalysis] insert error:", error);
      return { ok: false, error: "Something went wrong. Please try again." };
    }
  } catch (err) {
    console.error("[submitAnalysis] unexpected error:", err);
    return { ok: false, error: "Something went wrong. Please try again." };
  }

  await sendEmail({
    to: process.env.APPLICATIONS_TO ?? siteConfig.email,
    replyTo: email,
    subject: `New profile analysis request — ${company_name}`,
    html: `
      <div style="font-family:Inter,Arial,sans-serif;color:#000;line-height:1.6">
        <h1 style="font-size:18px">New profile analysis request</h1>
        <ul>
          <li><strong>Name:</strong> ${full_name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone || "—"}</li>
          <li><strong>Company:</strong> ${company_name}</li>
          <li><strong>Website:</strong> ${website || "—"}</li>
          <li><strong>Google Maps URL:</strong> ${google_maps_url || "—"}</li>
          <li><strong>Timeline:</strong> ${timeline || "—"}</li>
        </ul>
      </div>
    `,
  });

  return { ok: true };
}
