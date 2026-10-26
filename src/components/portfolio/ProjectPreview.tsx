import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ProjectVisual } from "@/data/portfolio";
import { CubeStage } from "./CubeStage";

export function previewCaption(visual: ProjectVisual) {
  if (visual.kind === "image") return "Product screenshot";
  if (visual.kind === "cube") return "Interactive preview";
  return "Illustrative mockup";
}

export function ProjectPreview({ visual, className }: { visual: ProjectVisual; className?: string }) {
  if (visual.kind === "image") {
    return (
      <div
        className={cn("relative overflow-hidden bg-espresso", className)}
        style={{ aspectRatio: `${visual.width} / ${visual.height}` }}
      >
        <Image
          src={visual.src}
          alt={visual.alt}
          fill
          sizes="(min-width: 768px) 60vw, 100vw"
          className="object-contain object-center"
        />
      </div>
    );
  }

  if (visual.kind === "cube") {
    return (
      <div className={cn("relative overflow-hidden bg-espresso", className)}>
        <CubeStage className="absolute inset-0" />
      </div>
    );
  }

  return (
    <div aria-hidden="true" className={cn("relative overflow-hidden", className)}>
      <Mockup variant={visual.variant} />
    </div>
  );
}

function Mockup({ variant }: { variant: Extract<ProjectVisual, { kind: "mock" }>["variant"] }) {
  if (variant === "dashboard") {
    return (
      <div className="flex h-full w-full bg-warm-white">
        <div className="flex w-[22%] flex-col gap-3 bg-espresso p-4">
          <span className="h-2.5 w-3/4 rounded-full bg-cream/40" />
          <span className="h-2 w-1/2 rounded-full bg-cream/20" />
          <span className="h-2 w-2/3 rounded-full bg-cream/20" />
          <span className="h-2 w-1/2 rounded-full bg-cream/20" />
        </div>
        <div className="flex flex-1 flex-col gap-4 p-5">
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((item) => (
              <div key={item} className="rounded-lg border border-espresso/15 p-3">
                <span className="block h-2 w-2/3 rounded-full bg-espresso/25" />
                <span className="mt-3 block h-3 w-1/2 rounded-full bg-terracotta/70" />
              </div>
            ))}
          </div>
          <div className="flex flex-1 items-end gap-2 rounded-lg border border-espresso/15 p-4">
            {[38, 62, 45, 80, 56, 72, 50, 88].map((height, index) => (
              <span
                key={index}
                className={index % 3 === 1 ? "flex-1 rounded-t-sm bg-olive" : "flex-1 rounded-t-sm bg-peach"}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="space-y-2">
            {[0, 1, 2].map((row) => (
              <div key={row} className="flex items-center gap-3">
                <span className="h-4 w-4 rounded-full bg-butter" />
                <span className="h-2 flex-1 rounded-full bg-espresso/15" />
                <span className="h-2 w-12 rounded-full bg-espresso/15" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (variant === "fintech") {
    return (
      <div className="flex h-full w-full flex-col justify-center gap-5 bg-olive p-6 md:p-8">
        <div className="flex items-center gap-2">
          {[0, 1, 2].map((step) => (
            <span key={step} className="flex flex-1 items-center gap-2">
              <span className={cn("h-3 w-3 rounded-full", step === 0 ? "bg-butter" : "bg-cream/40")} />
              <span className={cn("h-0.5 flex-1 rounded-full", step === 0 ? "bg-butter" : "bg-cream/30")} />
            </span>
          ))}
        </div>
        <div className="rounded-2xl bg-cream p-5">
          <span className="block h-2 w-1/3 rounded-full bg-olive/50" />
          <span className="mt-4 block h-7 w-1/2 rounded-md bg-espresso/80" />
          <div className="mt-5 space-y-2">
            <span className="block h-2 w-full rounded-full bg-espresso/15" />
            <span className="block h-2 w-4/5 rounded-full bg-espresso/15" />
          </div>
        </div>
        <div className="flex items-center justify-center rounded-2xl border-2 border-dashed border-cream/60 py-4">
          <span className="h-2 w-1/3 rounded-full bg-cream/60" />
        </div>
      </div>
    );
  }

  if (variant === "shop") {
    return (
      <div className="flex h-full w-full flex-col gap-4 bg-peach p-5 md:p-7">
        <div className="rounded-2xl bg-espresso p-5 text-cream">
          <span className="block h-2 w-1/4 rounded-full bg-cream/40" />
          <svg viewBox="0 0 200 60" className="mt-4 h-16 w-full" preserveAspectRatio="none">
            <polyline
              points="0,48 30,40 60,44 90,26 120,32 150,14 200,20"
              fill="none"
              stroke="#f2d477"
              strokeWidth="3"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="flex flex-1 flex-col gap-3 rounded-2xl bg-warm-white p-4">
          {[0, 1, 2].map((row) => (
            <div key={row} className="flex items-center gap-3">
              <span className="h-8 w-8 shrink-0 rounded-full bg-peach" />
              <span className="flex-1 space-y-2">
                <span className="block h-2 w-2/3 rounded-full bg-espresso/30" />
                <span className="block h-2 w-1/3 rounded-full bg-espresso/15" />
              </span>
              <span className="h-6 w-14 rounded-full bg-butter" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-col justify-between bg-butter p-6 md:p-8">
      <span className="h-px w-full bg-espresso/40" />
      <p className="font-serif text-[clamp(2.25rem,6vw,4.5rem)] italic leading-none text-espresso">Michaelson</p>
      <div className="flex items-end justify-between gap-4">
        <span className="h-24 w-24 bg-peach md:h-32 md:w-32" />
        <span className="h-3 w-1/3 rounded-full bg-espresso/25" />
      </div>
    </div>
  );
}
