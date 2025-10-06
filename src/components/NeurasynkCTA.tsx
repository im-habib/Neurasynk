// ---------------------------------
// FILE: /components/NeurasynkCTA.tsx
// ---------------------------------
"use client";

import Link from "next/link";

const NeurasynkCTA = () => {
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
          {/* console.log("params: ", params); */}
          <Link
            href="mailto:hello@neurasynk.com"
            className="px-6 py-3 rounded-2xl bg-white text-[#142850] font-semibold hover:bg-[#C1DADF]"
          >
            hello@neurasynk.com
          </Link>
          <a href="mailto:hello@neurasynk.com"></a>
          <Link
            href="/brief"
            className="px-6 py-3 rounded-2xl bg-[#142850] text-white font-semibold hover:opacity-90"
          >
            Send Project Brief
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NeurasynkCTA;
