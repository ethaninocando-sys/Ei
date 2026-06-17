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

  const first_name = get("first_name");
  const last_name = get("last_name");
  const phone = get("phone");
  const email = get("email");
  const industry = get("industry");
  const marketing_spend = get("marketing_spend");
  const help = get("help");

  if (!first_name || !last_name) {
    return { ok: false, error: "Please add your first and last name." };
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
      first_name,
      last_name,
      phone,
      email,
      industry,
      marketing_spend,
      help,
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
    subject: `New application — ${first_name} ${last_name}`,
    html: `
      <div style="font-family:Inter,Arial,sans-serif;color:#000;line-height:1.6">
        <h1 style="font-size:18px">New application</h1>
        <ul>
          <li><strong>Name:</strong> ${first_name} ${last_name}</li>
          <li><strong>Phone:</strong> ${phone || "—"}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Industry:</strong> ${industry || "—"}</li>
          <li><strong>Marketing spend:</strong> ${marketing_spend || "—"}</li>
          <li><strong>Help needed:</strong> ${help || "—"}</li>
        </ul>
      </div>
    `,
  });

  return { ok: true };
}
