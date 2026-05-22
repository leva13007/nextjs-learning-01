# nextjs_01

Learning project for Next.js 16 / React 19. Part of the
**[NextJS-silence-notes](https://github.com/leva13007/NextJS-silence-notes)** ecosystem —
a public learning system streamed live on **[@zloyleva](https://www.youtube.com/@zloyleva)**.

## Stack

- **Next.js** 16.2.6 (App Router, Turbopack)
- **React** 19.2.4
- **TypeScript** 5.x
- **Tailwind CSS** 4.x
- **Yarn** 1.22

## Dev server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
nextjs_01/
├── app/              ← App Router root (layout.tsx, page.tsx, globals.css)
├── src/
│   └── components/   ← shared components
├── public/           ← static assets
├── next.config.ts
└── tsconfig.json     ← baseUrl: "src/", alias @/components/*
```

## Import aliases

```ts
import { Foo } from 'components/Foo';    // baseUrl: "src/"
import { Bar } from '@/components/Bar'; // explicit alias
```

## Scripts

| Command             | What it does                  |
|---------------------|-------------------------------|
| `yarn dev`          | Start dev server              |
| `yarn build`        | Production build              |
| `yarn lint`         | ESLint check                  |
| `yarn lint:fix`     | ESLint auto-fix               |
| `yarn format`       | Prettier format all files     |
| `yarn format:check` | Prettier check (no write)     |

## Learning notes

- **GitHub:** [leva13007/NextJS-silence-notes](https://github.com/leva13007/NextJS-silence-notes)
- **YouTube:** [@zloyleva](https://www.youtube.com/@zloyleva)
- [ROADMAP](https://github.com/leva13007/NextJS-silence-notes/blob/main/ROADMAP.md)
- [Sessions](https://github.com/leva13007/NextJS-silence-notes/tree/main/sessions)
- [Exercises](https://github.com/leva13007/NextJS-silence-notes/tree/main/exercises)
