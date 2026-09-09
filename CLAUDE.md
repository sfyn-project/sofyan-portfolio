# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install
npm run dev       # Vite dev server
npm run build     # Production build to dist/
npm run preview   # Serve the production build locally
```

Requires Node 22.12+ (`.nvmrc` included; `nvm use`). There are no test or lint commands configured — don't invent any; verify changes with `npm run build` and the dev server.

## Architecture

Vite + React SPA in plain JavaScript (no TypeScript), styled by one global stylesheet (`src/styles.css`), deployed to Vercel.

- **Routing** (`src/App.jsx`): two routes via `BrowserRouter` — `/` (Home) and `/work/orin-operational-platform` (OrinCaseStudy). Because deep links hit the server directly, `vercel.json` rewrites `/work/(.*)` to `index.html`; any new route path under `/work/` is covered automatically, but other route prefixes would need their own rewrite.
- **Content sources**: site identity, links, and the projects list live in `src/data/site.js`. `Home.jsx` treats `projects[0]` as the featured case study and `projects.slice(1)` as the personal list, so order in `site.js` is significant. The featured project's full case-study copy is hardcoded in `OrinCaseStudy.jsx` (not driven by the data file) — content edits there happen directly in the page component.
- **Reveal/motion system** (progressive enhancement, spans three files):
  1. `src/main.jsx` adds the `motion-ready` class to `<html>` unless `prefers-reduced-motion` is set.
  2. `useReveal()` (called by each page) uses an IntersectionObserver to add `is-visible` to all `[data-reveal]` elements.
  3. CSS keeps `.reveal` fully visible by default and only hides it under `.motion-ready`, so content still renders with JavaScript blocked or unsupported.
  New page sections should get `className="... reveal"` plus `data-reveal`. Staggered entrances use `hero-enter-1..4` classes or a `--step` CSS custom property (see `FlowDiagram.jsx`).
- **Styling**: no CSS framework. Design tokens are CSS variables on `:root` in `styles.css` (`--bg`, `--surface`, `--ink`, `--muted`, `--line`, `--accent`, `--max`). Shared utilities: `.wrap` (centered max-width container), `.mono`, `.section-label`, `.section-border`. Breakpoints at 840px and 560px, plus a `prefers-reduced-motion` override block that must keep working when motion is added.
- **Components** are small presentational pieces (`SectionLabel`, `TechTags`, `Navbar`, `Footer`, `ThemeToggle`); `Navbar` builds hash links (`#work`, `#experience`, `#about`) that work from both routes. On mobile (≤840px) navigation moves to a fixed bottom tab bar (`.tabbar`) with blur. It must stay a **sibling** of `.navbar-shell`, never a child — the shell's `backdrop-filter` re-anchors `position: fixed` descendants.
- **Theming**: light is the default and the OS `prefers-color-scheme` is intentionally ignored. An inline script in `index.html` re-applies `localStorage.theme === 'dark'` as `data-theme` on `<html>` before first paint (no flash); `ThemeToggle` in the navbar flips it, persists it, and syncs the `theme-color` meta. Dark values live in the `:root[data-theme='dark']` block in `styles.css`. Any new color must go through a CSS variable — hardcoded colors silently break dark mode.

## Content and design constraints

- **Design direction** (from README, intentional): editorial and engineering-focused. Do NOT add generic portfolio patterns — skill progress bars, rotating tech logos, fake terminals, heavy gradients, or excessive animation. Motion stays subtle.
- **Privacy** (from README, applies to the Orin case study): the case study intentionally abstracts proprietary implementation details. Never add internal credentials, private source code, customer-identifying data, the full internal database schema, or production screenshots exposing sensitive information.
- `src/data/site.js` has placeholder fields (`github`, `photo`) left intentionally empty until ready; `Footer` conditionally renders links for `github`, and `About` renders the portrait only when `photo` is set. Contact channels (WhatsApp `wa.me`, email `mailto`) are wired from the same file, and both navbars link to the footer's `#contact` section.
