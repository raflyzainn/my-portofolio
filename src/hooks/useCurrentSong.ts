'use client';
import { useEffect, useState } from 'react';

export type CurrentSong = {
  title: string;
  artist?: string;
  src: string;
  cover?: string;
};

export function useCurrentSong(pollMs = 60000) {
  const [song, setSong] = useState<CurrentSong | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSong = async () => {
    const url = process.env.NEXT_PUBLIC_CURRENT_SONG_URL;
    if (!url) {
      setError('NEXT_PUBLIC_CURRENT_SONG_URL belum diset di .env.local');
      setLoading(false);
      return;
    }
    try {
      setError(null);
      const res = await fetch(url, { cache: 'no-store' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (!data?.src || !data?.title) throw new Error('Invalid JSON shape');
      setSong(data);
    } catch (e: any) {
      setError(e.message || 'Failed to fetch');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSong();
    if (pollMs > 0) {
      const id = window.setInterval(fetchSong, pollMs);
      return () => window.clearInterval(id);
    }
  }, [pollMs]);

  return { song, loading, error, refetch: fetchSong };
}
