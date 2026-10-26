import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-start justify-center gap-6 px-5 md:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-espresso/70">404</p>
      <h1 className="font-serif text-5xl font-medium leading-tight md:text-7xl">This page wandered off.</h1>
      <Link href="/" className="underline-sweep inline-flex min-h-11 items-center font-medium">
        Back to the portfolio
      </Link>
    </main>
  );
}
