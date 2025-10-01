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
      <p className="mt-4 text-lg text-[#27496D] max-w-2xl">
        Welcome to the Neurasynk development build. This site is under active
        construction 🚧.
      </p>
      <p className="mt-2 text-md text-[#0C7B93]">
        Synchronizing Brain and AI for adaptive, personalized neurofeedback.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a
          href="#programs"
          className="px-6 py-3 rounded-xl bg-[#00A8CC] text-white font-semibold hover:opacity-90"
        >
          Explore Programs
        </a>
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
