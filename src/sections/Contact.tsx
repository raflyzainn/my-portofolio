'use client';
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

export default function Contact() {
  const LINKS = [
    { href: "https://github.com/raflyzainn", label: "GitHub" },
    { href: "https://linkedin.com/in/raflyzainn", label: "LinkedIn" },
  ];

  return (
    <section id="contact" className="mt-20">
      <motion.h2
        variants={fadeUp(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl font-bold"
      >
        Contact
      </motion.h2>

      <motion.p
        variants={fadeUp(.05)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-3 text-slate-400"
      >
        Open to collaborations and freelance work. Reach me via:
      </motion.p>

      <motion.div
        variants={stagger(.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-4 flex flex-wrap items-center gap-3 text-sm"
      >
        {LINKS.map((l) => (
          <motion.a
            key={l.label}
            variants={fadeUp(.1)}
            whileHover={{ y: -2 }}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="rounded-full border border-white/15 px-4 py-2 text-slate-200 hover:bg-white/10"
          >
            {l.label}
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
