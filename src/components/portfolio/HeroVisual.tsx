import Image from "next/image";
import { Reveal } from "./Motion";
import { CubeStage } from "./CubeStage";
import { Star } from "./Decor";

const dashboardBars = [42, 68, 36, 80, 56, 92, 64];

export function HeroVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto aspect-[4/5] w-full max-w-md select-none md:max-w-none">
      <Reveal delay={0.1} className="absolute left-0 top-[4%] w-[70%] -rotate-3">
        <div className="rounded-2xl bg-warm-white p-4 text-cream shadow-[8px_8px_0_0_var(--color-olive)]">
          <div className="overflow-hidden rounded-xl bg-espresso">
            <Image
              src="/ziona-admin-screen.png"
              alt=""
              width={758}
              height={576}
              sizes="(min-width: 768px) 20vw, 60vw"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-espresso/70">
            <span>Ziona</span>
            <span>Ticket 01</span>
          </div>
          <span className="absolute -left-2.5 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-cream" />
          <span className="absolute -right-2.5 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-cream" />
        </div>
      </Reveal>
      {/* <Reveal className="absolute left-0 top-[4%] w-[70%] -rotate-3">
        <div className="rounded-2xl bg-espresso p-4 text-cream shadow-[8px_8px_0_0_var(--color-olive)]">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-cream/70">Overview</span>
            <span className="flex gap-1">
              <span className="h-2 w-2 rounded-full bg-terracotta" />
              <span className="h-2 w-2 rounded-full bg-butter" />
              <span className="h-2 w-2 rounded-full bg-peach" />
            </span>
          </div>
          <div className="mt-4 flex h-24 items-end gap-2">
            {dashboardBars.map((height, index) => (
              <span
                key={index}
                className={index % 2 === 0 ? "w-full rounded-t-sm bg-cream/25" : "w-full rounded-t-sm bg-butter"}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="mt-4 space-y-2">
            <span className="block h-2 w-3/4 rounded-full bg-cream/20" />
            <span className="block h-2 w-1/2 rounded-full bg-cream/20" />
          </div>
        </div>
      </Reveal> */}

      <Reveal delay={0.1} className="absolute right-0 top-[32%] w-[62%] rotate-3">
        <div className="relative rounded-2xl bg-warm-white p-3 shadow-[8px_8px_0_0_var(--color-peach)]">
          <div className="overflow-hidden rounded-xl bg-espresso">
            <Image
              src="/AboutUsTicketWallet.png"
              alt=""
              width={758}
              height={576}
              sizes="(min-width: 768px) 20vw, 60vw"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-espresso/70">
            <span>WarbleLive</span>
            <span>Ticket 01</span>
          </div>
          <span className="absolute -left-2.5 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-cream" />
          <span className="absolute -right-2.5 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-cream" />
        </div>
      </Reveal>

      <Reveal delay={0.2} className="absolute bottom-[6%] left-[6%] h-44 w-44">
        <CubeStage />
      </Reveal>

      <span className="absolute right-[4%] top-0 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-terracotta">
        <Star />
        Fig. 01
      </span>
      <span className="absolute bottom-[8%] right-[6%] font-mono text-[11px] uppercase tracking-[0.16em] text-olive">
        Interfaces / 3D
      </span>
    </div>
  );
}
