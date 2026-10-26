import { profile } from "@/data/portfolio";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false">
      <path
        d="M40 6 C 54 8, 60 22, 57 36 C 54 52, 40 60, 26 56 C 12 52, 6 40, 9 26 C 12 12, 26 4, 40 6 Z"
        className="fill-peach"
      />
      <path d="M32 9 L51 20 L32 31 L13 20 Z" className="fill-butter stroke-espresso" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M13 20 L32 31 L32 55 L13 44 Z" className="fill-terracotta stroke-espresso" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M51 20 L32 31 L32 55 L51 44 Z" className="fill-olive stroke-espresso" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark className="h-9 w-9 shrink-0" />
      <span className="font-serif text-xl font-semibold tracking-tight">
        {profile.shortName}
        <span className="text-terracotta">.</span>
      </span>
    </span>
  );
}
