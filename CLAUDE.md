@AGENTS.md

---

# Project Context

This is a **learning project** for Next.js 15/16. It is part of a larger
knowledge base at `~/projects_new/learning_next_js/next_silence_note`:

- **ROADMAP:** `next_silence_note/ROADMAP.md` — 10 phases, setup → deployment
- **PROGRESS:** `next_silence_note/PROGRESS.md` — session log
- **Sessions:** `next_silence_note/sessions/` — detailed session notes
- **Exercises:** `next_silence_note/exercises/` — coding exercises with hints

## Stack

| Tool           | Version |
|----------------|---------|
| Next.js        | 16.2.6  |
| React          | 19.2.4  |
| TypeScript     | 5.x     |
| Tailwind CSS   | 4.x     |
| Package manager| yarn    |

## Project Structure

~~~
nextjs_01/
├── app/              ← Next.js App Router root (layout.tsx, page.tsx, globals.css)
├── src/
│   └── components/   ← shared components (absolute import alias: "components/X")
├── public/           ← static assets
├── next.config.ts
└── tsconfig.json     ← baseUrl: "src/", paths: { "@/components/*": ["components/*"] }
~~~

## Covered So Far (Sessions 1–2)

- Project scaffolded with `yarn create next-app@latest`
- ESLint + Prettier configured
- Absolute imports set up (`baseUrl: "src/"`, `@/components/*` alias)
- `src/components/Component.tsx` created and imported in `app/page.tsx`

## What's Next

- **Exercise 01** (`next_silence_note/exercises/ex-01-first-routes.md`):
  Build 3-page App Router mini-site: `/`, `/about`, `/projects` with shared layout
  and `loading.tsx` — using only file structure, no router config
- **Phase 1 remainder:** Navigation (`Link`, `useRouter`, `redirect()`, `notFound()`)
