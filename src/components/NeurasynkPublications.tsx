// ---------------------------------
// FILE: /components/NeurasynkPublications.tsx
// ---------------------------------
"use client";

const NeurasynkPublications = () => {
  return (
    <section id="publications" className="py-16 bg-[#F7FBFD] text-[#142850]">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          Publications & Resources
        </h2>
        <ul className="mt-6 space-y-4 text-sm">
          <li>
            • Adaptive Brain Network Neurofeedback via DRL (preprint, 2025) —{" "}
            <a className="text-[#0C7B93] hover:underline" href="#">
              PDF
            </a>{" "}
            ·{" "}
            <a className="text-[#0C7B93] hover:underline" href="#">
              Code
            </a>
          </li>
          <li>
            • FinDRL: Hybrid Models for Breakout Trading (2024) —{" "}
            <a className="text-[#0C7B93] hover:underline" href="#">
              Paper
            </a>
          </li>
          <li>
            • EEG Feature Pipeline (tech report) —{" "}
            <a className="text-[#0C7B93] hover:underline" href="#">
              Docs
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NeurasynkPublications;
