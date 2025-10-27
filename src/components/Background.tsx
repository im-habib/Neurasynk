'use client';

import Image from 'next/image';
import {useEffect, useMemo, useRef, useState} from 'react';
import {useTheme} from 'next-themes';

const MAP: Record<string, string> = {
  light: '/bg-light.png',
  dark: '/bg-dark.png',
  darkgray: '/bg-darkgray.png',
  offwhite: '/bg-offwhite.png',
  turquoise: '/bg-turquoise.png',
  aliceblue: '/bg-aliceblue.png',
};

export default function Background() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Current and next image sources for cross-fade
  const [currentSrc, setCurrentSrc] = useState<string>(MAP.light);
  const [nextSrc, setNextSrc] = useState<string | null>(null);

  const fadeRef = useRef<HTMLDivElement>(null);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);
  const targetSrc = useMemo(() => MAP[theme ?? 'light'] ?? MAP.light, [theme]);

  // When theme changes: preload next image, then trigger cross-fade
  useEffect(() => {
    if (!mounted) return;
    if (targetSrc === currentSrc) return;

    const img = new window.Image();
    img.src = targetSrc;
    img.onload = () => {
      setNextSrc(targetSrc);
      // start fade-in, then after transition complete, swap current
      requestAnimationFrame(() => {
        fadeRef.current?.classList.remove('opacity-0');
        fadeRef.current?.classList.add('opacity-100');
      });
    };
  }, [mounted, targetSrc, currentSrc]);

  // After the fade completes, commit nextSrc to currentSrc and reset
  const handleTransitionEnd = () => {
    if (!nextSrc) return;
    setCurrentSrc(nextSrc);
    setNextSrc(null);
    // reset overlay opacity for next time
    fadeRef.current?.classList.remove('opacity-100');
    fadeRef.current?.classList.add('opacity-0');
  };

  if (!mounted) return null;

  return (
    <div aria-hidden className="fixed inset-0 -z-10">
      {/* base (current) */}
      <Image
        key={currentSrc}
        src={currentSrc}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* overlay (next) for cross-fade */}
      {nextSrc && (
        <div
          ref={fadeRef}
          onTransitionEnd={handleTransitionEnd}
          className="absolute inset-0 opacity-0 transition-opacity duration-700 ease-out motion-reduce:transition-none"
        >
          <Image
            key={nextSrc}
            src={nextSrc}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* subtle glass overlay to help contrast */}
      <div className="absolute inset-0 bg-white/5 dark:bg-black/20 backdrop-blur-[1px] pointer-events-none" />
    </div>
  );
}