'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';
import AboutSong from '@/components/AboutSong';
import Link from 'next/link';

const STACK = ['Next.js', 'Vue', 'Go', 'Node.js'];
const STATS = [
  { value: '5', label: 'Internships' },
  { value: '12+', label: 'Projects' },
  { value: '3', label: 'HKI / IP' },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[min(1600px,92vw)] px-6 pt-12 pb-24">
      {/* Header block: avatar + label */}
      <motion.div variants={fadeUp(0)} initial="hidden" animate="show" className="flex items-center gap-3.5">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-[--accent-muted]">
          <Image
            src="/about/foto.jpg"
            alt="Achmad Rafly Khatami Zain"
            fill
            className="object-cover"
            sizes="56px"
            priority
          />
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.04em] text-[--accent]">
            About
          </p>
          <h1 className="text-[17px] font-medium text-[--text-primary] sm:text-xl">
            Achmad Rafly Khatami Zain
          </h1>
        </div>
      </motion.div>

      {/* Body text — single column, max-width for readability */}
      <motion.div variants={fadeUp(0.05)} initial="hidden" animate="show" className="mt-8 max-w-[560px]">
        <p className="text-[13px] leading-relaxed text-[--text-secondary] sm:text-sm">
          An enthusiastic individual with a strong desire to grow and explore new things. I&apos;m
          deeply interested in technology—especially web development—and I&apos;m committed to
          continuous learning and sharpening my craft. In every task I take on, I aim to deliver my
          best with focus, consistency, and a high level of dedication.
        </p>

        <p className="mt-4 text-[13px] leading-relaxed text-[--text-secondary] sm:text-sm">
          On the frontend, I gravitate toward clean, accessible interfaces with thoughtful motion and
          strong fundamentals:{' '}
          <span className="text-[--text-primary]">React, Next.js, Tailwind CSS</span> for the UI
          layer, and <span className="text-[--text-primary]">Node.js, Laravel</span> when I need to
          go full-stack. I care about the details—semantic HTML, performance budgets, predictable
          state, and design systems that scale. My default approach is to break work into small,
          shippable pieces so progress stays visible and momentum stays high.
        </p>

        <p className="mt-4 text-[13px] leading-relaxed text-[--text-secondary] sm:text-sm">
          Outside of coding, I enjoy{' '}
          <span className="text-[--text-primary]">listening to music</span> (often on repeat),
          <span className="text-[--text-primary]"> learning new things</span> through articles and
          tiny side projects, and unwinding with{' '}
          <span className="text-[--text-primary]">Teamfight Tactics</span>. I&apos;m also a
          <span className="text-[--text-primary]"> coffee</span> person—from quick brews to
          pour-overs—which keeps me focused and occasionally powers those late-night builds.
        </p>
      </motion.div>

      {/* Stack badges */}
      <motion.div variants={fadeUp(0.08)} initial="hidden" animate="show" className="mt-6 flex flex-wrap gap-1.5">
        {STACK.map((s) => (
          <span
            key={s}
            className="rounded bg-[--bg-raised] border border-[--border-subtle] px-2 py-0.5 text-[11px] text-[--text-secondary]"
          >
            {s}
          </span>
        ))}
      </motion.div>

      {/* Compact song widget */}
      <motion.div variants={fadeUp(0.1)} initial="hidden" animate="show">
        <AboutSong />
      </motion.div>

      {/* Quick stats */}
      <motion.div
        variants={fadeUp(0.12)}
        initial="hidden"
        animate="show"
        className="mt-12 grid grid-cols-3 gap-2.5"
      >
        {STATS.map((s) => (
          <div
            key={s.label}
            className="rounded-lg bg-[--bg-raised] border border-[--border-subtle] px-3 py-2.5 text-center"
          >
            <p className="text-[15px] font-medium text-[--text-primary]">{s.value}</p>
            <p className="mt-0.5 text-[10px] text-[--text-muted]">{s.label}</p>
          </div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div variants={fadeUp(0.14)} initial="hidden" animate="show" className="mt-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[--accent] transition-colors duration-150 hover:text-[--accent-hover]"
        >
          View my projects
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </motion.div>
    </div>
  );
}
