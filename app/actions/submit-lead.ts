"use server";

import { createClient } from "@/lib/supabase/server";
import { sendEvent } from "@/lib/email";

export type LeadResult = { ok: boolean; error?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const NEWSLETTER_EVENT = "Ei-Conversion Newsletter 001";

/**
 * Homepage lead magnet: capture an email, store it, and trigger the
 * "3 free tips" Resend Automation. Storing the lead is the source of
 * truth; the automation trigger is best-effort.
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

  // Best-effort trigger of the Resend Automation — never blocks success.
  await sendEvent({
    event: NEWSLETTER_EVENT,
    email,
  });

  return { ok: true };
}
