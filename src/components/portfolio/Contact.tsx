import { profile } from "@/data/portfolio";
import { HandArrow, Star } from "./Decor";
import { Reveal } from "./Motion";

export function Contact() {
  const primaryHref = profile.email ? `mailto:${profile.email}` : profile.github;
  const primaryLabel = profile.email ? "Start a conversation" : "Say hello on GitHub";

  const links = [
    profile.email && { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    profile.github && { label: "GitHub", value: "SamsonI95", href: profile.github },
    profile.linkedin && { label: "LinkedIn", value: "Profile", href: profile.linkedin },
  ].filter(Boolean) as { label: string; value: string; href: string }[];

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-espresso text-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-cream/70">
            <span className="text-butter">05</span>
            <span aria-hidden="true" className="h-px w-8 bg-cream/40" />
            Contact
          </p>
          <h2 id="contact-heading" className="relative mt-6 max-w-4xl font-serif text-5xl font-medium leading-[1.02] tracking-tight md:text-8xl">
            Have something good in mind?
            <Star className="absolute -right-4 -top-2 h-7 w-7 text-terracotta md:-right-12" />
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 grid gap-12 md:grid-cols-12 md:items-end">
          <p className="max-w-xl text-lg leading-relaxed text-cream/85 md:col-span-6">
            I&apos;m interested in building useful products, thoughtful interfaces, and digital experiences that people enjoy using.
          </p>

          <div className="relative md:col-span-6 md:justify-self-end">
            <a
              href={primaryHref}
              target={profile.email ? undefined : "_blank"}
              rel={profile.email ? undefined : "noopener noreferrer"}
              className="inline-flex min-h-14 items-center rounded-full bg-terracotta px-8 text-[19px] font-semibold text-warm-white transition-colors hover:bg-cream hover:text-espresso"
            >
              {primaryLabel} <span aria-hidden="true" className="ml-2">↗</span>
            </a>
            <HandArrow className="absolute -top-10 right-24 hidden text-butter md:block" />
          </div>

          {links.length > 0 ? (
            <ul className="grid gap-4 border-t border-cream/20 pt-8 sm:grid-cols-3 md:col-span-12">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group block"
                  >
                    <span className="block font-mono text-xs uppercase tracking-[0.16em] text-cream/60">{link.label}</span>
                    <span className="underline-sweep mt-2 inline-block font-serif text-2xl">{link.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
