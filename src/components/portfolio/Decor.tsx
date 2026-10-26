import { cn } from "@/lib/utils";

export function HandUnderline({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 300 16"
      preserveAspectRatio="none"
      className={cn("pointer-events-none absolute -bottom-3 left-0 h-3 w-full", className)}
    >
      <path
        d="M3 10 C 60 2, 120 16, 180 7 S 270 4, 297 9"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Star({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={cn("h-4 w-4", className)}>
      <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" fill="currentColor" />
    </svg>
  );
}

export function HandArrow({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 124 48" fill="none" className={cn("h-12 w-28", className)}>
      <path d="M4 40 C 40 4, 90 4, 116 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M104 25 L117 31 L110 42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
