// src/components/Navbar.tsx
'use client';
import { motion } from "framer-motion";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/cv/cv-raflyzainn.pdf", label: "Resume", download: true }, 
];

export default function Navbar() {
  return (
    <motion.nav initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { duration: .5 } }}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2">
      <ul className="flex items-center gap-6 rounded-full border border-white/10 bg-slate-900/70 px-5 py-2 backdrop-blur">
        {NAV.map((i) => (
          <li key={i.label}>
            <a href={i.href} {...(i.download ? { download: true } : {})}
               className="text-sm text-slate-200 hover:text-white">
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
