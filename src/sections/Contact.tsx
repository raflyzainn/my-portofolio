'use client';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/motion';

export default function Contact() {
  const LINKS = [
    { href: 'https://github.com/raflyzainn', label: 'GitHub' },
    { href: 'https://linkedin.com/in/raflyzainn', label: 'LinkedIn' },
  ];

  return (
    <section id="contact">
      <motion.h2
        variants={fadeUp(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-2xl font-bold text-[--text-primary] sm:text-3xl"
      >
        Contact
      </motion.h2>

      <motion.div
        variants={fadeUp(0.05)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-6 rounded-xl border border-[--border-subtle] bg-[--bg-raised] p-6"
      >
        <p className="text-[--text-secondary]">
          Open to collaborations and freelance work. Reach me via:
        </p>

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-4 flex flex-wrap items-center gap-3 text-sm"
        >
          {LINKS.map((l) => (
            <motion.a
              key={l.label}
              variants={fadeUp(0.1)}
              whileHover={{ y: -2 }}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[--border-subtle] px-4 py-2 text-[--text-secondary] transition-all duration-200 hover:border-[--accent] hover:text-[--accent]"
            >
              {l.label}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
