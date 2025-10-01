// ---------------------------------
// FILE: /components/NeurasynkFooter.tsx
// ---------------------------------
import React from "react";

export default function NeurasynkFooter() {
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
            <li>
              <a href="#programs" className="hover:text-white">
                Programs
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white">
                Projects
              </a>
            </li>
            <li>
              <a href="#research" className="hover:text-white">
                Research
              </a>
            </li>
            <li>
              <a href="#publications" className="hover:text-white">
                Publications
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <ul className="mt-2 space-y-1 text-sm text-white/80">
            <li>hello@neurasynk.com</li>
            <li>LinkedIn · GitHub · Twitter</li>
            <li>© {new Date().getFullYear()} Neurasynk</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
