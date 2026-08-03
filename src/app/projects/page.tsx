import Projects from '@/sections/Projects';

export const metadata = { title: 'Projects — Rafly' };

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-[min(1600px,92vw)] px-6 pt-12 pb-24">
      <Projects />
    </div>
  );
}
