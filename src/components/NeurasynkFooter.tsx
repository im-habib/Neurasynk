// ---------------------------------
// FILE: /components/NeurasynkFooter.tsx
// ---------------------------------
"use client";

import Link from "next/link";

const FOOTER_LINKS = [
  { href: "#process", label: "Process" },
  { href: "#programs", label: "Programs" },
  { href: "#benefits", label: "Benefits" },
  { href: "#plans", label: "Plans" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#publications", label: "Publications" },
];

const CONTACT_LINKS = [
  { href: "mailto:hello@neurasynk.com", label: "Email" },
  { href: "https://www.linkedin.com/company/neurasynk", label: "LinkedIn" },
  { href: "https://github.com/neurasynk", label: "GitHub" },
  { href: "https://twitter.com/neurasynk", label: "Twitter" },
];

const NeurasynkFooter = () => {
  return (
    <footer className="bg-[#142850] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Link href="/" as="/">
                <div className="h-8 w-8 rounded bg-gradient-to-br from-[#00A8CC] to-[#0C7B93] flex items-center justify-center text-white text-2xl font-bold">
                  nS
                </div>
              </Link>
              <Link href="/" as="/">
                <span className="font-bold tracking-wide text-white">
                  Neurasynk
                </span>
              </Link>
            </div>
          </div>
          <p className="mt-3 text-sm text-white/80">
            Synchronizing Brain and AI.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Explore</h4>
          <ul className="mt-2 space-y-1 text-sm text-white/80">
            {FOOTER_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <ul className="mt-2 space-y-1 text-sm text-white/80">
            <li>
              {CONTACT_LINKS.map(({ href, label }) => (
                <a
                  href={href}
                  key={href}
                  className="hover:text-white"
                  target="_blank"
                >
                  {label}
                  {". "}
                </a>
              ))}
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Follow Us</h4>
          <div className="mt-2 flex space-x-4">
            <a href="https://www.linkedin.com/company/neurasynk" target="_blank" className="text-white/80 hover:text-white">
              LinkedIn
            </a>
            <a href="https://github.com/neurasynk" target="_blank" className="text-white/80 hover:text-white">
              GitHub
            </a>
            <a href="https://twitter.com/neurasynk" target="_blank" className="text-white/80 hover:text-white">
              Twitter
            </a>
          </div>
          <p className="mt-4 text-sm text-white/80">© {new Date().getFullYear()} Neurasynk</p>
        </div>
      </div>
    </footer>
  );
};

export default NeurasynkFooter;
