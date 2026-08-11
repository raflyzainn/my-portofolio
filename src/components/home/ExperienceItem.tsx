'use client';
import type { ExperienceEntry } from '@/data/portfolio';

interface Props {
  item: ExperienceEntry;
  index: number;
  isLast: boolean;
}

export default function ExperienceItem({ item, index, isLast }: Props) {
  const num = String(index + 1).padStart(2, '0');

  return (
    <div
      className={`flex gap-4 py-4 ${
        isLast ? '' : 'border-b border-[--border-subtle]'
      }`}
    >
      <span className="min-w-[24px] text-[13px] font-medium text-[--accent]">
        {num}
      </span>

      <div className="flex-1">
        <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
          <p className="text-sm font-medium text-[--text-primary]">
            {item.role}, {item.company}
          </p>
          <span className="text-[11px] text-[--text-muted] whitespace-nowrap ml-0 sm:ml-2">
            {item.period}
            {item.location ? ` · ${item.location}` : ''}
          </span>
        </div>
        <p className="mt-1 text-xs text-[--text-secondary]">{item.summary}</p>
      </div>
    </div>
  );
}
