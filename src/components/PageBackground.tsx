'use client';
import { useCallback } from 'react';

export default function PageBackground() {
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Coral glow */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 20% 10%, var(--accent) 0%, transparent 45%)',
          }}
        />
      </div>
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 80% 85%, var(--accent) 0%, transparent 40%)',
          }}
        />
      </div>

      {/* Grid pattern */}
      <div className="page-grid absolute inset-0 opacity-25" />

      {/* Spotlight cursor */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          background:
            'radial-gradient(circle 400px at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--accent), transparent)',
        }}
      />
    </div>
  );
}
