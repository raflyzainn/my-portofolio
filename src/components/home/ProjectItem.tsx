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
  const isGithubLink = hasLink && item.href!.includes('github.com');
  const isInProgress = item.status === 'in-progress';

  const ExternalLinkIcon = () => (
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
  );

  const GitHubIcon = () => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="ml-1.5 inline-block h-3.5 w-3.5 text-[--text-muted]"
      aria-hidden="true"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );

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
            {hasLink && (isGithubLink ? <GitHubIcon /> : <ExternalLinkIcon />)}
            {isInProgress && (
              <span className="ml-2 inline-block text-[10px] px-1.5 py-0.5 rounded-full bg-[#FAECE7] text-[#712B13] font-normal">
                on progress
              </span>
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
