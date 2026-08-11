'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';
import { projects } from '@/data/portfolio';
import ProjectItem from './ProjectItem';

export default function Projects() {
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const visibleProjects = expanded ? projects : projects.slice(0, 3);
  const hasMore = projects.length > 3;

  const handleToggle = () => {
    if (expanded) {
      setExpanded(false);
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      setExpanded(true);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="scroll-mt-20 py-9 border-b border-[--border-subtle]"
    >
      <motion.div
        variants={fadeUp(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <p className="text-xs tracking-wide text-[--text-muted] mb-4">
          projects
        </p>

        <div>
          {visibleProjects.map((item, i) => (
            <ProjectItem
              key={item.id}
              item={item}
              index={i}
              isLast={i === visibleProjects.length - 1}
            />
          ))}
        </div>

        {hasMore && (
          <div className="mt-4">
            <button
              onClick={handleToggle}
              aria-expanded={expanded}
              className="flex items-center gap-1.5 text-xs text-[--text-muted] hover:text-[--text-primary] transition-colors"
            >
              {expanded ? (
                <>
                  show less
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path d="M18 15l-6-6-6 6" />
                  </svg>
                </>
              ) : (
                <>
                  show {projects.length - 3} more projects
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}
      </motion.div>
    </section>
  );
}
