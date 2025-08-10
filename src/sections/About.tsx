'use client';
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

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
          <h2 className="text-2xl sm:text-3xl font-bold">About</h2>
          <p className="mt-3 text-slate-400">
            I’m a developer passionate about crafting accessible, pixel-perfect interfaces,
            blending thoughtful design with robust engineering.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>• Focus: Frontend, UI Engineering, Software Engineering, Full Stack Development</li>
            <li>• Approach: clean, simple, stands out</li>
          </ul>
        </motion.div>

        <motion.div
          variants={fadeUp(0.05)}
          className="rounded-xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur"
        >
          <ul className="grid grid-cols-2 gap-3 text-sm text-slate-300">
            <li>Next.js</li><li>TypeScript</li><li>React</li>
            <li>Tailwind CSS</li><li>Node.js</li><li>Git & CI/CD</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
