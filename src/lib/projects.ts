export const projects = [
  {
    slug: "next_silence_note",
    name: "next_silence_note",
    description: "Next.js learning knowledge base, streamed on YouTube",
  },
  {
    slug: "postgres_silence_note",
    name: "postgres_silence_note",
    description: "PostgreSQL learning knowledge base",
  },
  {
    slug: "nextjs_01",
    name: "nextjs_01",
    description: "First App Router mini-site — Exercise 01",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug) ?? null;
}