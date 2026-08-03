'use client';
import Image from 'next/image';
import { type MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/motion';

type Project = {
  title: string;
  desc: string;
  cover: string;
  liveUrl?: string;
  repoUrl?: string;
  primaryTags: string[];
  secondaryTags: string[];
};

const PROJECTS: Project[] = [
  {
    title: 'AI Eye Disease Screening',
    desc: 'Upload eye photo → AI flags conditions → doctor verifies.',
    cover: '/projects/intellisight.jpg',
    liveUrl: 'https://intellisight.humicprototyping.com/',
    primaryTags: ['React', 'Node'],
    secondaryTags: [],
  },
  {
    title: 'ConnectServes',
    desc: 'Two-sided services marketplace: providers list, customers book.',
    cover: '/projects/connectserves.png',
    repoUrl: 'https://github.com/raflyzainn/ConnectServes',
    primaryTags: ['Flask'],
    secondaryTags: ['HTML', 'CSS'],
  },
  {
    title: 'EduMap Bandung',
    desc: 'HS accreditation across Bandung Regency with interactive map.',
    cover: '/projects/EduMap.png',
    repoUrl: 'https://github.com/raflyzainn/webgis-2-data-sma-',
    primaryTags: ['Flask', 'QGIS'],
    secondaryTags: ['HTML', 'CSS', 'SQL'],
  },
  {
    title: 'ODSForm',
    desc: 'Digital form system for cooperative data at the Ministry of Cooperatives.',
    cover: '/projects/odsform.jpg',
    liveUrl: 'https://odsform.kop.go.id/',
    primaryTags: ['Laravel', 'Next.js'],
    secondaryTags: ['MySQL', 'OAuth SSO'],
  },
  {
    title: 'Kompas B2B Dashboard',
    desc: 'Admin dashboard for managing B2B keywords and related data for Kompas business.',
    cover: '/projects/b2bkompaskita.png',
    liveUrl: 'https://b2b.kompaskita.com/login',
    primaryTags: ['Vue', 'Nuxt'],
    secondaryTags: [],
  },
  {
    title: 'Kompas Subscription Page',
    desc: 'Subscription page for Kompas.id',
    cover: '/projects/redesign-berlangganan.png',
    liveUrl: 'https://kompas.id/berlangganan',
    primaryTags: ['Vue', 'Nuxt'],
    secondaryTags: [],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-2xl font-bold text-[--text-primary] sm:text-3xl">
          Selected Projects
        </h2>
        <span className="font-mono text-xs text-[--text-muted]">
          {PROJECTS.length} items
        </span>
      </div>

      <motion.div
        variants={stagger(0.06, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {PROJECTS.map((p) => (
          <motion.article
            key={p.title}
            variants={fadeUp(0)}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="group flex flex-col overflow-hidden rounded-xl border border-[--border-subtle] bg-[--bg-raised] shadow-[0_1px_3px_rgba(28,28,26,0.04)] transition-all duration-200 hover:border-[--border-strong] hover:shadow-[0_4px_12px_rgba(28,28,26,0.08)]"
          >
            {/* Browser chrome bar */}
            <div className="flex items-center gap-1.5 bg-[#e8e5df] px-2.5 py-1.5">
              <span className="h-[5px] w-[5px] rounded-full bg-[#c4bfb5]" />
              <span className="h-[5px] w-[5px] rounded-full bg-[#c4bfb5]" />
              <span className="h-[5px] w-[5px] rounded-full bg-[#c4bfb5]" />
            </div>

            {/* Screenshot */}
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={p.cover}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
              />
            </div>

            {/* Info */}
            <div className="flex flex-1 flex-col p-3">
              <div className="flex items-center justify-between gap-1">
                <h3 className="min-w-0 truncate text-[12px] font-medium text-[--text-primary]">
                  {p.title}
                </h3>
                <div className="flex shrink-0 items-center gap-1.5">
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e: MouseEvent) => e.stopPropagation()}
                      className="rounded p-0.5 text-[--text-muted] transition-colors hover:text-[--accent]"
                      aria-label={`${p.title} live demo`}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                  {p.repoUrl && (
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e: MouseEvent) => e.stopPropagation()}
                      className="rounded p-0.5 text-[--text-muted] transition-colors hover:text-[--accent]"
                      aria-label={`${p.title} repository`}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <p className="mt-1 flex-1 text-[10px] leading-relaxed text-[--text-muted] line-clamp-2">
                {p.desc}
              </p>

              <div className="mt-2.5 flex flex-wrap gap-1">
                {p.primaryTags.slice(0, 2).map((t) => (
                  <span key={t} className="rounded bg-[--accent-muted] px-1.5 py-px text-[9px] font-medium text-[--accent-on-muted]">
                    {t}
                  </span>
                ))}
                {p.secondaryTags.slice(0, 2).map((t) => (
                  <span key={t} className="rounded border border-[--border-subtle] px-1.5 py-px text-[9px] text-[--text-secondary]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
