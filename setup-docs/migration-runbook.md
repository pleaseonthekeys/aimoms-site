# Migration Runbook — aimoms.ai → Next.js + Supabase

> Audience: the engineer doing the migration. The founder maintains it afterward.
> Principle: **the live aimoms.ai never goes down.** Build alongside, switch at the end.
> Decisions locked in: Full Next.js + Supabase + Drizzle. Engineer migrates, then teaches.

## Current state (verified)
- ~30 hand-written `.html` pages in one flat folder.
- 43 articles hand-stored in `articles-data.js` as one `ARTICLES = {...}` object (~137KB),
  read by `article.html`.
- One working backend function: `netlify/functions/aime-chat.js` (calls Anthropic API).
- Hosting: Netlify (`netlify.toml` → functions in `netlify/functions`, esbuild bundler).
- Supabase account exists but is unused by the site.
- **No Git** — the folder is not version-controlled.

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
- Connect the **Supabase** and **Netlify** MCP servers so Claude can read/write her real
  accounts directly (tables, deploys, env vars).
- Confirm `ANTHROPIC_API_KEY` is set in Netlify env (already used by `aime-chat.js`).

## Phase 2 — Scaffold the new project (1 session)
Build the new app in a **subfolder or sibling repo** so the old site keeps serving.
- `npx create-next-app@latest` (App Router, TypeScript).
- Add Drizzle + the Supabase Postgres connection string (server-side env var only).
- Add Tailwind; port the brand colors/fonts from the current pages.
- Recreate shared **Header** and **Footer** as components from the existing HTML.
- Deploy this empty shell to a **Netlify preview/branch URL** to prove the pipeline works.

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
```

## Phase 4 — Rebuild the pages
- `/articles` list page + `/articles/[slug]` detail page, reading from Supabase via Drizzle.
- Recreate the article-body renderer (intro / h2 / text / image / pullquote / prompt blocks)
  to match the current `article.html` look exactly.
- Port the other key pages (home, toolkit, about, careers, editorial). Static marketing
  pages can be near-verbatim React versions.
- Compare new preview vs live, page by page, until visually identical.

## Phase 5 — Port the Aime tool
- Move `netlify/functions/aime-chat.js` over unchanged (keep the system prompt + privacy
  rules verbatim). Confirm the env var and the chat UI work on the preview URL.

## Phase 6 — Tests + go live
- Add basic tests: article page renders, list loads, Aime function responds, importer
  produced 43 rows.
- Final side-by-side review on the Netlify preview.
- Point the production domain at the new build. **Keep the old site as a backup branch.**
- Tag the release: `git tag v1-nextjs && git push --tags`.

---

## Phase 7 — The two auto-generators (the payoff)
Same pattern for both: **generate → save to Supabase as draft → human approves → publish.**

**Monthly editorial generator**
- A Netlify Scheduled Function (cron, monthly) calls Claude with an article-writing prompt
  in `lib/ai/`, inserts rows into `articles` with `status='draft'`.
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
