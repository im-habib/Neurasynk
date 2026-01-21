"use client";

import Link from "next/link";
import ThemeChanger from "./ThemeChanger";

const NAV_LINKS = [
  { href: "#process", label: "Process" },
  { href: "#programs", label: "Programs" },
  // { href: "#benefits", label: "Benefits" },
  // { href: "#plans", label: "Plans" },
  { href: "#about", label: "About" },
  // { href: "#testimonials", label: "Testimonials" },
  { href: "#projects", label: "Projects" },
  // { href: "#research", label: "Research" },
  { href: "#publications", label: "Publications" },
  { href: "#contact", label: "Contact" },
];

const NeurasynkNavbar = () => {
  return (
    <div className="sticky top-4 z-50 flex justify-center">
      <nav className="rounded-full shadow-[inset_-5px_-5px_5px_rgba(250,251,255,1),inset_5px_5px_5px_rgba(166,171,189,0.25)] px-6 py-2 flex items-center justify-between max-w-7xl w-full mx-4">
        <div className="flex items-center gap-2">
          <Link href="/" as="/">
            <span
              className="font-bold text-fg text-xl"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Neuro<span className="text-accent">synk</span>
            </span>
          </Link>
        </div>
        <ul className="hidden md:flex items-center gap-4 text-sm">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <button className="px-4 py-2 rounded-full hover:bg-gray-200 transition">
                <a href={href} className="text-fg hover:text-accent">
                  {label}
                </a>
              </button>
            </li>
          ))}
        </ul>
        <a className="hidden md:inline-block px-4 py-2 rounded-full bg-accent text-white font-medium shadow-[0_-5px_10px_rgba(250,251,255,1),0_5px_10px_rgba(166,171,189,0.5)] hover:opacity-90">
          <ThemeChanger />
        </a>
      </nav>
    </div>
  );
};

export default NeurasynkNavbar;
