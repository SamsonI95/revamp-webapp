import { profile } from "@/data/portfolio";
import { HandUnderline } from "./Decor";
import { HeroVisual } from "./HeroVisual";
import { Reveal } from "./Motion";

export function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl gap-14 px-5 pb-20 pt-12 md:grid-cols-12 md:gap-10 md:px-8 md:pb-28 md:pt-20">
      <div className="flex flex-col justify-center md:col-span-7">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-espresso/75">
            <span aria-hidden="true" className="h-px w-8 bg-espresso/40" />
            {profile.eyebrow}
          </p>
        </Reveal>

        <h1 className="mt-8 font-serif text-[clamp(2.9rem,7.4vw,6.25rem)] font-medium leading-[0.98] tracking-tight">
          <span className="block">Thoughtful interfaces.</span>
          <span className="relative inline-block italic text-terracotta">
            Real products.
            <HandUnderline className="text-terracotta" />
          </span>
          <span className="block">A little personality.</span>
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-espresso/85">{profile.intro}</p>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href="#work"
            className="inline-flex min-h-12 items-center rounded-full bg-terracotta px-7 text-[19px] font-semibold text-warm-white transition-colors hover:bg-espresso"
          >
            Explore my work <span aria-hidden="true" className="ml-2">↗</span>
          </a>
          <a href="#about" className="underline-sweep inline-flex min-h-12 items-center font-medium">
            A little about me
          </a>
        </div>

        <p className="mt-10 inline-flex w-fit items-center gap-3 rounded-full border border-espresso/20 bg-warm-white px-4 py-2 font-mono text-xs">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-olive" />
          Current focus: {profile.currentFocus}
        </p>
      </div>

      <div className="md:col-span-5">
        <HeroVisual />
      </div>
    </section>
  );
}
