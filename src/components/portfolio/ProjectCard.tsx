"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/portfolio";
import { Reveal } from "./Motion";
import { ProjectPreview, previewCaption } from "./ProjectPreview";

const statusStyles: Record<Project["status"], string> = {
  Live: "bg-espresso text-cream",
  "Live - Limited Access": "border border-terracotta text-espresso",
  "Case study": "bg-peach text-espresso",
  Concept: "bg-butter text-espresso",
  Interactive: "border border-terracotta text-espresso",
};

export function ProjectCard({ project, className }: { project: Project; className?: string }) {
  const [open, setOpen] = useState(false);
  const panelId = `project-${project.index}-details`;

  return (
    <Reveal className={cn("h-full", className)}>
      <article className="group flex h-full flex-col rounded-[28px] border border-espresso/15 bg-warm-white p-4 transition-transform duration-300 ease-out hover:-translate-y-1 focus-within:-translate-y-1 motion-reduce:transform-none md:p-5">
        <ProjectPreview visual={project.visual} className="aspect-[16/11] rounded-2xl" />

        <div className="mt-4 flex items-start justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.14em] text-espresso/70">
          <span>
            {project.index} · {previewCaption(project.visual)}
          </span>
          <span className={cn("shrink-0 rounded-full px-3 py-1", statusStyles[project.status])}>{project.status}</span>
        </div>

        <h3 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">{project.name}</h3>
        <p className="mt-1 text-sm font-medium text-terracotta">{project.category}</p>
        <p className="mt-4 text-base leading-relaxed text-espresso/85">{project.summary}</p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-6">
          <button
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-espresso/25 px-4 text-sm font-medium transition-colors hover:border-terracotta hover:text-terracotta"
          >
            {open ? "Hide details" : "Read details"}
            <span aria-hidden="true">{open ? "−" : "+"}</span>
          </button>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-sweep inline-flex min-h-11 items-center font-medium text-terracotta"
            >
              Visit live site ↗
            </a>
          ) : null}
        </div>

        <AnimatePresence initial={false}>
          {open ? (
            <motion.div
              key="details"
              id={panelId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-6 space-y-6 border-t border-espresso/15 pt-6">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-espresso/60">The problem it solves</p>
                  <p className="mt-2 leading-relaxed">{project.purpose}</p>
                </div>

                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-espresso/60">Role</p>
                  <p className="mt-2">{project.role}</p>
                </div>

                {project.stack.length > 0 ? (
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-espresso/60">Stack</p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <li key={tech} className="rounded-full bg-cream px-3 py-1 text-sm">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {project.features ? (
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-espresso/60">
                      {project.features.label}
                    </p>
                    <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                      {project.features.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm">
                          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-olive" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {project.secondaryImages ? (
                  <div className="grid grid-cols-2 gap-3">
                    {project.secondaryImages.map((image) => (
                      <div
                        key={image.src}
                        className="relative overflow-hidden rounded-xl bg-espresso"
                        style={{ aspectRatio: `${image.width} / ${image.height}` }}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(min-width: 768px) 30vw, 45vw"
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </article>
    </Reveal>
  );
}
