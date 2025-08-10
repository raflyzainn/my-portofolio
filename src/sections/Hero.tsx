'use client';
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import Typing from "@/components/Typing";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 text-center overflow-hidden">
      {/* glow layers */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div
          className="absolute inset-x-0 -top-24 h-80 animated-gradient
          bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,.28),transparent_60%),radial-gradient(40%_60%_at_80%_0%,rgba(168,85,247,.22),transparent_60%)]"
        />
        <div
          className="absolute left-1/2 top-4 h-64 w-64 -translate-x-1/2 rounded-full
          bg-gradient-to-tr from-indigo-500/25 via-fuchsia-500/20 to-transparent blur-3xl"
        />
      </div>

      <div className="hero-grid absolute inset-0 -z-10 opacity-30" />

      <motion.div
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="relative"
      >
        {/* role badge */}
        <motion.span
          variants={fadeUp(0)}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-300"
        >
          Front End Engineer
          <span className="h-1 w-1 rounded-full bg-emerald-400 shadow-[0_0_12px] shadow-emerald-400/60" />
          Available
        </motion.span>

        {/* name */}
        <motion.h1
          variants={fadeUp(0.1)}
          className="mt-5 text-balance text-4xl sm:text-6xl font-extrabold leading-tight"
        >
          <span className="animated-gradient bg-gradient-to-r from-indigo-200 via-fuchsia-200 to-indigo-200 bg-clip-text text-transparent">
            Achmad Rafly Khatami Zain
          </span>
        </motion.h1>

        {/* typing line (escape apostrophe) */}
        <motion.p variants={fadeUp(0.16)} className="mt-2 text-lg sm:text-xl text-slate-300">
          I&apos;m{" "}
          <Typing
            className="text-white"
            speed={65}
            pause={1200}
            words={[
              "building clean, accessible web apps.",
              "into Front End Development, Back End, and UI/UX.",
              "open for collabs & freelance.",
            ]}
          />
        </motion.p>

        {/* subheading */}
        <motion.p
          variants={fadeUp(0.2)}
          className="mx-auto mt-3 max-w-2xl text-balance text-slate-400"
        >
          I create clean and accessible interfaces that are visually engaging, easy to navigate,
          and designed to make an impact.
        </motion.p>

        <motion.div variants={fadeUp(0.3)} className="mt-7 flex items-center justify-center gap-3">
          <Link
            href="#experience"
            className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-500 transition focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
          >
            Explore
          </Link>

          <a
            href="/cv/cv-raflyzainn.pdf"
            // kalau kamu tetap pakai nama file dengan spasi, gunakan:
            // href="/cv/ACHMAD%20RAFLY%20KHATAMI%20ZAIN.pdf"
            download
            aria-label="Download CV (PDF)"
            className="group rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-slate-200 hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            Download CV
            <span className="ml-2 inline-block h-5 w-[2px] bg-white/30 align-middle" />
            <span className="ml-2 hidden sm:inline-block text-slate-300/80 group-hover:btn-shine">
              PDF
            </span>
          </a>
        </motion.div>

        {/* scroll cue */}
        <motion.a
          variants={fadeUp(0.45)}
          href="#experience"
          className="mt-10 inline-flex items-center justify-center text-xs text-slate-400 hover:text-slate-200"
        >
          <span className="mr-2">Scroll</span>
          <svg className="h-4 w-4 float-slow" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path
              d="M12 5v14m0 0l-5-5m5 5l5-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
}
