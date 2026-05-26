const projects = [
  { name: "next_silence_note", description: "Next.js learning knowledge base, streamed on YouTube" },
  { name: "postgres_silence_note", description: "PostgreSQL learning knowledge base" },
  { name: "nextjs_01", description: "First App Router mini-site — Exercise 01" },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-6 font-sans">
      <h1 className="text-3xl font-bold">My Projects</h1>
      <ul className="flex flex-col gap-2">
        {projects.map((p) => (
          <li key={p.name} className="text-zinc-700 dark:text-zinc-300">
            <span className="font-medium">{p.name}</span> — {p.description}
          </li>
        ))}
      </ul>
    </div>
  );
}