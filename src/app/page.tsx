import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Hero } from "@/components/portfolio/Hero";
import { HowIWork } from "@/components/portfolio/HowIWork";
import { MotionRoot } from "@/components/portfolio/Motion";
import { SiteFooter } from "@/components/portfolio/SiteFooter";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { Skills } from "@/components/portfolio/Skills";
import { Work } from "@/components/portfolio/Work";

export default function Home() {
  return (
    <MotionRoot>
      <SiteHeader />
      <main>
        <Hero />
        <Work />
        <About />
        <Skills />
        <HowIWork />
        <Contact />
      </main>
      <SiteFooter />
    </MotionRoot>
  );
}
