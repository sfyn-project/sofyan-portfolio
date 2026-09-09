# Sofyan Portfolio V1.7

A lightweight engineering portfolio for Sofyan Syahri Huzaini, built with React + Vite and custom CSS.

## Pages

- `/` — Homepage
- `/work/orin-operational-platform` — Admin Orin professional case study
- `/work/orin-gps-tracking` — Orin GPS Tracking professional case study

## V1.7 content pass

This version tightens the portfolio copy without changing the visual design or manual styling from V1.6.

- Reduced repeated explanations across the Orin GPS Tracking case study.
- Removed the standalone GPS `My Role` section and kept contribution details where they are most relevant.
- Combined vehicle-state and journey-reporting content into one `From Telemetry to Journey` section.
- Replaced the repetitive `What It Demonstrates` ending with a concise `Engineering Outcome` section.
- Moved OneSignal notification context into the Admin Orin workflow instead of keeping a standalone notification section.
- Tightened Admin Orin platform, Kanban, inventory, field-operation, and impact copy.
- Kept the existing hero, About photo, theme toggle, contact details, routes, layout, typography, and styling.

## What is included

- Admin Orin case study covering customer lifecycle, role-based Kanban, operational workflow, inventory/provisioning, and the 800+ unit renewal performance story.
- Scale context: ~12K registered users, ~4K active users, ~6K active GPS units, and 10K+ device/GSM inventory records.
- Orin GPS Tracking case study covering protocol integration, telemetry processing, GPS validation, vehicle-state interpretation, and journey reporting.
- AI-Powered Personal Finance Bot highlight with automated reporting and stable AI Q&A.
- Stock Screening & Strategy Evaluation highlight with six strategies and historical return/profit evaluation.
- ATS CV bundled in `public/`.
- Dark/light theme toggle in the navbar.

## Local development

Node.js 22.12+ is recommended. An `.nvmrc` file is included.

```bash
nvm use 22.12.0
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

A `vercel.json` rewrite is included so direct visits to React Router case-study URLs resolve correctly.

## Before publishing

Open `src/data/site.js` and review the public contact links, GitHub URL, LinkedIn URL, and downloadable CV path.

## Privacy

The professional case studies intentionally abstract proprietary implementation details. Do not add internal credentials, private source code, customer-identifying data, full internal database schema, or production screenshots that expose sensitive information.
