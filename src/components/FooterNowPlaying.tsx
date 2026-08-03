'use client';
import { useEffect, useRef, useState, type SVGProps } from 'react';
import Image from 'next/image';
import { useCurrentSong } from '@/hooks/useCurrentSong';

const IconPlay = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M8 5v14l11-7-11-7z"/></svg>
);
const IconPause = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>
);
const IconRepeat = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M17 1l-3 3 1.41 1.41L16 4.83V7a4 4 0 01-4 4H6v2h6a6 6 0 006-6V4.83l1.59 1.58L21 4l-4-3zM7 23l3-3-1.41-1.41L8 19.17V17a4 4 0 014-4h6v-2h-6a6 6 0 00-6 6v2.17L3.41 18 2 19l5 4z"/></svg>
);

function fmt(sec: number) {
  if (!Number.isFinite(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function FooterNowPlaying() {
  const { song, loading, error } = useCurrentSong(60_000);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [cur, setCur] = useState(0);
  const [dur, setDur] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const measurerRef = useRef<HTMLSpanElement | null>(null);
  const [shouldScroll, setShouldScroll] = useState(false);

  useEffect(() => {
    const check = () => {
      const c = containerRef.current;
      const m = measurerRef.current;
      if (!c || !m) return;
      setShouldScroll(m.scrollWidth > c.clientWidth + 8);
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [song?.title]);

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
    const onEnded = () => {
      el.currentTime = 0;
      el.play().catch(() => {});
      setIsPlaying(true);
    };
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
    if (isPlaying) {
      el.pause();
      setIsPlaying(false);
    } else {
      el.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const el = audioRef.current;
    if (!el) return;
    const v = Number(e.target.value);
    el.currentTime = v;
    setCur(v);
  };

  const titleText = loading ? 'Loading\u2026' : (song?.title || 'Not listening right now');

  // Never show raw errors to users — log to console only
  if (error) {
    console.error('FooterNowPlaying fetch error:', error);
  }

  return (
    <footer className="mt-24 border-t border-[--border-subtle] bg-[--bg-raised] backdrop-blur">
      <div className="mx-auto max-w-[min(1600px,92vw)] px-6 py-5">
        <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[--text-muted]">
          Current Song on Repeat
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
          {/* cover */}
          <div className="relative h-16 w-16 overflow-hidden rounded-md border border-[--border-subtle] bg-[--bg-base]">
            {song?.cover ? (
              <Image
                src={song.cover}
                alt={song.title}
                fill
                sizes="64px"
                className={`object-cover transition-transform duration-700 ${isPlaying ? 'scale-105' : ''}`}
              />
            ) : null}
          </div>

          {/* title + artist + progress */}
          <div className="min-w-0 flex-1">
            <span ref={measurerRef} className="absolute -left-[9999px] top-auto whitespace-nowrap">
              {titleText}
            </span>

            <div
              ref={containerRef}
              className={`text-base font-medium text-[--text-primary] ${shouldScroll ? 'marquee marquee--mask' : 'truncate'}`}
            >
              {shouldScroll ? (
                <div className="marquee__track" aria-label={titleText}>
                  <span>{titleText}</span>
                  <span aria-hidden="true">{titleText}</span>
                </div>
              ) : (
                <span>{titleText}</span>
              )}
            </div>

            <div className="truncate text-sm text-[--text-muted]">
              {song?.artist || ''}
            </div>

            <div className="mt-2 flex items-center gap-2">
              <span className="font-mono text-[11px] tabular-nums text-[--text-muted]">{fmt(cur)}</span>
              <input
                type="range"
                className="w-full accent-[--accent]"
                min={0}
                max={dur || 0}
                step={0.1}
                value={Math.min(cur, dur || 0)}
                onChange={seek}
              />
              <span className="font-mono text-[11px] tabular-nums text-[--text-muted]">{fmt(dur)}</span>
            </div>
          </div>

          {/* controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              disabled={!song?.src}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-[--bg-base]
                ${isPlaying ? 'bg-[--accent]' : 'bg-[--accent] hover:bg-[--accent-hover]'}
                disabled:opacity-50`}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <IconPause className="h-6 w-6" /> : <IconPlay className="h-6 w-6" />}
            </button>

            <span className="hidden items-center gap-1 rounded-full border border-[--accent-muted] bg-[--accent-muted]/30 px-2 py-1 font-mono text-xs text-[--accent-on-muted] sm:inline-flex">
              <IconRepeat className="h-4 w-4" />
              Repeat
            </span>
          </div>
        </div>
      </div>

      <audio ref={audioRef} src={song?.src} loop preload="metadata" />
    </footer>
  );
}
