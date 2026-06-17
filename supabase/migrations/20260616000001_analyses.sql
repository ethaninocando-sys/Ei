-- EI Conversion: free profile-analysis requests (the /free-analysis form).
-- Run against your own Supabase project after the init migration.

create table if not exists public.analyses (
  id              uuid primary key default gen_random_uuid(),
  full_name       text not null,
  email           text not null,
  phone           text,
  website         text,
  company_name    text not null,
  google_maps_url text,
  timeline        text,
  created_at      timestamptz not null default now()
);

-- Anon (publishable) key may INSERT only; no SELECT from the client.
alter table public.analyses enable row level security;

drop policy if exists "anon can insert analyses" on public.analyses;
create policy "anon can insert analyses"
  on public.analyses for insert
  to anon
  with check (true);
