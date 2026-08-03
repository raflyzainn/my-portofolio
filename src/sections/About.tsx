'use client';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/motion';

export default function About() {
  return (
    <section id="about" className="mt-20">
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="grid gap-6 sm:grid-cols-[1fr_1.5fr]"
      >
        <motion.div variants={fadeUp(0)}>
          <h2 className="text-2xl font-bold text-[--text-primary] sm:text-3xl">
            About
          </h2>
          <p className="mt-3 text-[--text-secondary]">
            I&apos;m a developer passionate about crafting accessible, pixel-perfect
            interfaces, blending thoughtful design with robust engineering.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-[--text-muted]">
            <li>
              &bull; Focus: Frontend, UI Engineering, Software Engineering, Full
              Stack Development
            </li>
            <li>&bull; Approach: clean, simple, stands out</li>
          </ul>
        </motion.div>

        <motion.div
          variants={fadeUp(0.05)}
          className="rounded-xl border border-[--border-subtle] bg-[--bg-raised] p-5"
        >
          <ul className="grid grid-cols-2 gap-3 text-sm text-[--text-secondary]">
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>Node.js</li>
            <li>Git &amp; CI/CD</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
