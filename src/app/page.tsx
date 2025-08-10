import Hero from "@/sections/Hero";
import Skills from "@/sections/Skills";
import Experience from "@/sections/Experience";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <div id="home" className="relative">
      <main className="mx-auto max-w-5xl px-6 pt-10 pb-24">
        <Hero />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
