'use client';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/motion';

type Item = {
  role: string;
  org: string;
  period: string;
  location?: string;
  points: string[];
};

const PROFESSIONAL: Item[] = [
  {
    role: 'Software Engineer Intern',
    org: 'Kompas.id',
    period: 'Feb 2026 - Jun 2026',
    location: 'Jakarta, ID',
    points: [
      'Delivered 20+ feature enhancements, new features, and bug fixes for the website kompas.id',
      'Developed a B2B admin dashboard keyword management system for businesses at Kompas.id',
      'Collaborated with cross-functional teams to implement scalable frontend solutions',
      'Improved application stability and user experience through code optimization and maintenance',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    org: 'Maqdis Academy',
    period: 'Oct 2025 - Jan 2026',
    location: 'Jakarta, ID',
    points: [
      'Developed an internal admin dashboard using Next.js for managing travel packages and users',
      'Integrated frontend with Laravel REST API for secure CRUD operations',
      'Built reusable UI components to improve development efficiency and maintainability',
      'Enhanced dashboard usability by improving UI/UX consistency and state management',
    ],
  },
  {
    role: 'Web Master',
    org: 'Faculty of Data Science and Intelligent Systems (Telkom University)',
    period: 'Jul 2025 - Aug 2025',
    location: 'Bandung, ID',
    points: [
      'Maintained and enhanced the faculty website to improve usability and ensure up-to-date academic information',
      'Performed web scraping and data processing to collect and publish faculty member profiles',
      'Collaborated with faculty staff to manage website content and ensure accuracy of published information',
    ],
  },
  {
    role: 'Software Engineer Intern',
    org: 'Ministry of Cooperatives of The Republic of Indonesia',
    period: 'Jun 2025 - Aug 2025',
    location: 'Jakarta, ID',
    points: [
      'Rebuilt the Ministry\'s official website using React.js to improve performance and user experience',
      'Developed a data collection platform for the Ministry using Next.js and Laravel',
      'Implemented OAuth 2.0 authentication integrated with the Ministry\'s central system',
      'Collaborated with the digitalization team to deliver government web applications',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    org: 'HUMIC Engineering',
    period: 'Feb 2025 - May 2025',
    location: 'Bandung, ID',
    points: [
      'Developed an AI-powered eye disease detection web application using React.js',
      'Integrated frontend with Node.js backend services and AI inference APIs',
      'Implemented responsive user interfaces for doctors and patients',
      'Collaborated with the development team to deliver production-ready features',
    ],
  },
  {
    role: 'Research Assistant',
    org: 'MBC Laboratory, Telkom University',
    period: 'Oct 2024 - Jan 2026',
    location: 'Bandung, ID',
    points: [
      'Conducted research on GIS and web-based technologies using QGIS',
      'Supported geospatial data processing and web application research projects',
      'Participated in organizing Digistar Company Visit, DigiLearn 2025, and Research Assistant recruitment events',
      'Collaborated with multidisciplinary research teams throughout multiple projects',
    ],
  },
];

const ORGANIZATIONAL: Item[] = [
  {
    role: 'Front End Study Group Member',
    org: 'Central Computer Improvement',
    period: 'Jan 2025 - Present',
    points: [
      'Learned front-end development with HTML, CSS, and JavaScript',
      'Studied and applied Next.js for building modern web applications',
      'Participated in peer coding sessions to reinforce front-end concepts through practice',
    ],
  },
  {
    role: 'Vice Head of Event Division',
    org: 'Anniv Insight 2024, Telkom University',
    period: 'Nov 2024 - Dec 2024',
    points: [
      'Led planning of a thematic anniversary event with American high school concept',
      'Coordinated internal teams and external vendors for event execution',
      'Oversaw event timeline and budget allocation to ensure on-schedule delivery',
    ],
  },
  {
    role: 'Public Relations Committee',
    org: 'Interestfest 2024, Telkom University',
    period: 'Aug 2024 - Dec 2024',
    points: [
      'Acted as liaison between committee and academic departments',
      'Ensured effective communication among committee members and participants',
      'Managed event publication materials and information distribution channels',
    ],
  },
  {
    role: 'Entrepreneurship & Business Division Staff',
    org: 'S1 Informatics Student Association',
    period: 'Jun 2024 - Feb 2025',
    points: [
      'Planned and executed student entrepreneurship programs',
      'Managed merchandise sales to support funding and branding efforts',
      'Tracked program budgets and sales performance to support division reporting',
    ],
  },
  {
    role: 'Google Developer Student Club (Web Development)',
    org: 'Telkom University',
    period: 'Sep 2023 - Nov 2024',
    points: [
      'Learned and applied JavaScript, CSS, and HTML for web projects',
      'Collaborated on development of community web projects',
      'Engaged in community tech talks and workshops to expand web development knowledge',
    ],
  },
  {
    role: 'Logistics Committee',
    org: 'Informatics League 2023, Telkom University',
    period: 'Sep 2023 - Dec 2023',
    points: [
      'Set up live streaming for esports tournaments',
      'Managed logistics flow and prepared essential equipment',
      'Coordinated venue setup schedule with internal teams for smooth tournament operations',
    ],
  },
  {
    role: 'Logistics Committee',
    org: 'Hello World 2023, Telkom University',
    period: 'Jun 2023 - Sep 2023',
    points: [
      'Coordinated with vendors and internal teams for smooth event operations',
      'Planned and prepared transportation, equipment, and supplies',
      'Resolved on-site logistical issues to keep event operations running smoothly',
    ],
  },
];

function TimelineItem({ item, index }: { item: Item; index: number }) {
  const isPresent = item.period.toLowerCase().includes('present');
  const isLeft = index % 2 === 0;

  return (
    <motion.li
      variants={fadeUp(0)}
      className="relative pb-10 md:pb-14 last:pb-0"
    >
      {/* Mobile: dot left, card right */}
      <div className="flex gap-3 md:hidden">
        <div className="relative z-10 mt-1.5 shrink-0">
          <span
            className={`block rounded-full ${
              isPresent
                ? 'h-[9px] w-[9px] bg-[--accent] border-[2px] border-[--bg-base]'
                : 'h-[5px] w-[5px] bg-[--border-strong]'
            }`}
          />
        </div>
        <div className="flex-1">
          <Card item={item} isPresent={isPresent} />
        </div>
      </div>

      {/* Desktop: 3-col grid — left-card | dot | right-card */}
      <div className="hidden md:grid md:grid-cols-[1fr_48px_1fr] md:items-start">
        {isLeft ? (
          <>
            <div className="pr-6">
              <Card item={item} isPresent={isPresent} />
            </div>
            <div className="relative flex justify-center pt-1.5">
              <span
                className={`relative z-10 block rounded-full ${
                  isPresent
                    ? 'h-[9px] w-[9px] bg-[--accent] border-[2px] border-[--bg-base]'
                    : 'h-[5px] w-[5px] bg-[--border-strong]'
                }`}
              />
            </div>
            <div />
          </>
        ) : (
          <>
            <div />
            <div className="relative flex justify-center pt-1.5">
              <span
                className={`relative z-10 block rounded-full ${
                  isPresent
                    ? 'h-[9px] w-[9px] bg-[--accent] border-[2px] border-[--bg-base]'
                    : 'h-[5px] w-[5px] bg-[--border-strong]'
                }`}
              />
            </div>
            <div className="pl-6">
              <Card item={item} isPresent={isPresent} />
            </div>
          </>
        )}
      </div>
    </motion.li>
  );
}

function Card({ item, isPresent }: { item: Item; isPresent: boolean }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`rounded-xl border transition-all duration-200 ${
        isPresent
          ? 'border-[--border-subtle] bg-[--bg-raised] shadow-[0_1px_3px_rgba(28,28,26,0.06)] hover:border-[--border-strong]'
          : 'border-[--border-subtle] bg-[--bg-raised]/70 hover:border-[--border-strong]'
      } ${isPresent ? 'p-4 sm:p-5' : 'p-3 sm:p-4'}`}
    >
      <p
        className={`font-medium text-[--text-primary] ${isPresent ? 'text-sm sm:text-base' : 'text-[13px]'}`}
      >
        {item.role}{' '}
        {isPresent && (
          <span className="inline-flex items-center rounded bg-[--accent-muted] px-2 py-0.5 font-mono text-[11px] text-[--accent-on-muted] align-middle">
            active
          </span>
        )}
      </p>
      <p
        className={`text-[--text-secondary] ${isPresent ? 'text-[13px]' : 'text-[12px]'}`}
      >
        {item.org}
      </p>
      <p
        className={`mt-0.5 font-mono text-[--text-muted] ${isPresent ? 'text-[11px]' : 'text-[10px]'}`}
      >
        {item.period}
        {item.location ? ` \u2022 ${item.location}` : ''}
      </p>
      <ul
        className={`mt-3 list-disc pl-5 leading-relaxed text-[--text-secondary] ${
          isPresent ? 'text-[14px]' : 'text-[13px]'
        }`}
      >
        {item.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </motion.div>
  );
}

function TimelineGroup({ items }: { items: Item[] }) {
  return (
    <motion.ul
      variants={stagger(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
      className="relative"
    >
      {/* Dashed center line — desktop */}
      <div
        className="pointer-events-none absolute inset-y-0 z-0 hidden md:block"
        style={{
          left: '50%',
          marginLeft: '-1px',
          width: '2px',
          backgroundImage:
            'repeating-linear-gradient(to bottom, var(--border-strong) 0px, var(--border-strong) 5px, transparent 5px, transparent 13px)',
        }}
      />

      {/* Dashed line — mobile */}
      <div
        className="pointer-events-none absolute inset-y-0 z-0 md:hidden"
        style={{
          left: '7px',
          width: '2px',
          backgroundImage:
            'repeating-linear-gradient(to bottom, var(--border-strong) 0px, var(--border-strong) 5px, transparent 5px, transparent 13px)',
        }}
      />

      {items.map((item, i) => (
        <TimelineItem key={item.role + item.org} item={item} index={i} />
      ))}
    </motion.ul>
  );
}

export default function Experience() {
  return (
    <section id="experience">
      <motion.h2
        variants={fadeUp(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-2xl font-bold text-[--text-primary] sm:text-3xl"
      >
        Experience
      </motion.h2>

      <div className="mt-6">
        <motion.h3
          variants={fadeUp(0.02)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-8 text-lg font-semibold text-[--text-primary]"
        >
          Professional Experience
        </motion.h3>
        <TimelineGroup items={PROFESSIONAL} />
      </div>

      <div className="mt-20">
        <motion.h3
          variants={fadeUp(0.02)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-8 text-lg font-semibold text-[--text-primary]"
        >
          Organizational Experience
        </motion.h3>
        <TimelineGroup items={ORGANIZATIONAL} />
      </div>
    </section>
  );
}
