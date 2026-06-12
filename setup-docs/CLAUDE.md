# CLAUDE.md — ai moms™ (aimoms.ai)

> This is the "house manual" Claude Code reads every time it works on this project.
> It tells Claude who we are, how things are organized, and the rules it must follow.
> When in doubt, Claude should ask before acting.

## Who we are
ai moms™ is an education + media brand helping mothers learn to use AI calmly and
confidently — "AI + Me." The founder is **not an engineer**. She directs work in plain
English; Claude does the building. Always explain things simply and avoid jargon unless
asked. When you use a technical term, add a one-line plain-English definition.

## The golden rules (read first, every time)
1. **Never break the live site.** Do not deploy to production or change the live domain
   without being explicitly asked. Build and preview first.
2. **Plan before you build.** For anything beyond a typo, propose a short plan and wait
   for approval.
3. **One change at a time.** Make a change, confirm it works, then move on.
4. **Save versions often.** Commit after each working change (this is our undo button).
5. **Ask when unsure.** A 10-second question beats an hour of rework. The founder would
   always rather be asked.
6. **Protect privacy.** Never collect or store children's full names, birthdates, SSNs,
   medical/mental-health details, or school names tied to a child. (See the Aime tool's
   privacy rules — they apply everywhere.)

## Brand voice
Calm, warm, encouraging, jargon-free, never condescending. Speak to a smart, busy mother
who is new to AI. Short sentences. Reassuring. Never hypey or fear-based.

## Tech stack (the target setup)
- **Framework:** Next.js (App Router) — the front end and back end live together.
- **Database:** Supabase (Postgres). Articles, AI-tool reviews, and any saved data live here.
- **ORM:** Drizzle — how our code talks to Supabase in plain commands instead of raw SQL.
- **Auth:** Supabase Auth — only if/when moms log in. Not needed for public pages.
- **Hosting/Deploy:** Netlify. Pushing to GitHub `main` auto-deploys to production.
- **AI:** Anthropic API (Claude) via Netlify Functions — powers the Aime™ tool and the
  content generators. The API key lives in an environment variable `ANTHROPIC_API_KEY`,
  never in the code.
- **Testing:** Basic tests must pass before anything goes live, especially for anything
  that auto-generates content.

## How content works
- **Articles** live in a Supabase `articles` table (migrated from the old
  `articles-data.js` file). Each article has: id (slug), category, title, subtitle,
  read_time, hero_image, hero_alt, cta, body (structured blocks), published_at.
- **AI tool reviews** live in a Supabase `tools` table. Each tool generates one review.
- The **monthly editorial generator** is a Netlify Scheduled Function: it asks Claude to
  write new articles and inserts them into `articles`. They appear on the site
  automatically. New auto-generated content should default to **draft/unpublished** until
  a human approves it.

## Directory structure (target)
```
app/                 # pages and routes (the front end)
  page.tsx           #   homepage
  articles/          #   article list + individual article pages
  toolkit/           #   AI tool reviews
  (tools)/           #   the mini-tools, one folder each
components/          # reusable UI pieces (header, footer, article blocks)
lib/                 # shared code
  db/                #   Drizzle schema + queries (talks to Supabase)
  ai/                #   Claude prompts + content generators
netlify/functions/  # back-end functions (Aime chat, schedulers)
tests/              # automated checks
setup-docs/         # onboarding docs (this file's neighbors)
```

## Conventions
- Keep each mini-tool self-contained in its own folder so new ones are easy to add.
- Reuse existing components; match the look and voice of current pages before inventing new ones.
- Never put secrets (API keys, passwords) in code. Use environment variables.
- When adding a new article field or table column, update the Drizzle schema and explain
  the change in plain English.

## When the founder asks for something
1. Restate what she wants in one plain sentence to confirm understanding.
2. If it's non-trivial, show a short plan.
3. Build it, preview it, and tell her exactly what to click to see it.
4. Offer to "save this version" (commit) once she's happy.
