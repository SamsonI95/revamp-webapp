import { projects } from "@/data/portfolio";
import { Star } from "./Decor";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Motion";

const layout = [
  "md:col-span-7",
  "md:col-span-5 md:mt-24",
  "md:col-span-5 md:mt-8",
  "md:col-span-7 md:mt-16",
  "md:col-span-6",
  "md:col-span-6",
];

export function Work() {
  return (
    <section id="work" aria-labelledby="work-heading" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-espresso/70">
          <span className="text-terracotta">01</span>
          <span aria-hidden="true" className="h-px w-8 bg-espresso/40" />
          Selected work
        </p>
        <h2 id="work-heading" className="relative mt-6 max-w-3xl font-serif text-5xl font-medium leading-[1.02] tracking-tight md:text-7xl">
          Things I&apos;ve brought to life.
          <Star className="absolute -right-6 -top-4 h-6 w-6 text-butter md:-right-10" />
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-espresso/85">
          A collection of products, interfaces, and experiments I&apos;ve worked on, each with its own set of challenges.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-8 md:grid-cols-12 md:gap-x-8 md:gap-y-12">
        {projects.map((project, index) => (
          <ProjectCard key={project.index} project={project} className={layout[index]} />
        ))}
      </div>
    </section>
  );
}
