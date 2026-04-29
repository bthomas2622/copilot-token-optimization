# ⚡ Copilot Token Optimization

A developer's guide to maximizing token efficiency across every GitHub Copilot surface — VS Code, CLI, Cloud Agent, and more.

## What This Is

An interactive single-page site with practical, actionable tips for reducing token consumption while maintaining output quality. Covers:

- **Best Practices** — Prompt compression, output control, context hygiene, declarative guardrails
- **Tools** — Surface-specific guidance for VS Code, CLI, Cloud Agent, MCP servers, and model selection
- **Monitor Your Usage** — AI Credit tracking, per-token cost awareness, billing management, and debugging signals

## View It

Open `index.html` in a browser. No build step required — it's a static site.

## Example Copilot Customizations

This repo includes working examples of the customization patterns recommended by the guide:

### `.github/copilot-instructions.md`
Compressed, caveman-style global instructions (~50 tokens). Loaded on every Copilot interaction — kept minimal by design.

### `.github/instructions/` (Scoped with `applyTo`)
Conditional instruction files that only load when editing matching files:
- `javascript.instructions.md` — JS conventions, applied to `**/*.js`
- `styles.instructions.md` — CSS/theme rules, applied to `**/*.css`
- `html.instructions.md` — HTML patterns and card structure, applied to `**/*.html`

### `.github/prompts/` (Reusable Prompt Files)
On-demand prompts kept outside always-on context:
- `compress-instructions.prompt.md` — Compresses any instructions/AGENTS.md file, targeting ≥50% token reduction

## Links

- [GitHub Copilot Docs](https://docs.github.com/en/copilot)
- [Models & Pricing](https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing)
- [Usage-Based Billing Announcement](https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/)
