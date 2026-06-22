# /end-session

You are closing out a Claude Code work session for a non-technical founder (Raquel,
aimoms.ai). Your job is to audit what actually happened, update the project's memory,
and leave the next session with zero ambiguity about where to start.

Do not rely on Raquel's recollection. Read the files. Diff the code. Surface the truth.

---

## STEP 1 — Audit the session (silent, no output yet)

Run the following to understand what changed:

```bash
git diff --stat HEAD~1 HEAD 2>/dev/null || git status
```

If there are uncommitted changes, note them separately — they may need to be committed
before the session ends.

Also read:
- `.ai/memory.md` — current state before this session's updates
- `CLAUDE.md` — to check if anything contradicts what was built today

Build a mental picture of:
- Which files were created or modified
- What feature or fix was worked on
- Whether the PRP validation gates were fully met
- Whether anything was left incomplete
- Whether any errors were hit (look for recent bash output in the session)

---

## STEP 2 — Check for uncommitted work

If the git status shows uncommitted changes, say:

"Before we close out, there are unsaved changes. Let's commit them."

Suggest a commit message based on what was built:
"Does this message look right? → `[auto-generated message based on the diff]`"

Wait for her confirmation, then run:
```bash
git add .
git commit -m "[confirmed message]"
git push
```

Confirm: "Pushed. Your work is saved on GitHub."

If nothing is uncommitted, skip this step silently.

---

## STEP 3 — Update .ai/memory.md

Rewrite the relevant sections of `.ai/memory.md`. Do not delete history — append and update.

### What to update:

**"What's been built" section:**
Add a dated entry for today. Be specific — file names, feature names, what it does.
Format: `- YYYY-MM-DD: [what was built]. [One sentence on anything notable about how
it works or what it connects to.]`

**"Current Sprint" section:**
Replace entirely with the current state:
```
## Current Sprint
Working on: [feature name, or "between features"]
Status: [Complete / In progress / Blocked]
Blocked by: [specific blocker, or "Nothing"]
Next step: [the exact first thing to do next session — specific enough that
            Raquel could brief someone else on it]
```

**"Decisions made and why" section:**
Add any architectural or product decisions that were made today.
Format: `- YYYY-MM-DD: [Decision]. Reason: [why].`
Only add decisions that should persist — skip "we tried X and it didn't work."

**"Errors fixed — don't repeat these" section:**
If any errors were hit and resolved during the session, add them.
Format: `- [Error description] → Fix: [what solved it]. Affected: [file or area].`
This section is the most important one for long-term reliability.
Be specific enough that Claude can avoid the error entirely next time, not just fix it.

**"Deployment status" section (create if it doesn't exist):**
```
## Deployment
Last deploy: YYYY-MM-DD
Live URL: [Vercel URL]
Last commit: [commit message]
Deploy status: [Live and working / Build failed / Pending]
```

---

## STEP 4 — Verify the PRP validation gates (if a PRP was executed this session)

Check the PRP that was run (look in `PRPs/` for the most recently modified file).

Read its validation gates. For each gate, check whether it was met based on what
was built. Report briefly:

```
PRP: [feature name]
Gates:
  ✓ [gate description]
  ✓ [gate description]
  ✗ [gate description] — not completed, carry to next session
```

If any gates are unmet, add them explicitly to "Next step" in the Current Sprint section.

---

## STEP 5 — Surface anything Raquel should know

After updating memory, tell Raquel three things in plain language:

**1. What we shipped today:**
One sentence. What exists now that didn't exist at the start of the session.

**2. What's next:**
Exactly what to do at the start of the next session. Specific enough to act on without
having to remember this session.
Example: "Next session: open Claude Code, run `/generate-INITIAL`, describe the child
profile page. The auth flow it depends on is already done."

**3. Anything to watch:**
One item — a known edge case, an unmet gate, a decision that needs revisiting.
If nothing, say so: "Nothing flagged. Clean session."

Keep this entire output to under 12 lines. She should be able to read it in 30 seconds.

---

## STEP 6 — Final confirmation

Say:
"Session closed. Memory updated. Your work is saved."

Then stop. Do not offer to keep working. Do not ask if there's anything else.
The session is done.

---

## Rules for this command

- Never ask Raquel what was built — read the git diff and files yourself.
- If you cannot determine something from the files (e.g., why a decision was made),
  ask one specific question: "I saw we switched from X to Y — what was the reason?
  I want to record it in memory."
- Do not update CLAUDE.md during end-session. CLAUDE.md changes are deliberate and
  separate. If something should go in CLAUDE.md, note it as a suggestion:
  "Consider adding this to CLAUDE.md: [what and why]"
- The memory file is append-and-update, never overwrite-history.
- If the session produced no git commits and no file changes, say so honestly:
  "It looks like nothing was committed this session. Do you want to talk through what
  happened before we close out?"
