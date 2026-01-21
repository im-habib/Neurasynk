// ---------------------------------
// FILE: /components/NeurasynkPrograms.tsx
// ---------------------------------
"use client";

import { NEURASYNK_PILLARS } from "@/data/neurasynk.content";

const NeurasynkPrograms = () => {
  return (
    <section id="programs" className="py-16 bg-[#ecedf1]">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-fg">Next-Gen Neurofeedback Solutions</h2>
        <p className="mt-2 text-center text-fg-muted">
          Innovative solutions tailored to meet your research and application needs
        </p>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEURASYNK_PILLARS.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md"
            >
              <h3 className="font-semibold text-accent">{p.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-fg">
                {p.points.map((pt, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />{" "}
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
