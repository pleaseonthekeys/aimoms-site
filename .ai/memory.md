# Working Memory — ai.moms™ (aimoms.ai)
*Started: 2026-06-22*

## Current Sprint
Working on: Migrating the static HTML site → Next.js + Supabase + Vercel.
  Full plan: ~/.claude/plans/aime-html-is-no-robust-fog.md
Status: Phase 0, 1 (local scaffold), 2 (ALL pages), 6 (stubs) DONE. Phase 7 PARTIAL
  (sitemap + robots done; image re-host + deploy pending). Build green — 41 routes.
  Every page is ported: commerce funnels (Foundations/Membership/Workshop/Shop/Quiz/
  Article), all display pages, careers + 6 role pages, all 10 form components (client-side,
  POST to /api/forms/<name> — routes NOT built yet). foundations-course stub + sitemap +
  robots committed. Supabase client scaffolding committed but imported nowhere yet.
Blocked by: Provisioning — Phases 3/4/5/7 need Raquel's Supabase + Vercel + Resend
  (tokens/keys). Do WITH Lauren. Nothing else blocking.
Next step: With Lauren — provision Raquel's Supabase + Vercel via tokens (VERCEL_TOKEN /
  SUPABASE_ACCESS_TOKEN, CLI not MCP), then:
  - Phase 3: import 43 articles (next/lib/articles-data.ts) → Supabase `articles`; render from DB.
  - Phase 4: build /api/forms/* route handlers (Supabase insert + Resend → hello@aimoms.ai);
    export/import existing Netlify Forms leads before cutover. Form components already POST
    to these paths and redirect-regardless on failure.
  - Phase 5: set each Stripe link's success_url → matching *-thank-you page.
  - Phase 7: re-host ~67 unsplash body images → /public; Vercel preview; DNS cutover.
  Article notes: /article reads ?id= (dynamic server page), renders from the new
  next/lib/articles-data.ts (43 articles, copied verbatim from articles-data.js -> ESM +
  types; temporary until Phase 3 Supabase). getArticle/ARTICLE_IDS exported. Gift modal
  self-purchase -> STRIPE_LINKS.foundationsPayInFull, gift-purchase -> STRIPE_LINKS.courseGift
  (redirect-regardless on capture; POST /api/forms/* wired Phase 4). CTA hrefs mapped to
  clean slugs (index.html->/ , aime.html->/foundations [aime removed], subscribe.html->
  /subscribe, toolkit.html->/toolkit). Body images still hotlink unsplash (Phase 7 re-host);
  hero images are local /img-*.jpg (all 28 present in public).
  Quiz notes: ported as full interactive client component (components/QuizApp.tsx) with
  TODO(raquel) keep/redesign/remove. 4 screens (intro/quiz/result/final), all Pixel events
  preserved (quiz-started, quiz-result value:total, pay-full/pay-split InitiateCheckout,
  Lead "Quiz Completed" + "quiz-lead"). Course buy buttons use STRIPE_LINKS.foundations*
  + PRICES (pay-split value = foundationsTwoPay*2 = 248, i.e. 124x2; $1 over the $247
  pay-in-full — by design, not a stale-value bug). quiz-leads form POSTs to
  /api/forms/quiz-leads (Phase 4), shows final screen on success. OG image normalized to
  /og-image.png (source used social-share.jpg, likely not re-hosted). Terms/Privacy links
  now internal /terms /privacy (those routes still pending port).
  Shop note: course card + course-gift display use PRICES.foundations (single config
  value); gift links are STRIPE_LINKS.courseGift ($247) + STRIPE_LINKS.bundle ($297),
  verbatim. Course card fires InitiateCheckout content_name "shop-course". Shop reuses
  the global FloatingQuizCTA + NewsletterPopup (same as foundations); cookie/pixel/PageView
  are global (Analytics in layout) — shop's inline pixel init was NOT duplicated.
  ⚠️ FLAGS for Raquel (stale Pixel values — ported verbatim for attribution parity,
  confirm before launch):
   - membership-thank-you fires "Subscribe" value:49, but membership is $59/mo.
   - workshop-thank-you fires "Purchase" value:25, but workshop is $68.
   - workshop-register fires InitiateCheckout content_name "Foundations - Form Complete"
     (a copy-paste leftover on the Workshop form; the event + $68 value are correct).
   - ARTICLE PROMPT BLOCKS (deliberate FIX, not verbatim): the live article.html had a
     switch-statement bug (`case 'prompt'` label deleted) that silently dropped ALL 101
     teachable prompt blocks across the 43 articles. The port RESTORES them (prompt box +
     copy button, exactly as the orphaned code + CSS intended). Confirm this is desired —
     it's the one place we intentionally diverge from live output to recover lost content.
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
