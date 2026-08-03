'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/motion';

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-[--border-subtle]">
      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto grid max-w-[min(1600px,92vw)] gap-8 px-6 py-10 sm:grid-cols-3"
      >
        <motion.div variants={fadeUp(0)}>
          <h3 className="text-lg font-semibold text-[--text-primary]">
            Achmad Rafly Khatami Zain
          </h3>
          <p className="mt-2 text-sm text-[--text-muted]">
            Front-End Engineer — building clean, accessible interfaces with thoughtful detail.
          </p>

          <a
            href="/cv/cv-raflyzainn.pdf"
            download
            className="mt-3 inline-block rounded-full border border-[--border-subtle] px-3 py-1.5 text-xs text-[--text-secondary] transition-colors duration-200 hover:border-[--accent] hover:text-[--accent]"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.nav variants={fadeUp(0.05)}>
          <h4 className="font-mono text-sm font-semibold text-[--text-primary]">
            Navigate
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-[--text-muted]">
            <li>
              <Link
                href="/"
                className="transition-colors duration-150 hover:text-[--accent]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="transition-colors duration-150 hover:text-[--accent]"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="transition-colors duration-150 hover:text-[--accent]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#skills"
                className="transition-colors duration-150 hover:text-[--accent]"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="/#experience"
                className="transition-colors duration-150 hover:text-[--accent]"
              >
                Experience
              </Link>
            </li>
            <li>
              <a
                href="/cv/cv-raflyzainn.pdf"
                download
                className="transition-colors duration-150 hover:text-[--accent]"
              >
                Resume (PDF)
              </a>
            </li>
          </ul>
        </motion.nav>

        <motion.div variants={fadeUp(0.1)}>
          <h4 className="font-mono text-sm font-semibold text-[--text-primary]">
            Elsewhere
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href="https://github.com/raflyzainn"
                target="_blank"
                rel="noreferrer"
                className="text-[--text-muted] transition-colors duration-150 hover:text-[--accent]"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/raflyzainn"
                target="_blank"
                rel="noreferrer"
                className="text-[--text-muted] transition-colors duration-150 hover:text-[--accent]"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      <div className="border-t border-[--border-subtle]">
        <div className="mx-auto flex max-w-[min(1600px,92vw)] flex-col gap-2 px-6 py-4 text-xs text-[--text-muted] sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {year} Achmad Rafly Khatami Zain</span>

          <div className="flex items-center gap-4">
            <a
              href="/cv/cv-raflyzainn.pdf"
              download
              className="transition-colors duration-150 hover:text-[--accent]"
              aria-label="Download Resume PDF"
            >
              Resume &darr;
            </a>
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="transition-colors duration-150 hover:text-[--accent]"
            >
              Back to top &uarr;
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
