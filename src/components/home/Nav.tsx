'use client';
import { useState, useEffect } from 'react';
import { useActiveSection } from '@/lib/useActiveSection';

const NAV_ITEMS = [
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const activeId = useActiveSection(NAV_ITEMS.map((item) => item.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`sticky top-0 z-40 h-16 transition-all duration-200 ${
        scrolled
          ? 'border-b border-[--border-subtle] bg-[--bg-base]/90 backdrop-blur-xl'
          : 'border-b border-transparent bg-[--bg-base]'
      }`}
    >
      <div className="mx-auto flex h-full max-w-[680px] items-center justify-between px-6">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-[15px] font-medium text-[--text-primary]"
        >
          rafly<span className="text-[--accent]">.</span>
        </a>

        <ul className="flex items-center gap-5">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item.id);
                }}
                className={`text-[12px] transition-colors duration-150 sm:text-[13px] ${
                  activeId === item.id
                    ? 'text-[--accent]'
                    : 'text-[--text-muted] hover:text-[--text-primary]'
                }`}
                aria-current={activeId === item.id ? 'location' : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
