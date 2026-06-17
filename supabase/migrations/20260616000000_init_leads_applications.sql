-- EI Conversion: lead capture + applications.
-- Run against your own Supabase project (SQL editor or `supabase db push`).

-- Homepage email opt-ins ---------------------------------------------------
create table if not exists public.leads (
  id         uuid primary key default gen_random_uuid(),
  email      text not null unique,
  created_at timestamptz not null default now()
);

-- /local-seo applications --------------------------------------------------
create table if not exists public.applications (
  id              uuid primary key default gen_random_uuid(),
  name            text not null,
  email           text not null,
  business_name   text not null,
  website         text,
  current_ranking text,
  monthly_revenue text,
  goals           text,
  created_at      timestamptz not null default now()
);

-- Row Level Security -------------------------------------------------------
-- The public site writes with the anon (publishable) key, so we allow INSERT
-- only. No SELECT for anon, so collected emails/applications are never
-- readable from the client — view them in the Supabase dashboard.
alter table public.leads enable row level security;
alter table public.applications enable row level security;

drop policy if exists "anon can insert leads" on public.leads;
create policy "anon can insert leads"
  on public.leads for insert
  to anon
  with check (true);

drop policy if exists "anon can insert applications" on public.applications;
create policy "anon can insert applications"
  on public.applications for insert
  to anon
  with check (true);
