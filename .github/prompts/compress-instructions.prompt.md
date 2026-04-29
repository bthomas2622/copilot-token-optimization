---
description: "Compress a copilot-instructions.md or AGENTS.md file to minimize always-on token cost."
---
Compress the target file using these rules:

1. Remove: articles (a/an/the), filler (just/really/basically/actually), pleasantries, hedging.
2. Use fragments. Short synonyms. Abbreviate repeated terms (DB, auth, config, fn, impl, repo).
3. Preserve ALL: code blocks, inline code, URLs, file paths, technical terms, markdown structure.
4. Declarative over imperative. "All exports: JSDoc required." not "For each function, check if it has JSDoc..."
5. Delete anything discoverable from code (language, test directory, framework used).
6. Keep only landmines — things that look normal but cause mistakes.

Show before/after token count estimate. Target: ≥50% reduction.
