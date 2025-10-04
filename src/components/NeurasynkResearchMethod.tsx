// ---------------------------------
// FILE: /components/NeurasynkResearchMethod.tsx
// ---------------------------------
"use client";

const NeurasynkResearchMethod = () => {
  return (
    <section id="research" className="py-16 bg-white text-[#142850]">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-start">
        <div className="rounded-3xl p-6 border border-[#C1DADF]">
          <h3 className="text-xl font-bold">Method at a Glance</h3>
          <ol className="mt-4 space-y-3 text-sm">
            <li>
              <b>Sense:</b> 32–64ch EEG → band‑limited, artifact‑aware features.
            </li>
            <li>
              <b>Model:</b> Connectivity matrices → graph metrics → reduced
              state vector.
            </li>
            <li>
              <b>Decide:</b> PPO/SAC policy selects feedback modality &
              intensity.
            </li>
            <li>
              <b>Reward:</b> TargetIndex Δ − artifact/aversiveness penalties +
              task gains.
            </li>
            <li>
              <b>Adapt:</b> Per‑subject calibration and block‑wise fine‑tuning.
            </li>
          </ol>
        </div>
        <div className="rounded-3xl p-6 border border-[#C1DADF]">
          <h3 className="text-xl font-bold">Planned Outcomes</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              ↑ Time‑in‑target and improved network efficiency vs fixed‑rule
              neurofeedback.
            </li>
            <li>
              ↑ Behavioral performance on attention/memory tasks with retention.
            </li>
            <li>
              Open datasets (features + events) and reproducible baseline code.
            </li>
          </ul>
          <div className="mt-6 flex gap-3">
            <a
              href="#publications"
              className="px-4 py-2 rounded-xl bg-[#00A8CC] text-white font-semibold hover:opacity-90"
            >
              Preprints & Code
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-xl bg-white border border-[#C1DADF] text-[#142850] font-semibold hover:bg-[#C1DADF]"
            >
              Join a Study
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeurasynkResearchMethod;
