// ---------------------------------
// FILE: /components/NeurasynkHero.tsx
// ---------------------------------
"use client";

const NeurasynkHero = () => {
  return (
    <section className="bg-gradient-to-br from-[#142850] via-[#27496D] to-[#00A8CC] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Brain–AI systems for adaptive, personalized neurofeedback
          </h1>
          <p className="mt-4 text-white/90 md:text-lg">
            Real-time closed-loop EEG + Deep Reinforcement Learning to modulate
            brain network dynamics for cognition and mental health.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-5 py-3 rounded-2xl bg-white text-[#142850] font-semibold hover:bg-[#C1DADF]"
            >
              Explore Projects
            </a>
            <a
              href="#research"
              className="px-5 py-3 rounded-2xl bg-[#0C7B93] text-white font-semibold hover:opacity-90"
            >
              See the Science
            </a>
          </div>
        </div>
        <div className="rounded-3xl bg-white/10 p-6 border border-white/20">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#00A8CC]" />{" "}
              <span>
                Latency budget ≤ <b>150 ms</b> from window end to feedback
                onset.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#00A8CC]" />{" "}
              <span>
                Network-aware targets: PLV/wPLI/coherence → graph metrics.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#00A8CC]" />{" "}
              <span>
                Constrained PPO/SAC with artifact-aware rewards and safety caps.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#00A8CC]" />{" "}
              <span>
                Personalized calibration and on-policy fine‑tuning per subject.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NeurasynkHero;
