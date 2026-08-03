import Hero from '@/sections/Hero';
import Skills from '@/sections/Skills';
import Experience from '@/sections/Experience';
// import Certs from '@/sections/Certs';
import Contact from '@/sections/Contact';

export default function Home() {
  return (
    <div id="home">
      {/* Hero — full bleed */}
      <Hero />

      {/* Experience — white bg */}
      <div className="bg-[--bg-base]">
        <div className="mx-auto max-w-[min(1600px,92vw)] px-6 pt-4 pb-20">
          <Experience />
        </div>
      </div>

      {/* Skills — off-white bg, soft gradient fade from white */}
      <div className="relative bg-[--bg-raised]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[--bg-base] to-transparent" />
        <div className="mx-auto max-w-[min(1600px,92vw)] px-6 py-20">
          <Skills />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-[--bg-base]" />
      </div>

      {/* Certs — white bg
      <div className="bg-[--bg-base]">
        <div className="mx-auto max-w-[min(1600px,92vw)] px-6 py-20">
          <Certs />
        </div>
      </div> */}

      {/* Contact — coral accent divider at top */}
      <div className="relative bg-[--bg-base]">
        <div className="mx-auto max-w-[min(1600px,92vw)] px-6">
          <div className="flex items-center gap-3 pt-16 pb-8">
            <span className="h-px flex-1 bg-[--border-subtle]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[--accent]" />
            <span className="h-px w-12 bg-[--accent-muted]" />
          </div>
          <Contact />
        </div>
        <div className="pb-16" />
      </div>
    </div>
  );
}
