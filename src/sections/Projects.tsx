'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { pop, stagger } from '@/lib/motion';

const PROJECTS = [
  {
    title: 'AI Eye Disease Screening',
    desc: 'Upload eye photo → AI flags conditions → doctor verifies.',
    tags: ['React', 'Node'],
    cover: '/projects/intellisight.jpg',
    href: 'https://intellisight.humicprototyping.com/',
  },
  {
    title: 'ConnectServes',
    desc: 'Two-sided services marketplace: providers list, customers book. Clean, responsive UI.',
    tags: ['Flask', 'HTML', 'CSS'],
    cover: '/projects/connectserves.png',
    href: 'https://github.com/raflyzainn/ConnectServes',
  },
  {
    title: 'EduMap Bandung',
    desc: 'HS accreditation across Bandung Regency with interactive map.',
    tags: ['Flask', 'HTML', 'CSS', 'SQL', 'QGIS'],
    cover: '/projects/EduMap.png',
    href: 'https://github.com/raflyzainn/webgis-2-data-sma-',
  },
];

function ExternalIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
      <path d="M5 5h6v2H7v10h10v-4h2v6H5V5z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mt-16">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-2xl sm:text-3xl font-bold">Selected Projects</h2>
        <span className="text-sm text-slate-400">{PROJECTS.length} items</span>
      </div>

      <motion.div
        variants={stagger(0.12, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-5 sm:grid-cols-2"
      >
        {PROJECTS.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.href}
            target={p.href?.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            variants={pop}
            whileHover={{ y: -4 }}
            style={{ transformPerspective: 1000 }}
            className="group relative block overflow-hidden rounded-xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur transition"
            aria-label={`${p.title} — open link`}
          >
            <span className="pointer-events-none absolute -inset-px -z-10 rounded-xl
              before:absolute before:inset-y-0 before:-left-1/2 before:w-1/2 before:skew-x-12
              before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
              before:transition-transform before:duration-700 group-hover:before:translate-x-[200%]" />

            <div className="mb-3 relative aspect-[16/9] overflow-hidden rounded-md ring-1 ring-inset ring-white/10">
              <Image
                src={p.cover}
                alt={p.title}
                fill
                priority={i === 0}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(min-width:768px) 50vw, 100vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              {/* external icon */}
              <div className="pointer-events-none absolute right-2 top-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ExternalIcon className="h-5 w-5 text-white/80" />
              </div>
            </div>

            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-1 text-sm text-slate-400">{p.desc}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
