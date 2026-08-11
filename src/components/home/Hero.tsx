'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';

export default function Hero() {
  return (
    <section id="hero" className="scroll-mt-20 pt-12 pb-10 sm:pt-16 sm:pb-12">
      <motion.div
        variants={fadeUp(0)}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-[680px] px-6"
      >
        {/* Header with photo */}
        <div className="flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-[26px] font-medium text-[--text-primary]">
              Achmad Rafly Khatamy Zain
            </h1>
            <p className="mt-1 text-[13px] text-[--text-muted]">
              Software Engineer - Jakarta, ID
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-6 h-px bg-[--border-subtle]" />

        {/* Bio sections */}
        <div className="mt-8 space-y-6">
          {/* 01 - who I am */}
          <div>
            <div className="flex items-baseline gap-3">
              <span className="w-6 shrink-0 text-[13px] font-medium text-[--accent]">01</span>
              <span className="text-[13px] font-medium text-[--text-primary]">who I am</span>
            </div>
            <div className="mt-2 pl-9">
              <p className="text-[14px] leading-[1.75] text-[--text-secondary]">
                An enthusiastic individual with a strong desire to grow and explore new
                things. I&apos;m deeply interested in technology especially web
                development and I&apos;m committed to continuous learning and sharpening
                my craft.
              </p>
            </div>
          </div>

          {/* 02 - what I work with */}
          <div>
            <div className="flex items-baseline gap-3">
              <span className="w-6 shrink-0 text-[13px] font-medium text-[--accent]">02</span>
              <span className="text-[13px] font-medium text-[--text-primary]">what I work with</span>
            </div>
            <div className="mt-2 pl-9">
              <p className="text-[14px] leading-[1.75] text-[--text-secondary]">
                Software engineer focused on{' '}
                <span className="text-[--text-primary]">Next.js, Vue, Spring Boot, and Go </span> 
                building performant, accessible interfaces with clean architecture and
                thoughtful UX.
              </p>

              {/* Stats */}
              {/* <div className="mt-4 flex items-end gap-6 sm:gap-8">
                <div>
                  <p className="text-[20px] font-medium text-[--text-primary]">5</p>
                  <p className="mt-0.5 text-[11px] text-[--text-muted]">internships</p>
                </div>
                <div>
                  <p className="text-[20px] font-medium text-[--text-primary]">12+</p>
                  <p className="mt-0.5 text-[11px] text-[--text-muted]">projects</p>
                </div>
                <div>
                  <p className="text-[20px] font-medium text-[--text-primary]">3</p>
                  <p className="mt-0.5 text-[11px] text-[--text-muted]">HKI / IP</p>
                </div>
              </div> */}
            </div>
          </div>

          {/* 03 - outside of code */}
          <div>
            <div className="flex items-baseline gap-3">
              <span className="w-6 shrink-0 text-[13px] font-medium text-[--accent]">03</span>
              <span className="text-[13px] font-medium text-[--text-primary]">outside of code</span>
            </div>
            <div className="mt-2 pl-9">
              <p className="text-[14px] leading-[1.75] text-[--text-secondary]">
                I enjoy{' '}
                <span className="text-[--text-primary]">listening to music</span> (often on
                repeat), unwinding with{' '}
                <span className="text-[--text-primary]">Teamfight Tactics</span>, and
                exploring new things through articles and tiny side projects. I&apos;m also a{' '}
                <span className="text-[--text-primary]">coffee</span> person from quick
                brews to pour overs.
              </p>
            </div>
          </div>
        </div>

        {/* Download CV button */}
        <div className="mt-8">
          <a
            href="/cv/cv-raflyzainn.pdf"
            download
            className="inline-flex items-center gap-2 rounded-[8px] border border-[--accent] px-5 py-[9px] text-[13px] font-medium text-[--accent] transition-colors duration-150 hover:bg-[--accent] hover:text-white"
          >
            Download CV
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
