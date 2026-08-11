'use client';
import Link from 'next/link';
import type { ProjectEntry } from '@/data/portfolio';

interface Props {
  item: ProjectEntry;
  index: number;
  isLast: boolean;
}

export default function ProjectItem({ item, index, isLast }: Props) {
  const num = String(index + 1).padStart(2, '0');
  const hasLink = !!item.href;

  const content = (
    <div
      className={`flex gap-4 py-4 transition-colors duration-150 ${
        hasLink ? 'hover:bg-[--bg-raised] px-2 sm:px-3 rounded-lg cursor-pointer' : ''
      } ${isLast ? '' : 'border-b border-[--border-subtle]'}`}
    >
      <span className="min-w-[24px] text-[13px] font-medium text-[--accent]">
        {num}
      </span>

      <div className="flex-1">
        <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
          <p className="text-sm font-medium text-[--text-primary]">
            {item.name}
            {hasLink && (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1.5 inline-block h-3.5 w-3.5 text-[--text-muted]"
                aria-hidden="true"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            )}
          </p>
          <span className="text-[11px] text-[--text-muted] whitespace-nowrap ml-0 sm:ml-2">
            {item.year}
          </span>
        </div>
        <p className="mt-1 text-xs text-[--text-secondary]">{item.description}</p>

        <div className="mt-2 flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <span
              key={tag.label}
              className={`rounded-full px-2.5 py-0.5 text-[11px] ${
                tag.primary
                  ? 'bg-[#FAECE7] text-[#712B13]'
                  : 'bg-[--bg-raised] text-[--text-secondary]'
              }`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  if (hasLink) {
    return (
      <Link
        href={item.href!}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${item.name} - opens in new tab`}
        className="block"
      >
        {content}
      </Link>
    );
  }

  return content;
}
