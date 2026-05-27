import { projects } from 'lib/projects';
import Link from 'next/link';

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1">
      <nav className="w-52 shrink-0 border-r border-zinc-200 dark:border-zinc-800 py-6 px-4 flex flex-col gap-1">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 py-1 hover:underline"
          >
            {p.name}
          </Link>
        ))}
      </nav>
      <div className="flex flex-col flex-1">{children}</div>
    </div>
  );
}