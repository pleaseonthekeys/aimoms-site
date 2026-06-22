---
name: generate-claude-md
description: Run once at the start of a new project with the client present. Interviews the founder about their product, stack, and rules, then writes CLAUDE.md — the project handbook Claude Code reads at the start of every session.
---

# /generate-claude-md

Run this command **once**, at the start of a new project, with the client present.
This is a live interview — Lauren facilitates, the client answers, Claude writes.

The goal is a CLAUDE.md that is specific enough that Claude Code never makes a wrong
assumption about this project. Generic answers produce generic output. Push for specifics.

---

## STEP 1 — Check if CLAUDE.md already exists

If `CLAUDE.md` exists at the project root, stop and say:

"CLAUDE.md already exists for this project. If you want to rewrite it from scratch,
delete the file and run `/generate-claude-md` again. If you want to update specific
sections, tell me what's changed and I'll edit it directly."

Do not overwrite an existing CLAUDE.md without explicit confirmation.

---

## STEP 2 — The interview

Tell the client:
"I'm going to ask you some questions about your app. Answer in plain language —
no technical terms needed. Your answers become the handbook Claude reads before
every session. The more specific you are, the better it builds."

Ask these questions **one at a time**. Wait for a full answer before moving on.
Do not ask all questions at once.

---

**Q1 — The product**
"Describe your app in one sentence, the way you'd explain it to a friend.
Who is it for, and what does it help them do?"

*What you're listening for: the core user, the core job. If she says something vague
like "it helps moms," push: "What specifically does a mom do in your app?"*

---

**Q2 — The user's emotional experience**
"When your app works perfectly, how does a mom feel while she's using it?
And what's one thing she should never feel?"

*This becomes the AI tone instruction. It's the most important question for any
product with AI features. A bad answer here produces clinical, robotic AI responses.*

---

**Q3 — The pages and features that exist right now**
"Walk me through your app like you're giving a tour. What are the pages or
sections? What can a user actually do today?"

*Build a list as she talks. This becomes the "what's been built" section.*

---

**Q4 — What's being built next**
"What's the next thing you want to add? Even roughly — what's been on your
mind that doesn't exist yet?"

*This becomes the "current sprint" in .ai/memory.md — not CLAUDE.md itself,
but useful to capture now while she's talking.*

---

**Q5 — The rules**
"Are there any rules for how this app should be built? Things that should
always be true, or things that should never happen?"

*Most non-technical founders won't know how to answer this. Prompt her:*
- "Should users ever be able to see each other's data?" (Answer: no → RLS rule)
- "Are there words or topics the AI should never bring up?" (Tone rule)
- "Is there anything about the design that should never change?" (Brand rule)
- "Is there any feature you'd never want added without your approval?" (Scope rule)

*Translate her answers into technical rules as you write — she doesn't need to
know what RLS means, but "users can never see other users' data" becomes a rule
Claude Code will enforce on every database decision.*

---

**Q6 — The name and the URLs**
"What's the app called? What's the live URL, if there is one?
What's the GitHub repo URL?"

*Factual. Quick. Just capture it.*

---

## STEP 3 — Confirm the stack

Do not ask Raquel about the stack — she doesn't need to know. Read it from the
project instead:

Check for:
- `package.json` → identify framework (Next.js, Remix, etc.) and key dependencies
- `next.config.*` → confirms Next.js and version
- `tailwind.config.*` → confirms Tailwind
- `supabase/` folder or `@supabase/supabase-js` in package.json → confirms Supabase
- `tsconfig.json` → confirms TypeScript
- `vercel.json` or `.vercel/` → confirms Vercel deployment

If `package.json` doesn't exist yet (project just initialized), use the standard
jointheparty.ai stack:
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS + shadcn/ui
- Supabase (database + auth)
- Anthropic claude-sonnet-4-6 (AI features)
- Vercel (deployment)

---

## STEP 4 — Write CLAUDE.md

Write the file to the project root as `CLAUDE.md`.

Use this exact structure — fill every section with specifics from the interview.
Never leave a section with placeholder text. If something wasn't covered, omit the
section entirely rather than fill it with a generic default.

```markdown
# CLAUDE.md — [App name]
*Last updated: [today's date]*

## What this is
[One short paragraph. Product description from Q1 in plain language.
Who uses it. What they do in it. What problem it solves.]

## The user
[Who she is. From Q1 and Q2.]

## How the AI must sound
[From Q2 — the emotional experience. What the AI should always feel like.
What it should never feel like. Specific words or phrases to use or avoid if mentioned.]

## Tech stack
- [Framework and version]
- [Styling]
- [Component library]
- [Database and auth]
- [AI model and use]
- [Deployment]

## What's been built
[From Q3 — list of pages and features that exist today.
Specific enough that Claude Code knows what to build on vs. what to build fresh.]

## Non-negotiables
[From Q5 — rules that must always be true, translated into technical terms.
Write these as direct instructions Claude Code will follow on every decision.]

Examples of what goes here:
- NEVER call the Anthropic API from client-side code. All AI calls go through
  app/api/ routes only.
- ALWAYS use TypeScript. No `any` types.
- NEVER hard-code API keys. Use process.env only.
- Users can NEVER see another user's data. Every database table with user content
  must have Row Level Security (RLS) enabled and a policy scoped to auth.uid().
- [Any product-specific rules from Q5]

## AI tone rules
[Specific to this product. From Q2.]
Examples:
- Always address the mom warmly, never clinically.
- Never use medical jargon unless the user uses it first.
- Responses should feel like a knowledgeable friend, not a textbook.

## File and code patterns
- API routes: see examples/api-route-pattern.ts
- Components: see examples/component-pattern.tsx
- DB queries: see examples/db-query-pattern.ts
(Remove this section if the examples/ folder hasn't been set up yet.)

## Session protocol
At the end of every session, Claude must:
1. Update .ai/memory.md with what was built, decisions made, and any errors fixed
2. Set "Next step" to something specific enough that the next session can start
   without re-explaining context
3. Suggest a git commit message if there are uncommitted changes

## Project links
- Live URL: [from Q6, or "not deployed yet"]
- GitHub: [from Q6, or "not created yet"]
- Supabase project: [dashboard URL if known]
- Vercel project: [dashboard URL if known]

## Known gotchas
(Leave this section empty for now — it fills in over time as errors are discovered
and fixed. Each entry should say what broke and what fixed it.)
```

---

## STEP 5 — Read it back

After writing, read the Non-negotiables section aloud to the client in plain language.

Say: "These are the rules I'll follow every time I build something for your app.
Does anything sound wrong or missing?"

Make any corrections she asks for.

Then say:
"CLAUDE.md is done. I'll read this at the start of every session — you never have
to re-explain your project to me. Run `/generate-INITIAL` when you're ready to
describe the first thing you want to build."

---

## STEP 6 — Seed .ai/memory.md

After CLAUDE.md is written, immediately create `.ai/memory.md` with the current state
captured from the interview.

```markdown
# Working Memory — [App name]
*Started: [today's date]*

## Current Sprint
Working on: [from Q4 — what she wants to build next]
Status: Not started
Blocked by: Nothing
Next step: Run /generate-INITIAL and describe [feature from Q4]

## What's been built
[From Q3 — same list as CLAUDE.md "What's been built" section, with today's date]

## Deployment
Last deploy: [today's date if migrated today, otherwise "not yet deployed"]
Live URL: [from Q6]
Last commit: [most recent commit message, or "initial setup"]
Deploy status: [Live / Not yet deployed]

## Decisions made and why
- [today's date]: Initialized project with jointheparty.ai standard stack.

## Errors fixed — don't repeat these
(None yet. This section fills in over time.)
```

Tell the client: "I've also started your memory file. This is your project journal —
I'll update it at the end of every session so we never lose track of where we are."

---

## Rules for this command

- Lauren facilitates the interview — Claude types the questions in chat, but Lauren
  is in the room guiding the conversation. This is not a solo exercise.
- Never use placeholder text in CLAUDE.md. Every section must contain real, specific
  information from this project. A generic CLAUDE.md is worse than no CLAUDE.md.
- The Non-negotiables section is the most important section. If Q5 produced thin
  answers, go back and ask the prompts listed there before writing.
- Do not explain what TypeScript or RLS is to the client during this command.
  Translate her answers into technical rules — she doesn't need to understand the
  translation.
- CLAUDE.md and .ai/memory.md are both written before this command ends.
  Never write one without the other.
