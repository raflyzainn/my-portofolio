'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/cv/cv-raflyzainn.pdf', label: 'Resume', download: true },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-all duration-200 ${
        scrolled
          ? 'border-[--border-subtle] bg-[--bg-raised]/80 backdrop-blur-xl'
          : 'border-transparent bg-[--bg-base]'
      }`}
    >
      <div className="mx-auto flex max-w-[min(1600px,92vw)] items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-baseline text-lg font-semibold tracking-tight text-[--text-primary]"
        >
          rafly
          <span className="text-[--accent]">.</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => {
            const isActive = !item.download && pathname === item.href;
            return (
              <li key={item.label}>
                {item.download ? (
                  <a
                    href={item.href}
                    download
                    className="relative text-sm transition-colors duration-150 text-[--text-secondary] hover:text-[--text-primary]"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={`relative pb-0.5 text-sm transition-colors duration-150 ${
                      isActive
                        ? 'text-[--accent]'
                        : 'text-[--text-secondary] hover:text-[--text-primary]'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-[--accent]" />
                    )}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 rounded-full bg-[--text-secondary] transition-all duration-200 ${
              menuOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full bg-[--text-secondary] transition-all duration-200 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full bg-[--text-secondary] transition-all duration-200 ${
              menuOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="overflow-hidden border-t border-[--border-subtle] bg-[--bg-raised] md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-3">
              {NAV.map((item) => {
                const isActive = !item.download && pathname === item.href;
                return (
                  <li key={item.label}>
                    {item.download ? (
                      <a
                        href={item.href}
                        download
                        className="block rounded-lg px-3 py-2 text-sm text-[--text-secondary] hover:bg-[--bg-raised-hover] hover:text-[--text-primary]"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                          isActive
                            ? 'bg-[--accent-muted] text-[--accent-on-muted]'
                            : 'text-[--text-secondary] hover:bg-[--bg-raised-hover] hover:text-[--text-primary]'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
