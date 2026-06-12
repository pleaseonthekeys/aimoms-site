# Migration Runbook — aimoms.ai → Next.js + Supabase

> Audience: the engineer doing the migration. The founder maintains it afterward.
> Principle: **the live aimoms.ai never goes down, and checkout never breaks.** Build
> alongside, switch at the end.
> Decisions locked in: Full Next.js + Supabase + Drizzle, hosted on **Vercel** (AI SDK +
> Vercel Cron, Claude-only — no AI gateway). Engineer migrates, then teaches.

## Current state (verified)
- ~30 hand-written `.html` pages in one flat folder.
- 43 articles hand-stored in `articles-data.js` as one `ARTICLES = {...}` object (~137KB),
  read by `article.html`.
- One working backend function: `netlify/functions/aime-chat.js` (calls Anthropic API).
- Hosting: Netlify (`netlify.toml` → functions in `netlify/functions`, esbuild bundler).
- Supabase account exists but is unused by the site.
- **No Git** — the folder is not version-controlled. *(Phase 0 below is now done.)*

## Two host-coupled things found in the audit (handle deliberately)
1. **Stripe = Payment Links (safe, host-agnostic).** Checkout is plain hyperlinks to
   Stripe-hosted pages — NO Stripe code or function in the repo. Preserve these URLs
   verbatim across the migration; do not refactor them:
   - Pay in full ($247): `https://buy.stripe.com/28EfZj6U8aEB7MRbBwdZ608`
   - 2 monthly payments ($124): `https://buy.stripe.com/6oU6oJ3HW8wt1ot0WSdZ609`
   - Gift: `https://buy.stripe.com/8x2fZj6U83c98QV20WdZ60a`
   - Gift (alt): `https://buy.stripe.com/14A7sN92gfYVffj350dZ60b`
   They appear in `index.html`, `shop.html`, `quiz.html`, and `article.html`. Money flow
   is unaffected by the host switch.
2. **Netlify Forms = the real migration risk.** `data-netlify="true"` forms exist for:
   `newsletter` (most pages), `waitlist`, `quiz-leads`, `press`, `aime-onboarding`, and
   `self-purchase`/`gift-purchase` (in `article.html`, which captures the lead THEN
   redirects to Stripe). **Netlify Forms does not exist on Vercel.** Every one must be
   re-pointed to a Supabase `submissions` table (Phase 4.5) or leads are silently lost.

---

## Phase 0 — Safety net (do this first, ~30 min)
Goal: version control + backup before touching anything.
```bash
cd "Media Pages NEW"
git init
printf "node_modules/\n.env\n.env.local\n.DS_Store\n.netlify/\n" > .gitignore
git add -A
git commit -m "Snapshot: existing static site before migration"
# create a private GitHub repo, then:
gh repo create aimoms-site --private --source=. --remote=origin --push
```
✅ There is now a backup and full undo for the first time ever.

## Phase 1 — Claude Code + MCP (~30 min)
- Install Claude Code; open this folder.
- Run `/init` to generate a first `CLAUDE.md`, then replace it with `setup-docs/CLAUDE.md`.
- Connect the **Supabase** and **Vercel** MCP servers so Claude can read/write her real
  accounts directly (tables, deploys, env vars).
- Set `ANTHROPIC_API_KEY` in Vercel project env vars (copy the value already in Netlify).

## Phase 2 — Scaffold the new project (1 session)
Build the new app in a **sibling repo** so the old Netlify site keeps serving.
- `npx create-next-app@latest` (App Router, TypeScript).
- Add the **Vercel AI SDK** (`ai` + `@ai-sdk/anthropic`) for all Claude calls.
- Add Drizzle + the Supabase Postgres connection string (server-side env var only).
- Add Tailwind; port the brand colors/fonts from the current pages.
- Recreate shared **Header** and **Footer** as components from the existing HTML.
- Connect the repo to Vercel; confirm push → **preview URL** works on an empty shell.

## Phase 3 — Articles into the database
- Design the `articles` table (see schema below) and create it via a Drizzle migration.
- Write a **one-time import script** that reads `articles-data.js` and inserts all 43 rows.
  The `body` field is already structured blocks — store it as JSON.
- Verify count = 43 and spot-check a few rich articles (e.g. `start-here`).

Suggested schema:
```
articles
  id (slug, pk)        category        title         subtitle
  read_time            hero_image      hero_alt      cta (json)
  body (json)          status (draft|published, default 'published' for migrated)
  published_at         created_at
tools
  id (slug, pk)        name            category      summary
  review (json)        rating          url           status        created_at
submissions            # replaces Netlify Forms — every lead/signup lands here
  id (pk)              form_name       payload (json)  email        created_at
```

## Phase 4 — Rebuild the pages
- `/articles` list page + `/articles/[slug]` detail page, reading from Supabase via Drizzle.
- Recreate the article-body renderer (intro / h2 / text / image / pullquote / prompt blocks)
  to match the current `article.html` look exactly.
- Port the other key pages (home, toolkit, about, careers, editorial). Static marketing
  pages can be near-verbatim React versions.
- **Preserve every Stripe Payment Link URL verbatim** (the 4 listed up top) on the
  home/shop/quiz/article pages. Keep any `fbq('track','InitiateCheckout',...)` pixel
  calls on those buttons.
- Compare new preview vs live, page by page, until visually identical.

## Phase 4.5 — Migrate Netlify Forms → Supabase (do NOT skip)
Every `data-netlify="true"` form must be rebuilt to POST to a Next.js route handler that
inserts into the `submissions` table. Inventory to cover:
`newsletter`, `waitlist`, `quiz-leads`, `press`, `aime-onboarding`, `self-purchase`,
`gift-purchase`.
- Build one `POST /api/submit` handler: validate, insert `{form_name, payload, email}`.
- For `self-purchase`/`gift-purchase`: capture the lead, THEN redirect to the matching
  Stripe link — preserve the existing "redirect regardless of capture success" behavior so
  a form hiccup never blocks a sale.
- Optional but recommended: forward newsletter/waitlist emails to her email tool (or just
  export from Supabase) so list growth continues.
- **Test each form end-to-end on the preview URL** and confirm a row lands in `submissions`.
  Missing this = silently dropped leads and lost sales.

## Phase 5 — Port the Aime tool
- Rebuild `netlify/functions/aime-chat.js` as a Next.js route handler using the Vercel AI
  SDK + `@ai-sdk/anthropic`. **Keep the system prompt and privacy rules verbatim.** Confirm
  the env var and the chat UI work (with streaming) on the preview URL.

## Phase 6 — Tests + go live
- Add basic tests: article page renders, list loads, Aime responds, importer produced 43
  rows, **every form writes a `submissions` row**, and **every Stripe link still points to
  the correct `buy.stripe.com` URL**.
- Final side-by-side review on the Vercel preview.
- Point the production domain (DNS) at Vercel. **Keep the old Netlify site live as a
  fallback** until the new one is confirmed stable, then retire it.
- Verify a real test purchase reaches Stripe and a real form submission reaches Supabase
  on the live domain.
- Tag the release: `git tag v1-nextjs && git push --tags`.

---

## Phase 7 — The two auto-generators (the payoff)
Same pattern for both: **generate → save to Supabase as draft → human approves → publish.**

**Monthly editorial generator**
- A **Vercel Cron** job (monthly) hits `app/api/cron/editorial`, which calls Claude via the
  AI SDK with an article-writing prompt in `lib/ai/`, and inserts rows into `articles` with
  `status='draft'`.
- Founder reviews drafts in a simple admin list and flips them to `published`.

**AI tool reviews**
- A generator takes a tool name/url, asks Claude to produce a structured review, inserts a
  `tools` row (`status='draft'`). The toolkit page renders published tools automatically.

Guardrails for both: default to draft, run tests before publish, never auto-publish
unreviewed content, log every generation.

---

## Teaching handoff (after migration)
Once the modern codebase is live, run the 4 founder sessions:
1. "It's just a conversation" — one tiny visible change + Plan Mode.
2. "Git without fear" — save / publish / undo.
3. "The house manual" — tour `CLAUDE.md` + make a `/new-article` slash command.
4. "Her first tool" — she drives a full mini-tool end to end.
