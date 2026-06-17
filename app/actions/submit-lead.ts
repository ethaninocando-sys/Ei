"use server";

import { createClient } from "@/lib/supabase/server";
import { sendEmail } from "@/lib/email";
import { siteConfig } from "@/lib/config";

export type LeadResult = { ok: boolean; error?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Homepage lead magnet: capture an email, store it, and send the "3 free tips".
 * Storing the lead is the source of truth; the email is best-effort.
 */
export async function submitLead(_prev: LeadResult, formData: FormData): Promise<LeadResult> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();

  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return { ok: false, error: "The site isn't connected to a database yet." };
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase
      .from("leads")
      // ON CONFLICT DO NOTHING — only needs an INSERT policy under RLS.
      .upsert({ email }, { onConflict: "email", ignoreDuplicates: true });

    if (error) {
      console.error("[submitLead] insert error:", error);
      return { ok: false, error: "Something went wrong. Please try again." };
    }
  } catch (err) {
    console.error("[submitLead] unexpected error:", err);
    return { ok: false, error: "Something went wrong. Please try again." };
  }

  // Best-effort delivery of the lead magnet — never blocks success.
  await sendEmail({
    to: email,
    subject: "Your 3 free tips to rank higher on Google",
    html: `
      <div style="font-family:Inter,Arial,sans-serif;color:#000;line-height:1.6">
        <h1 style="font-size:20px">Thanks for signing up 👋</h1>
        <p>Here are the first three things we check when we start getting a local
        business into the top 3 on Google:</p>
        <ol>
          <li><strong>Nail your Google Business Profile categories</strong> — pick the
          most specific primary category that matches what customers search for.</li>
          <li><strong>Get consistent NAP</strong> (Name, Address, Phone) across every
          directory. Inconsistencies quietly tank your rankings.</li>
          <li><strong>Ask for reviews the right way</strong> — recent, keyword-rich
          reviews are one of the strongest local ranking signals.</li>
        </ol>
        <p>Want us to do it for you? Just reply to this email.</p>
        <p>— The ${siteConfig.name} team</p>
      </div>
    `,
  });

  return { ok: true };
}
