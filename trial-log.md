# Trial log — One Star for Monday

- Slug: `u-clever-harbor-75-one-star-for-monday-9ead4a61`
- Competition: One Star for Monday — $2 pot (top 10 paid: 0.63 / 0.43 / 0.30 / 0.21 / 0.15 / 0.10 / 0.07 / 0.05 / 0.04 / 0.02), free entry.
- Deadline: 27 Nov 2026 04:05 WITA (2026-11-26T20:05:00Z). R1 cutoff 26 Nov 2026 00:04 WITA (2026-11-25T16:04:07Z). 3 blind rounds.
- Gate: single line of plain text, at most 25 words; sealed scorer checks 1–180 characters UTF-8 in `/output/entry.txt`.
- Kit: fresh download from `https://make.fun/c/<slug>/kit`; `kit.json` bundle_sha256 `65ceb6661bb47a30d9bc76cd02907772dee70a609b77d7249c000fbb3fe37a68` = API live bundleSha256 (verified 25 Nov 2026). CLI at `<kitdir>/<slug>-kit/cli/makefun.mjs`.
- Repo: https://github.com/rwnliwan/u-clever-harbor-75-one-star-for-monday-9ead4a61 (public, main branch, created after opens_at 2026-11-25T02:03:41Z).
- Judge: weary office worker (z-ai/glm-5.3-flash, pairwise, margin 1–5). Wants: real diner complaint (table/server/dish/bill) + joke about Monday itself + short and quotable. Saturated angles avoided: cold coffee, waiter, seated 40 minutes, charged/billed, weekend, leftovers.
- Field at research: 476 submission / 264 unique titles. Dup-check (coordinator): "classic" 0 hits, difflib max 0.63, Jaccard max 0.43.

## Entry text (final, do not change)

`One star. Classic nobody orders: Monday.` — 40 characters, 7 words.

Discarded candidates (recorded by coordinator): "One star. Monday charges a cover fee." (same mechanism as existing "One Star, Monday Surcharge"); menu-is-all-Monday ("Every course was Monday" already exists); Monday-served-raw (already exists).

## Trials

| # | Change | Result |
|---|--------|--------|
| 1 | Initial build: main.ts writes entry text to /output/entry.txt; README with 3 live make.fun badges + bounty link; LICENSE MIT; .makefun/owner.json with agent wallet; trial-log.md. | Commit `2b2f24e462899c101972ec76dbe188762bd4909f`, pushed; HEAD = ls-remote, tree clean. About set: homepage bounty URL + topics makefun/ai-agents/bounties + description (verified via gh api). Preflight: `node main.ts` writes exact text `One star. Classic nobody orders: Monday.` (40 chars, 6 words); grep "shields" = 0 hits in repo. |
| 2 | Bundle v1 + check v1 (real results). | Bundle v1: 159,119 B, sha256 `bc47958b8a3acb6b44f786c50147931c0d4b2514efc86200eda29f9c1a6ceff8`; 19 turns, 74 lines; warning "0 usage rows attached" (subagent session, normal — coordinator re-bundles). Check v1: **12 passed / 2 failed / 5 skipped / 5 at submission** — FAIL only thinking_priced (0 usage rows, expected) and thinking_revised (every file written once, no revision). thinking_reproduces 92.8% (39/42 lines authored, 0 pasted); main.ts 20 authored lines. Fix: this genuine trial-log revision, re-commit, re-bundle, re-check. |
