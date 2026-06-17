"use server";

import { createClient } from "@/lib/supabase/server";
import { sendEmail } from "@/lib/email";
import { siteConfig } from "@/lib/config";

export type ApplicationResult = { ok: boolean; error?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * /local-seo application form. Saves the lead and emails the team a notification
 * so they can follow up. DB write is the source of truth; email is best-effort.
 */
export async function submitApplication(
  _prev: ApplicationResult,
  formData: FormData,
): Promise<ApplicationResult> {
  const get = (k: string) => String(formData.get(k) ?? "").trim();

  const name = get("name");
  const email = get("email");
  const business_name = get("business_name");
  const website = get("website");
  const current_ranking = get("current_ranking");
  const monthly_revenue = get("monthly_revenue");
  const goals = get("goals");

  if (!name || !business_name) {
    return { ok: false, error: "Please add your name and business name." };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return { ok: false, error: "The site isn't connected to a database yet." };
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase.from("applications").insert({
      name,
      email,
      business_name,
      website,
      current_ranking,
      monthly_revenue,
      goals,
    });

    if (error) {
      console.error("[submitApplication] insert error:", error);
      return { ok: false, error: "Something went wrong. Please try again." };
    }
  } catch (err) {
    console.error("[submitApplication] unexpected error:", err);
    return { ok: false, error: "Something went wrong. Please try again." };
  }

  // Notify the team. Reply-to is the applicant so you can respond directly.
  await sendEmail({
    to: process.env.APPLICATIONS_TO ?? siteConfig.email,
    replyTo: email,
    subject: `New application — ${business_name}`,
    html: `
      <div style="font-family:Inter,Arial,sans-serif;color:#000;line-height:1.6">
        <h1 style="font-size:18px">New application</h1>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Business:</strong> ${business_name}</li>
          <li><strong>Website:</strong> ${website || "—"}</li>
          <li><strong>Current ranking:</strong> ${current_ranking || "—"}</li>
          <li><strong>Monthly revenue:</strong> ${monthly_revenue || "—"}</li>
          <li><strong>Goals:</strong> ${goals || "—"}</li>
        </ul>
      </div>
    `,
  });

  return { ok: true };
}
