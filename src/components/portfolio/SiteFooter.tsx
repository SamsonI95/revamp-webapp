import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-espresso/15 bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 font-mono text-xs text-espresso/70 sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#top" className="underline-sweep inline-flex min-h-11 items-center self-start sm:self-auto">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
