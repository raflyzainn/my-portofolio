import Nav from '@/components/home/Nav';
import Hero from '@/components/home/Hero';
import Experience from '@/components/home/Experience';
import Skills from '@/components/home/Skills';
import Projects from '@/components/home/Projects';
import Contact from '@/components/home/Contact';

export default function Home() {
  return (
    <>
      <Nav />
      <div className="mx-auto max-w-[680px] px-5 sm:px-6">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
