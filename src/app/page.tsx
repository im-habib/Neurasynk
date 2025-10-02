// ---------------------------------
// FILE: /app/page.tsx (MAIN PAGE)
// ---------------------------------
import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#F7FBFD] text-center px-6">
      <h1 className="text-4xl md:text-6xl font-extrabold text-[#142850]">
        Neurasynk
      </h1>

      {/* Vision Message */}
      <p className="mt-4 text-lg text-[#27496D] max-w-2xl">
        Synchronizing Brain and AI for Adaptive, Personalized Neurofeedback.
      </p>

      {/* Mission Clarification */}
      <p className="mt-2 text-md text-[#0C7B93] max-w-3xl">
        We are building <b>next-generation closed-loop neurofeedback systems</b>{" "}
        using
        <b> Deep Reinforcement Learning</b>, <b>EEG</b>, and{" "}
        <b>Brain Network Modeling</b>. Our mission is to create adaptive
        technologies that <b>enhance cognition</b>,<b> support mental health</b>
        , and <b>drive neurorehabilitation</b>.
      </p>

      {/* Development Status */}
      <p className="mt-6 text-md text-[#27496D] italic">
        🚧 This site is under active development. We are coming soon with more
        research updates, projects, and collaboration opportunities. Stay tuned.
        🚀
      </p>

      {/* CTA Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        {/* <a
          href="#programs"
          className="px-6 py-3 rounded-xl bg-[#00A8CC] text-white font-semibold hover:opacity-90"
        >
          Explore Programs
        </a> */}
        <a
          href="mailto:hello@neurasynk.com"
          className="px-6 py-3 rounded-xl bg-white border border-[#C1DADF] text-[#142850] font-semibold hover:bg-[#C1DADF]"
        >
          Contact Us
        </a>
      </div>
    </main>
  );
}
