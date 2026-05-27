import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-4 bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-3xl font-bold">Welcome</h1>
      <p className="text-zinc-600 dark:text-zinc-400 max-w-sm text-center">
        A mini-site built with Next.js App Router — file-based routing in action.
      </p>
      <div className="flex gap-4 text-sm">
        <Link href="/about" className="underline hover:text-zinc-900 dark:hover:text-zinc-100">About</Link>
        <Link href="/projects" className="underline hover:text-zinc-900 dark:hover:text-zinc-100">Projects</Link>
      </div>
    </div>
  );
}