'use client';
import {useEffect, useRef, useState, type SVGProps} from 'react';
import {useCurrentSong} from '@/hooks/useCurrentSong';

function fmt(sec: number) {
  if (!Number.isFinite(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

const IconPlay = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M8 5v14l11-7-11-7z"/></svg>
);
const IconPause = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>
);
const IconMusic = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
);

export default function AboutSong() {
  const {song, loading, error} = useCurrentSong(60_000);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [cur, setCur] = useState(0);
  const [dur, setDur] = useState(0);
  const hasSong = !!song?.src;

  // log errors, never show to user
  if (error) {
    console.error('AboutSong fetch error:', error);
  }

  useEffect(() => {
    setCur(0);
    setDur(0);
    setIsPlaying(false);
  }, [song?.src]);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const onTime = () => setCur(el.currentTime || 0);
    const onMeta = () => setDur(el.duration || 0);
    const onEnded = () => { el.currentTime = 0; el.play().catch(() => {}); setIsPlaying(true); };
    el.addEventListener('timeupdate', onTime);
    el.addEventListener('loadedmetadata', onMeta);
    el.addEventListener('ended', onEnded);
    return () => {
      el.removeEventListener('timeupdate', onTime);
      el.removeEventListener('loadedmetadata', onMeta);
      el.removeEventListener('ended', onEnded);
    };
  }, []);

  const toggle = () => {
    const el = audioRef.current;
    if (!el) return;
    if (isPlaying) { el.pause(); setIsPlaying(false); }
    else { el.play().then(() => setIsPlaying(true)).catch(() => {}); }
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const el = audioRef.current;
    if (!el) return;
    const v = Number(e.target.value);
    el.currentTime = v;
    setCur(v);
  };

  const displayText = loading ? 'Loading\u2026' : (song?.title || 'Not listening right now');

  return (
    <div className="mt-10 border-t border-[--border-subtle] pt-3">
      {/* One-line status */}
      <div className="flex items-center gap-2 text-[--text-muted]">
        <IconMusic className="h-3.5 w-3.5 shrink-0 text-[--accent]" />
        <span className={`truncate text-[11.5px] ${!hasSong ? 'opacity-60' : ''}`}>
          {displayText}
        </span>
        {hasSong && (
          <span className="shrink-0 font-mono text-[10px] tabular-nums">
            {fmt(cur)} / {fmt(dur)}
          </span>
        )}
      </div>

      {/* Progress bar + play button — shown only when song available */}
      {hasSong && (
        <div className="mt-2 flex items-center gap-2">
          <button
            onClick={toggle}
            className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[--accent] text-white transition-colors hover:bg-[--accent-hover]"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <IconPause className="h-3 w-3" /> : <IconPlay className="h-3 w-3" />}
          </button>
          <input
            type="range"
            className="w-full accent-[--accent]"
            min={0}
            max={dur || 0}
            step={0.1}
            value={Math.min(cur, dur || 0)}
            onChange={seek}
          />
        </div>
      )}

      <audio ref={audioRef} src={song?.src} loop preload="metadata" />
    </div>
  );
}
