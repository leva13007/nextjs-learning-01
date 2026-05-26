export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-4 font-sans">
      <h1 className="text-3xl font-bold">About Me</h1>
      <p className="text-zinc-600 dark:text-zinc-400 max-w-md text-center">
        Learning Next.js App Router in public — building real projects one session at a time.
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 max-w-md text-center">
        Each session is streamed live on YouTube and documented in this repository.
      </p>
    </div>
  );
}