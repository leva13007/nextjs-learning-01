import { projects } from "lib/projects";
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-6 font-sans">
      <h1 className="text-3xl font-bold">My Projects</h1>
      <ul className="flex flex-col gap-2">
        {projects.map((p) => (
          <li key={p.slug} className="text-zinc-700 dark:text-zinc-300">
            <Link href={`/projects/${p.slug}`}>
              <span className="font-medium">{p.name}</span>
              <span className="ml-2 text-sm">— {p.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}