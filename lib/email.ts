import { siteConfig } from "@/lib/config";

/**
 * Thin wrapper around Resend that degrades gracefully:
 * if RESEND_API_KEY is missing (or the package can't load) we just log and move
 * on, so form submissions still succeed and save to the database in dev.
 */
export async function sendEmail({
  to,
  subject,
  html,
  replyTo,
}: {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<{ sent: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn(`[email] RESEND_API_KEY not set — skipping "${subject}"`);
    return { sent: false, error: "email-not-configured" };
  }

  try {
    // Dynamic import so a missing package never breaks the build.
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const from =
      process.env.RESEND_FROM ?? `${siteConfig.name} <hello@${siteConfig.domain}>`;
    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      html,
      replyTo,
    });
    if (error) {
      console.error("[email] Resend error:", error);
      return { sent: false, error: error.message };
    }
    return { sent: true };
  } catch (err) {
    console.error("[email] Failed to send:", err);
    return { sent: false, error: "email-send-failed" };
  }
}
