"use server";

import { sendEvent } from "@/lib/email";

export type LeadResult = { ok: boolean; error?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const NEWSLETTER_EVENT = "Ei-Conversion Newsletter 001";

/**
 * Homepage lead magnet: capture an email and trigger the "3 free tips"
 * Resend Automation. No database involved — Resend's Contacts/Automation
 * runs are the source of truth for newsletter signups.
 */
export async function submitLead(_prev: LeadResult, formData: FormData): Promise<LeadResult> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();

  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  const { sent, error } = await sendEvent({
    event: NEWSLETTER_EVENT,
    email,
  });

  if (!sent) {
    console.error("[submitLead] event send failed:", error);
    return { ok: false, error: "Something went wrong. Please try again." };
  }

  return { ok: true };
}
