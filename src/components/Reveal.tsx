'use client';
import { PropsWithChildren } from 'react';
import { useInView } from '@/hooks/useInView';

export default function Reveal({ children, className = "" }: PropsWithChildren<{className?: string}>) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: `translateY(${inView ? 0 : 8}px)`,
        transition: 'opacity .6s ease, transform .6s ease'
      }}
    >
      {children}
    </div>
  );
}
