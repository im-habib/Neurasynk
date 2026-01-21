"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const LABELS: Record<string, string> = {
  dark: "Dark",
  light: "Light",
};

export default function ThemeChanger() {
  const { theme, themes, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return (
      <select className="h-6 px-3" aria-label="Select theme">
        <option>Loading…</option>
      </select>
    );
  }

  return (
    <label className="inline-flex items-center gap-2">
      {/* <span className="sr-only">Theme</span> */}
      <select
        value={theme}
        aria-label="Select theme"
        className="h-6 px-3 transition-colors"
        onChange={(e) => setTheme(e.target.value)}
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
