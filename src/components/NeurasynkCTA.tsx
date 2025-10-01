// ---------------------------------
// FILE: /components/NeurasynkCTA.tsx
// ---------------------------------
import React from "react";

export default function NeurasynkCTA() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-[#0C7B93] to-[#00A8CC] text-white"
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Partner with Neurasynk
        </h2>
        <p className="mt-3 text-white/90">
          We collaborate with universities, hospitals, and industry labs on EEG
          studies, algorithm development, and product pilots.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:hello@neurasynk.com"
            className="px-6 py-3 rounded-2xl bg-white text-[#142850] font-semibold hover:bg-[#C1DADF]"
          >
            hello@neurasynk.com
          </a>
          <a
            href="/brief"
            className="px-6 py-3 rounded-2xl bg-[#142850] text-white font-semibold hover:opacity-90"
          >
            Send Project Brief
          </a>
        </div>
      </div>
    </section>
  );
}
