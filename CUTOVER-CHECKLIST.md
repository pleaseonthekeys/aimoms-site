# aimoms.ai — Netlify → Vercel Cutover Checklist
*Run this live on the call. Lauren drives the technical steps; Raquel provides access + clicks in her own dashboards. Budget ~75–90 min. Goal: aimoms.ai serves the new Next.js site, money + leads + email + pixel all working, with Netlify kept as a fallback until we're sure.*

**The single most important rule:** do everything reversible first, test on the temporary `*.vercel.app` URL, and only flip DNS once we've hit a clean **Go/No-Go gate (Step 5)**. DNS is the only step that touches live traffic, and it's reversible in minutes.

---

## Key facts (so nobody guesses on the call)
- **Supabase** = already Raquel's, already live (project `pzrrxtakwvspstwbvefb`). Articles + form leads tested working. No change needed.
- **Resend** = already Raquel's account (owner `raquelcadourcy@gmail.com`). Needs the `aimoms.ai` sending domain verified (DNS records) so notifications can come from `hello@aimoms.ai`.
- **Vercel** = the preview is currently on *Lauren's* Hobby account. Production must run on **Raquel's Vercel (Pro)** — Hobby is non-commercial.
- **Stripe** = Raquel's. The site is already at `aimoms.ai` today and the thank-you slugs are unchanged, so success URLs should already be correct — we **verify**, not rebuild.
- **GoDaddy** = the DNS registrar. This is where the actual cutover happens.
- **The 6 runtime env vars** Lauren has in `next/.env.local` (Supabase URL/anon/service + Resend key/from/to).

---

## STEP 0 — Before the call (Lauren, tonight)
- [ ] In GoDaddy, **lower the TTL** on the existing `aimoms.ai` A/CNAME records to **600 seconds** (10 min). This makes tomorrow's flip propagate fast. *(If Lauren doesn't have GoDaddy access yet, this becomes the first thing on the call — do it and take a short break before Step 6 to let the old TTL expire.)*
- [ ] Confirm the preview is green: https://aimoms-preview.vercel.app (homepage, /events, /experiences, an /article, one test form).
- [ ] Have open: `next/.env.local` (env values), the Stripe link→thank-you map (Step 3), this checklist.

## STEP 1 — Confirm access + current state (first 5 min of call)
- [ ] Raquel is logged in and screen-sharing: **Vercel**, **GoDaddy**, **Stripe**, **Resend** (Supabase too, just in case).
- [ ] Raquel's **Vercel is upgraded to Pro** (paid) — required to host a commercial site. Do this now if not done.
- [ ] **Confirm the Foundations price + Stripe link are still current.** Raquel was raising the price (new link). If it changed, Lauren updates the one line in `next/lib/commerce.ts`, rebuilds, and redeploys before launch.

## STEP 2 — Stand up production on Raquel's Vercel *(no user impact — temp URL only)*
- [ ] Lauren gets a **Vercel access token scoped to Raquel's team** (Raquel: Vercel → Account Settings → Tokens → Create), or Raquel runs the CLI while screen-sharing.
- [ ] From `next/`: link a new project on **Raquel's** team and set the 6 env vars (Production scope): `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `RESEND_TO_EMAIL`.
- [ ] `vercel deploy --prod` → get Raquel's `*.vercel.app` URL.
- [ ] Quick smoke test that temp URL (homepage 200, one article, one form submit → check the Supabase row). **This is what we'll point the domain at.**
- [ ] *(Optional, recommended follow-up — not required for launch: create a GitHub repo + connect it to the Vercel project so future content edits auto-deploy. Can be done after go-live.)*

## STEP 3 — Verify Stripe success URLs *(verify, don't rebuild)*
The site is already `aimoms.ai` and the thank-you slugs are unchanged, so these should already be right. For **each** payment link, open it in Stripe → **After payment / Confirmation page** and confirm it points to the matching on-site page (or just keep whatever `aimoms.ai/...` path is already there — those slugs all exist on the new site):

| Product | Link ends in | Should confirm to |
|---|---|---|
| Foundations — pay in full | `…dZ608` | `https://aimoms.ai/foundations-thank-you` |
| Foundations — 2 payments | `…dZ609` | `https://aimoms.ai/foundations-thank-you` |
| Membership | `…dZ60j` | `https://aimoms.ai/membership-thank-you` |
| Workshop | `…dZ60l` | `https://aimoms.ai/workshop-thank-you` |
| Course gift | `…dZ60a` | its current `aimoms.ai/…` confirmation (confirm with Raquel) |
| Bundle | `…dZ60b` | its current `aimoms.ai/…` confirmation (confirm with Raquel) |

- [ ] All six checked. **Only change one if it points at a `*.netlify.app` URL or a dead path** — otherwise leave it exactly as-is. **Never edit the payment link itself, only the confirmation-page setting.**

## STEP 4 — Verify the `aimoms.ai` sending domain in Resend *(non-disruptive; can run in parallel)*
- [ ] In Raquel's **Resend → Domains → Add Domain → `aimoms.ai`**. Resend shows a set of DNS records (SPF `TXT`, DKIM, and a return-path `MX`).
- [ ] Add **exactly those records** in GoDaddy DNS. *(These only affect email, not where the website points — safe to add anytime.)*
- [ ] Click **Verify** in Resend (can take a few min to propagate).
- [ ] Once verified, Lauren flips the two Resend env vars on Raquel's Vercel to production values and redeploys:
  - `RESEND_FROM_EMAIL` → `hello@aimoms.ai`
  - `RESEND_TO_EMAIL` → `hello@aimoms.ai` (or whichever inbox Raquel wants lead notifications in)
- [ ] Submit one test form on the temp URL → confirm the email actually lands in Raquel's inbox (not just the Supabase row).

## STEP 5 — 🚦 GO / NO-GO GATE (test everything on the temp `*.vercel.app` URL)
Do **not** touch DNS until every box here is checked on Raquel's production temp URL:
- [ ] Homepage, Foundations, Membership, Workshop, Experiences, Events, Editorial, an Article — all load and look right.
- [ ] Click each **Buy/Register** CTA → lands on the **correct Stripe checkout** (right product + price). *(Stop there — no need to pay.)*
- [ ] Submit a **lead form** (e.g., newsletter + a register form) → **Supabase row appears** AND **Raquel gets the email**.
- [ ] A register form still redirects to Stripe even if you submit fast (capture never blocks checkout).
- [ ] **Facebook Pixel** firing (use the Meta Pixel Helper browser extension on the temp URL — confirm PageView + an InitiateCheckout on a buy click).
- [ ] Export existing **Netlify Forms** submissions first: Netlify → the site → Forms → export CSV for each form, so no historical leads are lost. ✅ done.

**If anything fails → stop, fix, re-test. Do not flip DNS.**

## STEP 6 — DNS cutover on GoDaddy *(the actual switch)*
- [ ] In Raquel's Vercel project → **Settings → Domains → Add `aimoms.ai`** (and `www.aimoms.ai`). Vercel will display the exact records to set.
- [ ] In **GoDaddy DNS**, change the records to the values **Vercel shows** (typically: apex `A` record `@` → Vercel's IP, and `www` `CNAME` → `cname.vercel-dns.com`). Replace the old Netlify records. *Use the exact values Vercel gives — don't hardcode from memory.*
- [ ] Wait for Vercel to show **"Valid Configuration"** and auto-issue the SSL certificate (usually a few min; can be up to ~30).
- [ ] **Leave the Netlify site published** — it's our fallback until we confirm the new site is solid.

## STEP 7 — Verify on the real domain (after DNS propagates)
- [ ] `https://aimoms.ai` loads the **new** site over HTTPS (valid padlock), `www` redirects to apex (or vice-versa, however Vercel set it).
- [ ] Re-run the Step 5 checks **on `aimoms.ai`**: a couple of pages, one buy-CTA → Stripe, one form → Supabase row + email, Pixel firing.
- [ ] Spot-check a few old shared URLs / SEO slugs still resolve (e.g. `/foundations`, `/editorial`, an `/article?id=…`, the `*-thank-you` pages).
- [ ] Confirm `aimoms.ai/sitemap.xml` and `/robots.txt` serve.

## ROLLBACK (if something's wrong after the flip)
- [ ] In GoDaddy, **revert the A/CNAME records to the old Netlify values.** Because we lowered TTL in Step 0, traffic returns to Netlify within ~10 min. Netlify was never taken down, so the old site is intact. Then debug on the Vercel temp URL and try again.

## AFTER LAUNCH (cleanup + follow-ups, not on the critical path)
- [ ] Once `aimoms.ai` is stable for a day or two, restore the GoDaddy TTL to a normal value (e.g. 3600).
- [ ] Retire Lauren's `aimoms-preview` project (it was a temporary Hobby preview).
- [ ] Decommission / unpublish the Netlify site once fully confident.
- [ ] Hand Raquel the Resend login; confirm she can see lead notifications.
- [ ] *(Optional)* Connect the GitHub repo to Vercel for auto-deploy on future content edits.
- [ ] Set the Stripe `success_url`s if any were found pointing at non-aimoms URLs in Step 3.

---

### Who does what (quick reference)
- **Lauren:** Vercel CLI deploy + env vars, build/redeploy, all verification/testing, reads out the DNS records to set.
- **Raquel:** logs into + screen-shares her dashboards, upgrades Vercel to Pro, creates the Vercel token, clicks Verify in Resend, confirms Stripe confirmation pages, makes the GoDaddy DNS edits, confirms the test email landed.
