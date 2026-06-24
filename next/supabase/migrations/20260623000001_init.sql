-- ai.moms™ migration — initial schema
-- Two tables:
--   articles    — the 43 editorial articles (public, read-only to the site)
--   submissions — every form lead (PRIVATE; never exposed to the browser)
--
-- RLS posture:
--   articles    : RLS on + a public SELECT policy (anon/publishable key may read).
--   submissions : RLS on + NO policies → the anon key can neither read nor write.
--                 Inserts happen only from app/api routes using the service_role key,
--                 which bypasses RLS. Lead data is therefore never reachable from the
--                 browser, matching the project's "users never see others' data" rule.

-- ─────────────────────────────────────────────────────────────────────────────
-- articles
-- ─────────────────────────────────────────────────────────────────────────────
create table if not exists public.articles (
  id          text primary key,                 -- the article slug/key (matches ARTICLES key + ?id=)
  title       text,
  category    text,
  data        jsonb       not null,             -- the full Article object, rendered verbatim
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

alter table public.articles enable row level security;

-- Articles are public content — anyone may read them.
drop policy if exists "articles are publicly readable" on public.articles;
create policy "articles are publicly readable"
  on public.articles for select
  to anon, authenticated
  using (true);

-- ─────────────────────────────────────────────────────────────────────────────
-- submissions
-- ─────────────────────────────────────────────────────────────────────────────
create table if not exists public.submissions (
  id          uuid primary key default gen_random_uuid(),
  form_name   text        not null,             -- newsletter, foundations-signup, … (allowlisted in the API route)
  email       text,                             -- extracted for quick scanning; full copy lives in data
  name        text,                             -- best-effort first+last / name
  data        jsonb       not null,             -- the complete submitted payload (minus honeypot)
  user_agent  text,
  created_at  timestamptz not null default now()
);

alter table public.submissions enable row level security;
-- Intentionally NO policies: only the service_role key (server-side) can touch this table.

create index if not exists submissions_form_name_idx on public.submissions (form_name);
create index if not exists submissions_created_at_idx on public.submissions (created_at desc);
