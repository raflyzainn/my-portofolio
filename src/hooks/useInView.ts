'use client';
import { useEffect, useRef, useState } from 'react';

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); io.unobserve(el); }
    }, { threshold: 0.15, ...options });
    io.observe(el); return () => io.disconnect();
  }, [options]);
  return { ref, inView };
}
