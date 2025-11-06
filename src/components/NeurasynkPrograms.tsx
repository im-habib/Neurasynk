// ---------------------------------
// FILE: /components/NeurasynkPrograms.tsx
// ---------------------------------
"use client";

import { NEURASYNK_PILLARS } from "@/data/neurasynk.content";

const NeurasynkPrograms = () => {
  return (
    <section id="programs" className="py-16 text-[#00A8CC]">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl md:text-3xl font-bold">Research Programs</h2>
        <p className="mt-2 text-[#27496D]">
          Our work spans four tightly‑coupled programs.
        </p>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEURASYNK_PILLARS.map((p) => (
            <div
              key={p.title}
              className="bg-[linear-gradient(120deg,var(--color-hero-tint)_0%,transparent_55%)] rounded-xl border border-[#C1DADF] p-5 hover:shadow-md"
            >
              <h3 className="font-semibold text-[#0C7B93]">{p.title}</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {p.points.map((pt, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#00A8CC]" />{" "}
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NeurasynkPrograms;
