'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/motion';

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-white/10">
      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto grid max-w-5xl gap-8 px-6 py-10 sm:grid-cols-3"
      >
        <motion.div variants={fadeUp(0)}>
          <h3 className="text-lg font-semibold">Achmad Rafly Khatami Zain</h3>
          <p className="mt-2 text-sm text-slate-400">
            Front-End Engineer — clean, accessible UI with a hint of neon.
          </p>

          <a
            href="/cv/cv-raflyzainn.pdf"
            download
            className="mt-3 inline-block rounded-full border border-white/15 px-3 py-1.5 text-xs text-slate-200 hover:bg-white/10"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.nav variants={fadeUp(0.05)}>
          <h4 className="text-sm font-semibold text-slate-200">Navigate</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li>
              <Link href="/" className="hover:text-slate-200">Home</Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-slate-200">Projects</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-slate-200">About</Link>
            </li>
            <li>
              <Link href="/#skills" className="hover:text-slate-200">Skills</Link>
            </li>
            <li>
              <Link href="/#experience" className="hover:text-slate-200">Experience</Link>
            </li>
            <li>
              <a href="/cv/raflyzain-cv.pdf" download className="hover:text-slate-200">Resume (PDF)</a>
            </li>
          </ul>
        </motion.nav>

        <motion.div variants={fadeUp(0.1)}>
          <h4 className="text-sm font-semibold text-slate-200">Elsewhere</h4>
          <ul className="mt-3 space-y-2 text-sm">
    
            <li>
              <a
                href="https://github.com/raflyzainn"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-slate-200"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/raflyzainn"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-slate-200"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} Achmad Rafly Khatami Zain</span>

          <div className="flex items-center gap-4">
            <a
              href="/cv/cv-raflyzainn.pdf"
              download
              className="hover:text-slate-300"
              aria-label="Download Resume PDF"
            >
              Resume ↓
            </a>
            <a href="#top" onClick={(e)=>{e.preventDefault(); window.scrollTo({top:0, behavior:'smooth'});}}
               className="hover:text-slate-300">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
