'use client';
import { useEffect, useState } from 'react';

export default function Typing({
  words,
  speed = 70,
  pause = 1400,
  className = "",
}: {
  words: string[];
  speed?: number;   
  pause?: number;   
  className?: string;
}) {
  const [i, setI] = useState(0);        
  const [sub, setSub] = useState("");   
  const [del, setDel] = useState(false);

  useEffect(() => {
    const full = words[i];
    if (!del) {
      if (sub.length < full.length) {
        const t = setTimeout(() => setSub(full.slice(0, sub.length + 1)), speed);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setDel(true), pause);
        return () => clearTimeout(t);
      }
    } else {
      if (sub.length > 0) {
        const t = setTimeout(() => setSub(full.slice(0, sub.length - 1)), speed * 0.6);
        return () => clearTimeout(t);
      } else {
        setDel(false);
        setI((i + 1) % words.length);
      }
    }
  }, [sub, del, i, words, speed, pause]);

  return (
    <span className={className}>
      {sub}
      <span className="ml-0.5 inline-block w-[1px] animate-pulse bg-current align-middle" style={{height:'1em'}} />
    </span>
  );
}
