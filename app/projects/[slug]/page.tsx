import { getProject, projects } from 'lib/projects';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return [...projects.map((p) => ({ slug: p.slug }))];
}

export default async function ProjectPage(props: PageProps<'/projects/[slug]'>) {
  const { slug } = await props.params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-4 font-sans">
      <h1 className="text-3xl font-bold">{project.name}</h1>
      <p className="text-zinc-600 dark:text-zinc-400 max-w-md text-center">
        {project.description}
      </p>
    </div>
  );
}