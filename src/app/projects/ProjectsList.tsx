'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/motion';

type Tag = { label: string; primary: boolean };

type Project = {
  title: string;
  year: string;
  desc: string;
  liveUrl?: string;
  repoUrl?: string;
  tags: Tag[];
};

const PROJECTS: Project[] = [
  {
    title: 'AI Eye Disease Screening',
    year: '2025',
    desc: 'Upload eye photo → AI flags conditions → doctor verifies.',
    liveUrl: 'https://intellisight.humicprototyping.com/',
    tags: [
      { label: 'React', primary: true },
      { label: 'Node', primary: true },
    ],
  },
  {
    title: 'ConnectServes',
    year: '2025',
    desc: 'Two-sided services marketplace: providers list, customers book.',
    repoUrl: 'https://github.com/raflyzainn/ConnectServes',
    tags: [
      { label: 'Flask', primary: true },
      { label: 'HTML', primary: false },
      { label: 'CSS', primary: false },
    ],
  },
  {
    title: 'EduMap Bandung',
    year: '2025',
    desc: 'HS accreditation across Bandung Regency with interactive map.',
    repoUrl: 'https://github.com/raflyzainn/webgis-2-data-sma-',
    tags: [
      { label: 'Flask', primary: true },
      { label: 'QGIS', primary: true },
      { label: 'HTML', primary: false },
      { label: 'SQL', primary: false },
    ],
  },
  {
    title: 'ODSForm',
    year: '2025',
    desc: 'Digital form system for cooperative data at the Ministry of Cooperatives.',
    liveUrl: 'https://odsform.kop.go.id/',
    tags: [
      { label: 'Laravel', primary: true },
      { label: 'Next.js', primary: true },
      { label: 'MySQL', primary: false },
      { label: 'OAuth SSO', primary: false },
    ],
  },
  {
    title: 'Kompas B2B Dashboard',
    year: '2025',
    desc: 'Admin dashboard for managing B2B keywords and related data for Kompas business.',
    liveUrl: 'https://b2b.kompaskita.com/login',
    tags: [
      { label: 'Vue', primary: true },
      { label: 'Nuxt', primary: true },
    ],
  },
  {
    title: 'Kompas Subscription Page',
    year: '2025',
    desc: 'Subscription page for Kompas.id',
    liveUrl: 'https://kompas.id/berlangganan',
    tags: [
      { label: 'Vue', primary: true },
      { label: 'Nuxt', primary: true },
    ],
  },
];

export default function ProjectsList() {
  return (
    <div className="mx-auto max-w-[680px] px-6 pt-12 pb-24 font-sans">
      {/* Header */}
      <motion.div variants={fadeUp(0)} initial="hidden" animate="show">
        <p className="text-[12px] tracking-[0.08em] text-[--text-muted]">projects</p>
        <h1 className="mt-1 text-[26px] font-medium text-[--text-primary]">selected work</h1>
      </motion.div>

      {/* Divider */}
      <div className="mt-6 h-px bg-[--border-subtle]" />

      {/* Project list */}
      <motion.div
        variants={stagger(0.06, 0)}
        initial="hidden"
        animate="show"
      >
        {PROJECTS.map((p, i) => {
          const num = String(i + 1).padStart(2, '0');
          const hasLink = !!(p.liveUrl || p.repoUrl);
          const href = p.liveUrl || p.repoUrl || '#';

          return (
            <motion.div
              key={p.title}
              variants={fadeUp(0)}
              className="border-b border-[--border-subtle] last:border-b-0"
            >
              <Link
                href={href}
                target={hasLink ? '_blank' : undefined}
                rel={hasLink ? 'noreferrer' : undefined}
                className="group flex gap-4 px-0 py-5 transition-colors duration-150 hover:bg-[--bg-raised] sm:px-3 sm:rounded-lg"
              >
                {/* Number */}
                <span className="mt-0.5 w-6 shrink-0 text-[13px] font-medium text-[--accent]">
                  {num}
                </span>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
                    <h2 className="text-[16px] font-medium text-[--text-primary]">
                      {p.title}
                      {hasLink && (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="ml-1.5 inline-block h-3.5 w-3.5 text-[--text-muted] transition-colors group-hover:text-[--accent]"
                          aria-hidden="true"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      )}
                    </h2>
                    <span className="text-[11px] text-[--text-muted]">{p.year}</span>
                  </div>

                  <p className="mt-2 text-[13px] leading-[1.7] text-[--text-secondary]">
                    {p.desc}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t.label}
                        className={`rounded-[20px] px-2.5 py-[3px] text-[11px] ${
                          t.primary
                            ? 'bg-[#FAECE7] text-[#712B13]'
                            : 'bg-[--bg-raised] text-[--text-secondary]'
                        }`}
                      >
                        {t.label}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
