// ---------------------------------
// FILE: /components/NeurasynkNavbar.tsx
// ---------------------------------
"use client";

import React from "react";

const NAV_LINKS = [
  { href: "#programs", label: "Programs" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#publications", label: "Publications" },
  { href: "#contact", label: "Contact" },
];

export default function NeurasynkNavbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-[#C1DADF]">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#00A8CC] to-[#0C7B93]" />
          <span className="font-bold tracking-wide text-[#142850]">
            Neurasynk
          </span>
        </div>
        <ul className="hidden md:flex items-center gap-6 text-sm text-[#142850]">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="hover:text-[#0C7B93]">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-block px-4 py-2 rounded-xl bg-[#00A8CC] text-white font-medium hover:opacity-90"
        >
          Collaborate
        </a>
      </div>
    </nav>
  );
}
