'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/motion';
import Typing from '@/components/Typing';

const CODE_SNIPPET = `<template>
  <Developer :profile="rafly" />
</template>

<script setup lang="ts">
const rafly = {
  role: 'Software Engineer',
  based: 'Jakarta, ID',
  main stack: ['Next.js', 'Vue', 'Go', 'Laravel'],
  currentlyAt: '?',
  learning: 'system design & ci/cd',
  status: 'shipping something new',
}

// still curious after 20+ features shipped
</script>`;

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-20">
      <motion.div
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative mx-auto grid max-w-[min(1600px,92vw)] items-center gap-10 px-6 lg:grid-cols-[1fr_1fr]"
      >
        {/* Left column — text */}
        <div>
          {/* Role badge */}
          <motion.span
            variants={fadeUp(0)}
            className="inline-flex items-center gap-2 rounded-full border border-[--border-subtle] bg-[--bg-raised] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[--text-muted]"
          >
            Software Engineer
            <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-[--success] shadow-[0_0_8px] shadow-[--success]/60" />
            Available
          </motion.span>

          {/* Name */}
          <motion.h1
            variants={fadeUp(0.1)}
            className="mt-5 text-balance font-extrabold leading-tight"
            style={{
              fontSize: 'clamp(2.75rem, 7vw, 5.5rem)',
              color: 'var(--text-primary)',
            }}
          >
            Achmad Rafly
            <br />
            <span style={{ color: 'var(--accent)' }}>Khatami Zain</span>
          </motion.h1>

          {/* Typing line */}
          <motion.p
            variants={fadeUp(0.16)}
            className="mt-3 text-lg sm:text-xl text-[--text-secondary]"
          >
            I&apos;m{' '}
            <Typing
              className="text-[--text-primary]"
              speed={65}
              pause={1200}
              words={[
                'building clean, accessible web apps.',
                'crafting interfaces with Next.js, Vue & Go.',
                'open for collabs & freelance.',
              ]}
            />
          </motion.p>

          {/* Subheading */}
          <motion.p
            variants={fadeUp(0.2)}
            className="mt-3 max-w-xl text-balance text-sm leading-relaxed text-[--text-muted]"
          >
            Front-end engineer focused on Next.js, Vue, and Go — building
            performant, accessible interfaces with clean architecture and
            thoughtful UX.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp(0.3)}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <Link
              href="#experience"
              className="rounded-full bg-[--accent] px-5 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-[--accent-hover] hover:scale-[1.03] hover:shadow-lg hover:shadow-[--accent]/20 focus:outline-none focus:ring-2 focus:ring-[--accent]/40"
            >
              Explore
            </Link>

            <a
              href="/cv/cv-raflyzainn.pdf"
              download
              aria-label="Download CV (PDF)"
              className="group rounded-full border border-[--border-strong] px-5 py-2 text-sm font-medium text-[--text-secondary] transition-all duration-200 hover:border-[--accent] hover:text-[--accent] focus:outline-none focus:ring-2 focus:ring-[--accent]/30"
            >
              Download CV
              <span className="mx-2 inline-block h-4 w-px bg-[--border-strong] align-middle group-hover:bg-[--accent]" />
              <span className="hidden sm:inline group-hover:btn-shine">PDF</span>
            </a>
          </motion.div>

          {/* Scroll cue */}
          <motion.a
            variants={fadeUp(0.45)}
            href="#experience"
            className="mt-10 inline-flex items-center gap-2 text-xs text-[--text-muted] hover:text-[--text-secondary]"
          >
            Scroll
            <svg
              className="h-4 w-4 float-slow"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M12 5v14m0 0l-5-5m5 5l5-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
        </div>

        {/* Right column — code snippet card + decorative elements */}
        <motion.div variants={fadeUp(0.2)} className="hidden lg:flex lg:flex-col lg:items-center lg:gap-6">
          {/* Code card */}
          <div
            className="w-full max-w-[420px] rounded-xl border border-[#2d2d3f] bg-[#1a1a2e] p-4 shadow-2xl transition-all duration-300 hover:border-[#3d3d5c] hover:shadow-[0_0_40px] hover:shadow-[--accent]/10"
          >
            {/* Terminal bar */}
            <div className="mb-3 flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-[10px] font-mono text-[--text-muted]">
                app.vue
              </span>
            </div>

            {/* Code content */}
            <pre className="overflow-x-auto font-mono text-[11px] leading-relaxed text-[#e0e0f0]">
              <code>
                {CODE_SNIPPET.split('\n').map((line, i) => (
                  <span key={i} className="block">
                    <span className="mr-3 inline-block w-5 text-right text-[#6a6a8a] select-none">
                      {i + 1}
                    </span>
                    {line}
                  </span>
                ))}
              </code>
            </pre>
          </div>

          {/* Decorative dot-grid */}
          <div className="dot-grid h-12 w-12 opacity-30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
