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
      className={`sticky top-0 z-40 h-16 border-b transition-colors duration-200 ${
        scrolled
          ? 'border-[--border-subtle] bg-[--bg-nav] shadow-[0_1px_4px_rgba(0,0,0,0.06)]'
          : 'border-transparent bg-transparent'
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
                className={`border-b-2 pb-1 text-[12px] transition-colors duration-150 sm:text-[13px] ${
                  activeId === item.id
                    ? 'border-[--accent] text-[--accent]'
                    : 'border-transparent text-[--text-muted] hover:text-[--text-primary]'
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