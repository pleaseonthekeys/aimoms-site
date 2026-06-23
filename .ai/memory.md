# Working Memory — ai.moms™ (aimoms.ai)
*Started: 2026-06-22*

## Current Sprint
Working on: Migrating the static HTML site → Next.js + Supabase + Vercel.
  Full plan: ~/.claude/plans/aime-html-is-no-robust-fog.md
Status: Phase 0 DONE. Phase 1 LOCAL SCAFFOLD done. Phase 2 IN PROGRESS — Foundations,
  Membership, AND Workshop funnels done; builds + smoke-tests green (11 routes). ~24
  pages left to port. Supabase + Vercel provisioning still deferred (do with Lauren).
Blocked by: Nothing.
Next step: Continue Phase 2 commerce pages — Shop next (shop.html: course/gift/bundle
  Stripe links + Pixel), then quiz, article. Foundations/Membership/Workshop funnels
  DONE and are the templates to copy. Forms render structurally now; wiring is Phase 4.
  ⚠️ FLAGS for Raquel (stale Pixel values — ported verbatim for attribution parity,
  confirm before launch):
   - membership-thank-you fires "Subscribe" value:49, but membership is $59/mo.
   - workshop-thank-you fires "Purchase" value:25, but workshop is $68.
   - workshop-register fires InitiateCheckout content_name "Foundations - Form Complete"
     (a copy-paste leftover on the Workshop form; the event + $68 value are correct).
Repo layout: root = live static HTML (reference); next/ = the Next.js rebuild.

## Patterns established (reuse these when porting pages)
- Shared chrome lives in app/layout.tsx (fonts, fbq queue stub, <Header/><Footer/><Analytics/>).
- Design system in app/globals.css; per-page sections in app/<page>.css (plain global import,
  NOT CSS modules, so class names stay intact).
- Internal links → clean slugs via next/link (e.g. /foundations, NOT foundations.html).
- Pixel-tracked CTAs → <TrackedLink href event params> (components/TrackedLink.tsx).
- window.fbq typed in next/types/global.d.ts.
- Static assets already copied to next/public (img-*, raquel.png, og-image.png, favicon.svg).
- Stripe links + prices: import from next/lib/commerce.ts (never hardcode).
- Each page wraps its body in <div className="page-NAME"> and its CSS lives in
  app/NAME.css scoped under .page-NAME { ... } (CSS nesting; @keyframes hoisted out).
- Register forms = client components: validate → InitiateCheckout pixel → POST to
  /api/forms/<name> (Phase 4; .catch redirects anyway) → window.location to Stripe
  (full vs ?plan=split) with prefilled_email. Thank-you pages: <PurchasePixel/>.
- Reusable: TrackedLink, NewsletterPopup, FloatingQuizCTA, PurchasePixel.

## What's been built
(Static site on Netlify, as of 2026-06-22 — the migration target)
Homepage, Foundations (sales/register/thank-you), Membership $59/mo, Workshop $68,
Experiences & Events (display-only), Shop, Quiz funnel, Subscribe/newsletter "The Edit",
43 articles (articles-data.js), Community/Science/Corporate/Curriculum/Press,
Careers + 6 intern pages, Privacy/Terms.

## Deployment
Last deploy: Live on Netlify (aimoms.ai) — pre-migration.
Live URL: https://aimoms.ai
Last commit: "docs: switch plan to Vercel + AI SDK; add Stripe/Forms migration requirements"
Deploy status: Live on Netlify; not yet on Vercel.

## Decisions made and why
- 2026-06-22: Source of truth = Raquel's canonical multi-product zip (newer than the old snapshot).
- 2026-06-22: Drop the on-site Aime chatbot (no longer live); no AI feature in the migrated site.
  ("Aime" the concept — the assistant a mom builds in the course — stays as brand language.)
- 2026-06-22: Course stays $247 for now (config/env value); its Stripe link + price will
  change within days when Raquel raises the price — keep both as one-edit config.
- 2026-06-22: Form notifications via Resend → hello@aimoms.ai; Lauren sets it up during
  migration, Raquel owns the account; API key in Vercel env. Newsletter list may move to
  ConvertKit/Kit later.
- 2026-06-22: about.html (intentional removal) and welcome.html (dup of index) dropped.
- 2026-06-22: Stripe success_url → on-site *-thank-you pages (Stripe doesn't host the
  confirmation; those pages are in the zip).
- 2026-06-22: Gated course area (aimomsfoundationscourse) = route placeholder only this
  migration (Supabase Auth later).
- 2026-06-22: Quiz = port as-is + TODO (keep/redesign/remove later).
- 2026-06-22: Re-host the 67 Unsplash images into /public. DNS registrar access available for cutover.

## Phase log
- 2026-06-22 — Phase 0 complete (commit c5d5b21): synced project to Raquel's canonical
  multi-product zip. Added 14 new pages (Foundations/Membership/Workshop sales+register+
  thank-you, Experiences, Events, host-application, host-success, out-of-office-waitlist);
  refreshed every existing page + sitemap.xml + raquel.png; deleted about/aime/on-demand/
  waitlist; dropped welcome.html (dup of index). articles-data.js unchanged (43 articles).
  Handbook commit beforehand: c5904da.
- 2026-06-22 — Phase 1 local scaffold (commit 876d0e5): create-next-app → Next 16
  (App Router) + TS + Tailwind 4 + ESLint in next/. Removed create-next-app's generic
  CLAUDE.md/AGENTS.md (root handbook is authoritative). Supabase/Vercel NOT provisioned.

## Errors fixed — don't repeat these
(None yet.)
