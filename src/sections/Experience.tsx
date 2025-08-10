'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/motion';

type Item = {
  role: string;
  org: string;
  period: string;
  location?: string;
  points: string[];
  href?: string;
  logo?: string;
};

const PROFESSIONAL: Item[] = [
  {
    role: 'Front End Study Group Member',
    org: 'Central Computer Improvement',
    period: 'Jan 2025 - Present',
    location: 'Bandung, ID',
    points: [
      'Learned front-end development with HTML, CSS, and JavaScript',
      'Studied and applied Next.js for building modern web applications'
    ],
  },
  {
    role: 'MBC Laboratory Research Assistant',
    org: 'Telkom University',
    period: 'Oct 2024 - Present',
    location: 'Bandung, ID',
    points: [
      'Conduct research in GIS and web-based technologies using QGIS',
      'Support projects with data analysis and web-based applications',
      'Organize and participate in university research events'
    ],
  },
  {
    role: 'Digitalization Team',
    org: 'Ministry of Cooperatives of The Republic of Indonesia',
    period: 'Jun 2025 - Aug 2025',
    location: 'Jakarta, ID',
    points: [
      'Rebuilt main ministry website using React for better performance & UX',
      'Developed form system with Next.js (frontend) and Laravel (backend)',
      'Implemented OAuth 2.0 integrated with ministry central system'
    ],
  },
  {
    role: 'Web Master',
    org: 'Faculty of Data Science and Intelligent Systems (Telkom University)',
    period: 'Jul 2025 - Aug 2025',
    location: 'Bandung, ID',
    points: [
      'Revamped faculty website to ensure up-to-date information',
      'Scraped and managed faculty member profile data',
      'Improved UI and UX for accessibility and engagement'
    ],
  },
  {
    role: 'Front End Developer',
    org: 'HUMIC Engineering',
    period: 'Feb 2025 - May 2025',
    location: 'Bandung, ID',
    points: [
      'Developed AI-powered eye disease detection website using React.js',
      'Integrated Node.js backend with the frontend for seamless workflows',
      'Implemented AI APIs for detecting and analyzing various eye diseases'
    ],
  },
  {
    role: 'Google Developer Student Club (Web Development)',
    org: 'Telkom University',
    period: 'Sep 2023 - Nov 2024',
    location: 'Bandung, ID',
    points: [
      'Learned and applied JavaScript, CSS, and HTML for web projects',
      'Collaborated on development of community web projects'
    ],
  },
];

const ORGANIZATIONAL: Item[] = [
  {
    role: 'Entrepreneurship & Business Division Staff',
    org: 'S1 Informatics Student Association',
    period: 'Jun 2024 - Feb 2025',
    points: [
      'Planned and executed student entrepreneurship programs',
      'Managed merchandise sales to support funding and branding efforts'
    ],
  },
  {
    role: 'Vice Head of Event Division',
    org: 'Anniv Insight 2024, Telkom University',
    period: 'Nov 2024 - Dec 2024',
    points: [
      'Led planning of a thematic anniversary event with American high school concept',
      'Coordinated internal teams and external vendors for event execution'
    ],
  },
  {
    role: 'Public Relations Committee',
    org: 'Interestfest 2024, Telkom University',
    period: 'Aug 2024 - Dec 2024',
    points: [
      'Acted as liaison between committee and academic departments',
      'Ensured effective communication among committee members and participants'
    ],
  },
  {
    role: 'Logistics Committee',
    org: 'Informatics League 2023, Telkom University',
    period: 'Sep 2023 - Dec 2023',
    points: [
      'Set up live streaming for esports tournaments',
      'Managed logistics flow and prepared essential equipment'
    ],
  },
  {
    role: 'Logistics Committee',
    org: 'Hello World 2023, Telkom University',
    period: 'Jun 2023 - Sep 2023',
    points: [
      'Coordinated with vendors and internal teams for smooth event operations',
      'Planned and prepared transportation, equipment, and supplies'
    ],
  },
];

function ItemCard({ item }: { item: Item }) {
  return (
    <motion.li
      variants={fadeUp(0)}
      className="rounded-xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="font-medium">
            {item.role}{' '}
            <span className="text-slate-300">· </span>
            {item.href ? (
              <a href={item.href} target="_blank" rel="noreferrer" className="text-slate-200 hover:underline">
                {item.org}
              </a>
            ) : (
              <span className="text-slate-200">{item.org}</span>
            )}
          </p>
          <p className="mt-0.5 text-xs text-slate-400">
            {item.period}{item.location ? ` • ${item.location}` : ''}
          </p>
        </div>

        {item.logo ? (
          <Image
              src={item.logo}
              alt={item.org}
              fill
              sizes="32px"
              className="object-contain p-1"
            />
        ) : null}
      </div>

      <ul className="mt-3 list-disc pl-5 text-sm text-slate-300">
        {item.points.map((p) => <li key={p}>{p}</li>)}
      </ul>
    </motion.li>
  );
}

function ScrollList({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative max-h-[26rem] sm:max-h-[30rem] overflow-y-auto pr-2 scrollbox ${className}`}>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-[var(--background)] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-[var(--background)] to-transparent" />
      {children}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="mt-20">
      <motion.h2
        variants={fadeUp(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl font-bold"
      >
        Experience
      </motion.h2>

      <div className="mt-6">
        <motion.h3
          variants={fadeUp(0.02)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-lg font-semibold sticky top-0 z-10 bg-[color:var(--background)]/60 backdrop-blur rounded-t-md px-1 py-1"
        >
          Professional Experience
        </motion.h3>

        <ScrollList className="mt-2">
          <motion.ul
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
            className="space-y-4"
          >
            {PROFESSIONAL.map((item) => (
              <ItemCard key={item.role + item.org} item={item} />
            ))}
          </motion.ul>
        </ScrollList>
      </div>

      <div className="mt-10">
        <motion.h3
          variants={fadeUp(0.02)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-lg font-semibold sticky top-0 z-10 bg-[color:var(--background)]/60 backdrop-blur rounded-t-md px-1 py-1"
        >
          Organizational Experience
        </motion.h3>

        <ScrollList className="mt-2">
          <motion.ul
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
            className="space-y-4"
          >
            {ORGANIZATIONAL.map((item) => (
              <ItemCard key={item.role + item.org} item={item} />
            ))}
          </motion.ul>
        </ScrollList>
      </div>
    </section>
  );
}
