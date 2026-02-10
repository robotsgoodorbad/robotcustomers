# BMAD.md

## What BMAD means

BMAD stands for Brief, Map, Assemble, Draft. It is a lightweight workflow we use to turn a clear project brief into a structured site plan, then build reusable pieces, then ship polished page drafts. For RobotCustomers.com, BMAD keeps work simple, factual, and repeatable while we move from source content to production pages.

---

## Roles we will use

- Mapper (information architecture + page goals)
- Writer (copy)
- Builder (code/components/routes)
- Designer (visual polish, spacing, hover, images, motion)
- Editor (consistency + clarity)
- QA (links, mobile, accessibility, deploy checklist)

---

## How we work

- One task at a time.
- Always reference `SPEC.md` and `SOURCE_CURRENT_SITE.md` before making changes.
- Do not invent claims, clients, metrics, logos, or unsupported facts.
- Prefer reusable components and shared layout patterns over one-off page code.

---

## Copy/paste role prompt templates

### 1) Mapper template

```text
Role: Mapper for RobotCustomers.com.

Inputs to read:
- SOURCE_CURRENT_SITE.md
- SPEC.md
- Current routes under src/app

Task:
Define page purpose, audience intent, and conversion goal for each route.
Recommend information architecture updates only where needed.

Output:
- Files changed (if any)
- Route map summary
- Page-by-page goal checklist

Ask questions only if blocking; otherwise choose reasonable defaults.
```

### 2) Writer template

```text
Role: Writer for RobotCustomers.com.

Inputs to read:
- SOURCE_CURRENT_SITE.md
- SPEC.md
- Existing page files in src/app

Task:
Write and/or align copy so it is credible, research-forward, and consistent with source facts.
Do not invent claims, metrics, or client proof.

Output:
- Files changed
- Before/after copy notes by section
- Checklist confirming all claims are source-backed

Ask questions only if blocking; otherwise choose reasonable defaults.
```

### 3) Builder template

```text
Role: Builder for RobotCustomers.com (Next.js App Router + TypeScript + Tailwind).

Inputs to read:
- SOURCE_CURRENT_SITE.md
- SPEC.md
- Existing shared layout/components/routes

Task:
Implement routes, components, and page structure with reusable patterns.
Keep code simple, readable, and deploy-safe for Firebase Hosting.

Output:
- Files created/changed
- What was implemented
- Verification checklist (lint/build/dev route checks)

Ask questions only if blocking; otherwise choose reasonable defaults.
```

### 4) Designer template

```text
Role: Designer for RobotCustomers.com.

Inputs to read:
- SOURCE_CURRENT_SITE.md
- SPEC.md
- Current UI in src/app and shared styles

Task:
Improve visual polish while preserving credibility: typography, spacing, button hierarchy, hover states, image treatment, and subtle motion.
Respect reduced-motion preferences and avoid flashy effects.

Output:
- Files changed
- UI polish checklist (desktop + mobile)
- Notes on visual consistency decisions

Ask questions only if blocking; otherwise choose reasonable defaults.
```

### 5) Editor template

```text
Role: Editor for RobotCustomers.com.

Inputs to read:
- SOURCE_CURRENT_SITE.md
- SPEC.md
- All user-facing page copy

Task:
Edit for clarity, consistency, and tone across pages.
Enforce terminology consistency and remove ambiguous or unsupported wording.

Output:
- Files changed
- Consistency checklist (terminology, CTA labels, tone)
- List of unresolved wording issues (if any)

Ask questions only if blocking; otherwise choose reasonable defaults.
```

### 6) QA template

```text
Role: QA for RobotCustomers.com.

Inputs to read:
- SOURCE_CURRENT_SITE.md
- SPEC.md
- Route files, layout, and deployment config

Task:
Verify links, responsive behavior, basic accessibility, and deploy readiness.
Run through pre-deploy checks for Firebase Hosting.

Output:
- Files changed (if any fixes applied)
- Test checklist results (links/mobile/a11y/metadata/deploy)
- Remaining risks or follow-ups

Ask questions only if blocking; otherwise choose reasonable defaults.
```
