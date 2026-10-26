import { aboutParagraphs, principles, profile } from "@/data/portfolio";
import { Reveal } from "./Motion";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-warm-white">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 md:grid-cols-12 md:gap-10 md:px-8 md:py-28">
        <Reveal className="md:col-span-7">
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-espresso/70">
            <span className="text-terracotta">02</span>
            <span aria-hidden="true" className="h-px w-8 bg-espresso/40" />
            About
          </p>
          <h2 id="about-heading" className="mt-6 font-serif text-5xl font-medium leading-[1.02] tracking-tight md:text-6xl">
            Developer by craft.
            <span className="block italic text-terracotta">Curious by nature.</span>
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-espresso/85">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-4 md:col-start-9 md:self-end">
          <div className="rounded-[28px] bg-peach p-7 md:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-espresso/70">Principles</p>
            <ul className="mt-5 divide-y divide-espresso/20">
              {principles.map((principle, index) => (
                <li key={principle} className="flex items-baseline gap-4 py-4">
                  <span className="font-mono text-xs text-espresso/60">0{index + 1}</span>
                  <span className="font-serif text-2xl leading-snug">{principle}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-espresso/20 pt-5 font-mono text-xs">
              Current focus: {profile.currentFocus}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
