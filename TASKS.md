# TASKS.md

Planning window: next 2 weeks  
Project: RobotCustomers.com (Next.js + TypeScript + Tailwind + Firebase Hosting)  
Source of truth: `SOURCE_CURRENT_SITE.md` and `SPEC.md`

Rules:
- No invented claims, clients, metrics, or logos.
- Keep implementation steps simple and repeatable.

---

## P0 (must do now)

1. [x] Create `SPEC.md` from `SOURCE_CURRENT_SITE.md`.
2. [ ] Align copy across pages to `SOURCE_CURRENT_SITE.md`.
3. [x] Sticky footer fix (layout flex).
4. [ ] SEO basics: verify metadata per route and add OG image placeholder plan.
5. [ ] Pre-deploy checklist + deploy steps (local run, lint, build, deploy, smoke test).

---

## P1 (next)

1. [ ] Add `/methods` page (Methods & Deliverables) under `src/app/methods/page.tsx`.
2. [ ] Add `/insights` page under `src/app/insights/page.tsx` with curated link-outs to RobotsGoodOrBad.com.
3. [ ] Visual system polish (typography, spacing, buttons, hover states).
4. [ ] Image strategy + placeholders using `next/image` (no invented logos/claims).
5. [ ] Optional subtle animations that respect reduced motion preferences.

---

## P2 (later)

1. [ ] Analytics plan and implementation (optional later).
2. [ ] Expand SEO package (structured internal linking, social preview refinement).
3. [ ] Post-launch QA pass with content and navigation regression checklist.

---

## Repeatable execution checklist (use for each task)

1. Read `SOURCE_CURRENT_SITE.md` and `SPEC.md`.
2. Implement one scoped change.
3. Verify route behavior locally (`npm run dev -- --webpack` if Turbopack is unstable).
4. Run lint/build checks.
5. Deploy and smoke test the changed routes.
