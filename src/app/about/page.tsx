// src/app/about/page.tsx
'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import FooterNowPlaying from "@/components/FooterNowPlaying";

export default function AboutPage() {
  return (
    <div className="pt-12">
      <section className="grid gap-8 sm:grid-cols-[1.2fr_.8fr] items-start">
        <motion.div variants={fadeUp(0)} initial="hidden" animate="show">
          <h1 className="text-3xl font-bold">About</h1>

          <p className="mt-4 text-slate-300">
            An enthusiastic individual with a strong desire to grow and explore new things. I’m deeply
            interested in technology—especially web development—and I’m committed to continuous learning
            and sharpening my craft. In every task I take on, I aim to deliver my best with focus,
            consistency, and a high level of dedication.
          </p>

          <p className="mt-3 text-slate-400">
            On the frontend, I gravitate toward clean, accessible interfaces with thoughtful motion and
            strong fundamentals: <span className="text-slate-200">React, Next.js, Tailwind CSS</span> for
            the UI layer, and <span className="text-slate-200">Node.js, Laravel</span> when I need to go full-stack.
            I care about the details—semantic HTML, performance budgets, predictable state, and design
            systems that scale. My default approach is to break work into small, shippable pieces so
            progress stays visible and momentum stays high.
          </p>

          <p className="mt-3 text-slate-400">
            Outside of coding, I enjoy <span className="text-slate-200">listening to music</span> (often on repeat),
            <span className="text-slate-200"> learning new things</span> through articles and tiny side projects,
            and unwinding with <span className="text-slate-200">Teamfight Tactics</span>. I’m also a
            <span className="text-slate-200"> coffee</span> person—from quick brews to pour-overs—which keeps me focused
            and occasionally powers those late-night builds.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp(.05)}
          initial="hidden"
          animate="show"
          className="relative w-full overflow-hidden rounded-xl ring-1 ring-inset ring-white/10
                     h-[22rem] sm:h-[28rem] lg:h-[32rem]"  
        >
          <Image
            src="/about/foto.jpg"                 
            alt="Achmad Rafly Khatami Zain"
            fill
            className="object-cover"
            sizes="(min-width:1024px) 32rem, (min-width:640px) 28rem, 22rem"
            priority
          />
        </motion.div>
      </section>

      <div className="mt-12">
        <FooterNowPlaying />
      </div>
    </div>
  );
}
