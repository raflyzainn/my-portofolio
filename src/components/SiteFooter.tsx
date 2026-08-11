'use client';

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-[--border-subtle]">
      <div className="mx-auto max-w-[680px] px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-[--text-muted]">
            &copy; {year} Achmad Rafly Khatami Zain
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/raflyzainn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[--text-muted] transition-colors hover:text-[--accent]"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/raflyzainn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[--text-muted] transition-colors hover:text-[--accent]"
            >
              LinkedIn
            </a>
            <a
              href="/cv/cv-raflyzainn.pdf"
              download
              className="text-xs text-[--text-muted] transition-colors hover:text-[--accent]"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
