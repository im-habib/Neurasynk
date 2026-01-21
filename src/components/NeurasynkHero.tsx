"use client";

import Button from "./Button";

export default function NeurasynkHero() {
  return (
    <section className="py-20 bg-[#ecedf1] text-center">
      <div className="mx-auto max-w-4xl px-6">
        <h1
          className="text-5xl md:text-7xl font-bold leading-tight text-fg"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Transform Your <span className="text-accent">Business</span> with
          AI-Driven Automation
        </h1>
        <p className="mt-8 text-fg-muted text-xl max-w-2xl mx-auto">
          Harness the power of artificial intelligence to automate your most
          critical business processes, saving time and reducing costs.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {/* <a
            href="#plans"
            className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold text-white bg-accent shadow-[0_-5px_10px_rgba(250,251,255,1),0_5px_10px_rgba(166,171,189,0.5)] hover:opacity-90 transition"
          ></a> */}

          <Button text="See plans" hoverColor="#00a8cc" />
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-white shadow-[inset_-5px_-5px_5px_rgba(250,251,255,1),inset_5px_5px_5px_rgba(166,171,189,0.25)] flex items-center justify-center mb-4">
              <span className="text-2xl">🚀</span>
            </div>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-white shadow-[inset_-5px_-5px_5px_rgba(250,251,255,1),inset_5px_5px_5px_rgba(166,171,189,0.25)] flex items-center justify-center mb-4">
              <span className="text-2xl">🤖</span>
            </div>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-white shadow-[inset_-5px_-5px_5px_rgba(250,251,255,1),inset_5px_5px_5px_rgba(166,171,189,0.25)] flex items-center justify-center mb-4">
              <span className="text-2xl">⚡</span>
            </div>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-white shadow-[inset_-5px_-5px_5px_rgba(250,251,255,1),inset_5px_5px_5px_rgba(166,171,189,0.25)] flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
