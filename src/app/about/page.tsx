'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';

const STATS = [
  { value: '5', label: 'Internships' },
  { value: '12+', label: 'Projects' },
  { value: '3', label: 'HKI / IP' },
];

const SECTIONS = [
  {
    num: '01',
    label: 'who I am',
    body: (
      <>
        An enthusiastic individual with a strong desire to grow and explore new
        things. I&apos;m deeply interested in technology especially web
        development and I&apos;m committed to continuous learning and sharpening
        my craft. In every task I take on, I aim to deliver my best with focus,
        consistency, and a high level of dedication.
      </>
    ),
  },
  {
    num: '02',
    label: 'what I work with',
    body: (
      <>
        On the frontend, I gravitate toward clean, accessible interfaces with
        thoughtful motion and strong fundamentals:{' '}
        <span className="text-[--text-primary]">React, Next.js, Tailwind CSS</span>{' '}
        for the UI layer, and{' '}
        <span className="text-[--text-primary]">Node.js, Laravel, Go</span> when I
        need to go full-stack. I care about semantic HTML, performance budgets, and
        design systems that scale.
      </>
    ),
  },
  {
    num: '03',
    label: 'outside of code',
    body: (
      <>
        I enjoy{' '}
        <span className="text-[--text-primary]">listening to music</span> (often on
        repeat), unwinding with{' '}
        <span className="text-[--text-primary]">Teamfight Tactics</span>, and
        exploring new things through articles and tiny side projects. I&apos;m also a{' '}
        <span className="text-[--text-primary]">coffee</span> person from quick
        brews to pour overs.
      </>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[680px] px-6 pt-12 pb-24 font-sans">
      {/* Header row */}
      <motion.div
        variants={fadeUp(0)}
        initial="hidden"
        animate="show"
        className="flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <h1 className="text-[26px] font-medium text-[--text-primary]">
            Achmad Rafly Khatamy Zain
          </h1>
          <p className="mt-1 text-[13px] text-[--text-muted]">
            Software Engineer - Jakarta, Indonesia
          </p>
        </div>
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-[--border-subtle]">
          <Image
            src="/about/foto.jpg"
            alt="Achmad Rafly Khatami Zain"
            fill
            className="object-cover"
            sizes="64px"
            priority
          />
        </div>
      </motion.div>

      {/* Divider */}
      <div className="mt-6 h-px bg-[--border-subtle]" />

      {/* Sections */}
      <div className="mt-8 space-y-8">
        {SECTIONS.map((section, i) => (
          <motion.div
            key={section.num}
            variants={fadeUp(0.05 * (i + 1))}
            initial="hidden"
            animate="show"
          >
            <div className="flex items-baseline gap-3">
              <span className="w-6 shrink-0 text-[13px] font-medium text-[--accent]">
                {section.num}
              </span>
              <span className="text-[13px] font-medium text-[--text-primary]">
                {section.label}
              </span>
            </div>
            <div className="mt-2 pl-9">
              <p className="text-[14px] leading-[1.75] text-[--text-secondary]">
                {section.body}
              </p>
            </div>

            {/* Stats inside section 02 */}
            {section.num === '02' && (
              <div className="mt-6 flex items-end gap-8 pl-9">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <p className="text-[20px] font-medium text-[--text-primary]">
                      {s.value}
                    </p>
                    <p className="mt-0.5 text-[11px] text-[--text-muted]">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div variants={fadeUp(0.2)} initial="hidden" animate="show" className="mt-10">
        <Link
          href="/projects"
          className="inline-block rounded-[8px] border border-[--accent] px-5 py-[9px] text-[13px] font-medium text-[--accent] transition-colors duration-150 hover:bg-[--accent] hover:text-white"
        >
          View my projects
        </Link>
      </motion.div>
    </div>
  );
}
