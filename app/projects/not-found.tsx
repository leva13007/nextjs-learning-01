import Link from 'next/link';

export default function ProjectNotFound() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-4 font-sans">
      <h1 className="text-3xl font-bold">Project not found</h1>
      <Link href="/projects" className="text-sm underline">
        ← All projects
      </Link>
    </div>
  );
}