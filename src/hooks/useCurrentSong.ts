// src/hooks/useCurrentSong.ts
'use client';
import { useEffect, useState, useCallback } from 'react';

export type Song = { title: string; artist: string; src: string; cover?: string };

export function useCurrentSong(refreshMs = 60_000) {
  const [song, setSong] = useState<Song | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const URL = process.env.NEXT_PUBLIC_CURRENT_SONG_URL as string | undefined;

  const load = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      if (!URL) throw new Error('Missing NEXT_PUBLIC_CURRENT_SONG_URL');
      const res = await fetch(URL, { cache: 'no-store' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: unknown = await res.json();

      if (typeof data !== 'object' || data === null) throw new Error('Bad JSON');
      const d = data as Record<string, unknown>;
      const parsed: Song = {
        title: String(d.title ?? ''),
        artist: String(d.artist ?? ''),
        src: String(d.src ?? ''),
        cover: typeof d.cover === 'string' ? d.cover : undefined,
      };
      if (!parsed.title || !parsed.artist || !parsed.src) throw new Error('Invalid song fields');
      setSong(parsed);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, [URL]);

  useEffect(() => {
    void load();
    const id = setInterval(() => { void load(); }, refreshMs);
    return () => clearInterval(id);
  }, [load, refreshMs]);

  return { song, loading, error };
}
