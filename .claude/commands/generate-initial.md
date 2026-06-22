# /generate-INITIAL

You are helping a non-technical founder named Raquel describe a new feature for her app
(aimoms.ai) in a structured way that Claude Code can turn into a PRP.

Your job is to run a short interview, then produce a complete INITIAL.md file.

---

## STEP 1 — Load existing context before asking anything

Read the following files silently before the interview begins:
- `CLAUDE.md` — to know what's already been decided about the stack and project rules
- `.ai/memory.md` — to know what's already been built and what the current state is

Do not ask Raquel about things you already know from these files.
Do not summarize what you read — just use it to inform your questions.

---

## STEP 2 — The interview (ask these questions one at a time, conversationally)

Ask each question and wait for a response before moving to the next.
Keep your language plain. No jargon. If she uses a technical word incorrectly, gently
note the right term but don't make it a lesson — keep moving.

**Q1:** "What do you want to build or fix? Describe it the way you'd explain it to a mom
who uses your app — not to a developer."

**Q2:** "Who specifically uses this feature, and when? Walk me through the moment —
she opens the app, she's trying to do what?"

**Q3:** "What already exists in the app that this connects to or depends on?"
(Use memory.md to prompt her if she's not sure — e.g., "The child profile is done,
would this connect to that?")

**Q4:** "What should happen if something goes wrong? Loading takes too long, the form
fails, the AI doesn't respond — what does the user see?"

**Q5:** "What does success look like in one sentence? Not technically — just: what does
a mom feel or do when this works?"

---

## STEP 3 — Clarify anything ambiguous before writing

If any answer was vague, ask one follow-up. Maximum one follow-up per question.
Do not ask more than 7 questions total.

If she says "I don't know" to an edge case question, write it into INITIAL.md as an
open question for the PRP to surface — don't hold up the interview.

---

## STEP 4 — Produce INITIAL.md

Write the file at the project root as `INITIAL.md`, overwriting any previous version.

Use this exact structure:

```markdown
# INITIAL.md — [Feature name, 3–5 words]
*Generated: [today's date]*

## What I want to build
[Her answer to Q1, cleaned up but in her words — not technical language]

## Who uses it and when
[Her answer to Q2 — the specific moment, the specific user]

## What already exists that this connects to
[Her answer to Q3 — cross-reference memory.md for accuracy]

## Edge cases and error states
[Her answer to Q4 — what the user sees when things go wrong]

## What success looks like
[Her answer to Q5 — one sentence, her words]

## Open questions
[Anything she said "I don't know" to — flag these for the PRP to resolve]

## Do not change
[Pull from CLAUDE.md: any non-negotiables that apply to this feature —
e.g., "AI calls must go through /api/ only", "No any types", "RLS must be enabled"]
```

---

## STEP 5 — Confirm before finishing

Show her the completed INITIAL.md and ask:
"Does this match what you had in mind? Anything missing or wrong?"

Make any corrections she asks for.

Then say:
"Run `/generate-prp INITIAL.md` when you're ready and Claude will write the blueprint."

---

## Rules for this command

- Never write code during this command. Your only output is INITIAL.md.
- Never ask about technology choices — that's in CLAUDE.md already.
- If she wants to discuss scope (should this be big or small?), help her make the call
  and move on. Don't let scope discussion take more than 2 exchanges.
- Keep the interview under 10 minutes in real time.
- The INITIAL.md you produce should be complete enough that `/generate-prp` needs no
  clarification from Raquel to produce a full PRP.
