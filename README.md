# EI Conversion

Marketing site for **EI Conversion** — a local SEO agency. Modeled on the
ProfResults layout (hero video → lead magnet → social proof; service page with
sales video → booking → objections → FAQ → application).

Built with Next.js 16 (App Router), Tailwind CSS v3, shadcn/ui, Supabase, and
Resend. Light-only theme using the reference palette (cream `#EFEBE5`, black
text, electric-blue `#0000EE` accent, Inter font, black pill CTAs).

## Pages

| Route            | Purpose                                                            |
| ---------------- | ----------------------------------------------------------------- |
| `/`              | Homepage — hook video + "3 free tips" email capture + team        |
| `/local-seo`     | Sales page — pitch video, Cal.com booking, benefits, before/after, how-it-works, FAQ, application form |
| `/free-analysis` | Thank-you page after the email opt-in                             |

## Quick start

```bash
npm install
cp .env.example .env.local   # then fill in your Supabase values
npm run dev                  # http://localhost:3000
```

The site runs immediately with **placeholders** in place of the video, the
booking calendar, etc. — nothing crashes when a value is missing.

## ✅ What you must fill in

Everything below is stubbed. The site works without it, but it won't be *yours*
until these are done.

1. **`lib/config.ts`** — the single source of truth for external IDs:
   - `wistia.homepageHookVideoId` — your 2–3 min homepage video (Wistia media ID)
   - `wistia.salesVideoId` — your ~7 min sales video
   - `cal.bookingLink` — your Cal.com link, e.g. `ei-conversion/strategy-call`
   - `siteConfig.email`, `siteConfig.domain`, `siteConfig.socials`
2. **`.env.local`** (copy from `.env.example`):
   - `NEXT_PUBLIC_SUPABASE_URL` + `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` (required for forms to save)
   - `RESEND_API_KEY`, `RESEND_FROM`, `APPLICATIONS_TO` (optional — emails are skipped if unset)
3. **Supabase tables** — run `supabase/migrations/20260616000000_init_leads_applications.sql`
   in your project (SQL editor, or `supabase db push`). Creates `leads` +
   `applications` with insert-only RLS for the anon key.
4. **Copy & content**:
   - `components/team-section.tsx` — real names, roles, photos (drop images in `/public`)
   - `components/before-after.tsx` — replace the illustrative numbers with real client results
   - `components/working-with.tsx` — your niches or client logos
   - `app/actions/submit-lead.ts` — the actual 3 tips in the welcome email

## Where things live

```
app/
  page.tsx                 → Homepage
  local-seo/page.tsx       → Service / sales landing page
  free-analysis/page.tsx   → Post opt-in thank-you (noindex)
  actions/
    submit-lead.ts         → Save email + send "3 free tips"
    submit-application.ts  → Save application + notify the team
components/                → Navbar, footer, sections, forms, embeds
lib/
  config.ts                → ⭐ external stubs (Wistia, Cal.com, site info)
  email.ts                 → Resend wrapper (degrades gracefully if unset)
  supabase/                → Supabase client setup
supabase/migrations/       → leads + applications schema
```

## How the data flows

- **Email opt-in** → `submitLead` → upsert into `leads` → Resend sends the tips → redirect to `/free-analysis`.
- **Application** → `submitApplication` → insert into `applications` → Resend notifies your team (reply-to = applicant).

Form submissions are stored even if Resend isn't configured; email is always
best-effort and never blocks a save.

## Notes

- This project is on **Tailwind v3 + shadcn** (from the boilerplate it was built
  on). Your other repos (`rcg-estates`, `e2-technologies`) use Tailwind v4 — a
  deliberate divergence, not a mistake.
- No `@calcom/embed-react`, `framer-motion`, or accordion dependency was added:
  the booking uses a plain Cal.com iframe, animations use CSS, and the FAQ is a
  small custom accordion — so `npm install` stays lean.
```bash
npm run build   # verifies everything compiles
npm run lint    # clean
```
