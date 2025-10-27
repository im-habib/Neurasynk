// ---------------------------------
// FILE: /components/NeurasynkHero.tsx
// Tailwind v4 + @theme variables version
// ---------------------------------
"use client";

import Image from "next/image";

export default function NeurasynkHero() {
  return (
    <section className="relative isolate overflow-hidden py-20 md:py-28">
      {/* translucent overlay tint (uses theme variable) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(120deg,var(--color-hero-tint)_0%,transparent_55%)]" />
      {/* subtle vignette for readability */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_20%_0%,transparent,rgba(0,0,0,0.14))] [@media(prefers-color-scheme:light)]:bg-[radial-gradient(1200px_600px_at_20%_0%,transparent,rgba(255,255,255,0.06))]" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2">
        {/* Left side: heading + CTA */}
        <div>
          {/* Chip */}
          <span className="inline-block rounded-full border border-accent/30 bg-surface px-3 py-1 text-xs font-medium text-accent">
            Neuroadaptive · EEG · DRL
          </span>

          {/* Title */}
          <h1 className="mt-4 text-fg text-3xl font-extrabold leading-tight md:text-5xl">
            Brain–AI systems for adaptive, personalized neurofeedback
          </h1>

          {/* Description */}
          <p className="mt-4 text-fg-muted md:text-lg">
            Real-time closed-loop EEG + Deep Reinforcement Learning to modulate
            brain network dynamics for cognition and mental health.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold 
                         text-[--color-accent-contrast] bg-accent hover:opacity-90 shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
            >
              Explore Projects
            </a>

            <a
              href="#research"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold 
                         border border-accent bg-surface text-fg hover:bg-surface-hover backdrop-blur-xl transition"
            >
              See the Science
            </a>
          </div>
        </div>

        {/* Right side: specification card */}
        <div
          className="rounded-xl bg-surface/70 p-3 border border-accent/30
                     backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
        >
          <Image height={400} width={600} src="/hero.png" alt="" className="rounded" />
          {/* <ul className="space-y-3">
            {[
              "Latency budget ≤ 150 ms from window end to feedback onset.",
              "Network-aware targets: PLV / wPLI / coherence → graph metrics.",
              "Constrained PPO / SAC with artifact-aware rewards and safety caps.",
              "Personalized calibration and on-policy fine-tuning per subject.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-fg">
                <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                <span className="text-fg-muted">{item}</span>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </section>
  );
}
// // ---------------------------------
// // FILE: /components/NeurasynkHero.tsx
// // ---------------------------------
// "use client";

// const NeurasynkHero = () => {
//   return (
//     <section className="text-[#00A8CC]">
//       <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
//         <div>
//           <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
//             Brain–AI systems for adaptive, personalized neurofeedback
//           </h1>
//           <p className="mt-4 text-white/90 md:text-lg">
//             Real-time closed-loop EEG + Deep Reinforcement Learning to modulate
//             brain network dynamics for cognition and mental health.
//           </p>
//           <div className="mt-8 flex gap-4">
//             <a
//               href="#projects"
//               className="px-5 py-3 rounded-2xl bg-white text-[#142850] font-semibold hover:bg-[#C1DADF]"
//             >
//               Explore Projects
//             </a>
//             <a
//               href="#research"
//               className="px-5 py-3 rounded-2xl bg-[#0C7B93] text-white font-semibold hover:opacity-90"
//             >
//               See the Science
//             </a>
//           </div>
//         </div>
//         <div className="rounded-3xl bg-white/10 p-6 border border-white/20">
//           <ul className="space-y-3">
//             <li className="flex items-start gap-3">
//               <span className="mt-1 h-2 w-2 rounded-full bg-[#00A8CC]" />{" "}
//               <span>
//                 Latency budget ≤ <b>150 ms</b> from window end to feedback
//                 onset.
//               </span>
//             </li>
//             <li className="flex items-start gap-3">
//               <span className="mt-1 h-2 w-2 rounded-full bg-[#00A8CC]" />{" "}
//               <span>
//                 Network-aware targets: PLV/wPLI/coherence → graph metrics.
//               </span>
//             </li>
//             <li className="flex items-start gap-3">
//               <span className="mt-1 h-2 w-2 rounded-full bg-[#00A8CC]" />{" "}
//               <span>
//                 Constrained PPO/SAC with artifact-aware rewards and safety caps.
//               </span>
//             </li>
//             <li className="flex items-start gap-3">
//               <span className="mt-1 h-2 w-2 rounded-full bg-[#00A8CC]" />{" "}
//               <span>
//                 Personalized calibration and on-policy fine‑tuning per subject.
//               </span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NeurasynkHero;
