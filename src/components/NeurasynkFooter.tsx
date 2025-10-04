// ---------------------------------
// FILE: /components/NeurasynkFooter.tsx
// ---------------------------------
"use client";

const FOOTER_LINKS = [
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
      <div className="mx-auto max-w-7xl px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#00A8CC] to-[#0C7B93]" />
            <span className="font-semibold">Neurasynk</span>
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
                <a href={href} className="hover:text-white" target="_blank">
                  {label}
                  {". "}
                </a>
              ))}
            </li>
            <li>© {new Date().getFullYear()} Neurasynk</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default NeurasynkFooter;
