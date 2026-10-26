import { workSteps } from "@/data/portfolio";
import { HandArrow } from "./Decor";
import { Reveal } from "./Motion";

const panelStyles = ["bg-peach", "bg-butter", "bg-espresso text-cream"];

export function HowIWork() {
  return (
    <section id="process" aria-labelledby="process-heading" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-espresso/70">
          <span className="text-terracotta">04</span>
          <span aria-hidden="true" className="h-px w-8 bg-espresso/40" />
          Process
        </p>
        <h2 id="process-heading" className="mt-6 font-serif text-5xl font-medium leading-[1.02] tracking-tight md:text-7xl">
          How I work.
        </h2>
      </Reveal>

      <ol className="mt-14 grid gap-6 md:grid-cols-3 md:gap-0">
        {workSteps.map((step, index) => (
          <li key={step.title} className="relative">
            <Reveal delay={index * 0.08} className="h-full">
              <div
                className={`flex h-full min-h-72 flex-col justify-between rounded-[28px] p-7 md:mx-3 md:p-8 ${panelStyles[index]}`}
              >
                <span className="font-mono text-sm">{String(index + 1).padStart(2, "0")} —</span>
                <div className="mt-12">
                  <h3 className="font-serif text-4xl">{step.title}</h3>
                  <p className="mt-4 text-base leading-relaxed">{step.body}</p>
                </div>
              </div>
            </Reveal>
            {index < workSteps.length - 1 ? (
              <HandArrow className="absolute -right-10 top-1/2 hidden h-10 w-20 -translate-y-1/2 text-espresso/60 md:block" />
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
