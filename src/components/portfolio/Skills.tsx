import { skillGroups } from "@/data/portfolio";
import { Reveal } from "./Motion";

const accents = ["bg-terracotta", "bg-olive", "bg-butter", "bg-peach"];

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-espresso/70">
          <span className="text-terracotta">03</span>
          <span aria-hidden="true" className="h-px w-8 bg-espresso/40" />
          Skills and toolkit
        </p>
        <h2 id="skills-heading" className="mt-6 font-serif text-5xl font-medium leading-[1.02] tracking-tight md:text-7xl">
          My everyday tools.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, groupIndex) => (
          <Reveal key={group.title} delay={groupIndex * 0.05}>
            <div className="h-full rounded-[28px] border border-espresso/15 bg-warm-white p-6 md:p-8">
              <div className="flex items-center gap-4">
                <span className={`h-3 w-10 rounded-full ${accents[groupIndex]}`} aria-hidden="true" />
                <h3 className="font-serif text-2xl">{group.title}</h3>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <li key={item} className="rounded-full border border-espresso/20 px-4 py-2 text-sm font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
