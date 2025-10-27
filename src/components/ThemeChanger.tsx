'use client';

import {useTheme} from 'next-themes';
import {useEffect, useState} from 'react';

const LABELS: Record<string, string> = {
  light: 'Light',
  dark: 'Dark',
  darkgray: 'Dark Gray',
  offwhite: 'Off White',
  turquoise: 'Turquoise',
  aliceblue: 'Alice Blue',
};

export default function ThemeChanger() {
  const { theme, themes, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return (
      <select
        className="h-10 rounded-xl border border-white/10 bg-white/10 px-3 text-sm"
        aria-label="Select theme"
      >
        <option>Loading…</option>
      </select>
    );
  }

  return (
    <label className="inline-flex items-center gap-2">
      <span className="sr-only">Theme</span>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="h-10 rounded-xl border border-white/10 bg-white/10 px-3 text-sm backdrop-blur-md
                   shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:bg-white/15 transition-colors"
        aria-label="Select theme"
      >
        {themes.map((t) => (
          <option key={t} value={t}>
            {LABELS[t] ?? t}
          </option>
        ))}
      </select>
    </label>
  );
}

// "use client";

// import { useTheme } from "next-themes";
// import { useState, useEffect } from "react";

// const ThemeChanger = () => {
//   const [mounted, setMounted] = useState(false);
//   const { theme, themes, setTheme } = useTheme();

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return (
//       <select>
//         <option>Loading...</option>
//       </select>
//     );
//   }

//   return (
//     <select value={theme} onChange={(e) => setTheme(e.target.value)}>
//       Themes{themes.map((t) => (
//         <option key={t} value={t}>
//           {t}
//         </option>
//       ))}
//     </select>
//   );
// };

// export default ThemeChanger;
