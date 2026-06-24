/**
 * Central place for every external integration ID the site needs.
 *
 * Everything here is a STUB until you fill it in. Each value is read by a
 * component that renders a visible "configure this" placeholder when the value
 * is still empty, so the whole site runs end-to-end before any account exists.
 *
 * Public values (Wistia, Cal.com) are safe to hard-code here. Secret values
 * (Resend API key) live in environment variables — never commit those.
 */

export const siteConfig = {
  name: "EI Conversion",
  tagline: "Local SEO that gets you ranking in the top 3 on Google.",
  // Used in metadata, emails, and the footer.
  email: "ethan@ei-conversion.com",
  domain: "eiconversion.com",
  socials: {
    // Optional — leave blank to hide.
    linkedin: "",
    x: "",
    instagram: "",
  },
};

export const wistia = {
  /**
   * Wistia media IDs (the hashed string in a video's URL/embed code).
   * Leave blank to show a placeholder where the video will go.
   */
  homepageHookVideoId: "", // ~2-3 min "why you're invisible on Google" video
  salesVideoId: "", // ~7 min pitch on the /local-seo page
};

export const cal = {
  /**
   * Your cal.com link, e.g. "ei-conversion/strategy-call".
   * Found in your Cal.com event type under "Public URL".
   * Leave blank to show a placeholder where the booker will go.
   */
  bookingLink: "thic-435i-g4ubsl/website",
};

/** True once a stub has been filled in. */
export const isConfigured = {
  homepageVideo: wistia.homepageHookVideoId.trim().length > 0,
  salesVideo: wistia.salesVideoId.trim().length > 0,
  booking: cal.bookingLink.trim().length > 0,
};
