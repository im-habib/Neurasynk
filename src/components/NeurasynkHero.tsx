// ---------------------------------
// FILE: /components/NeurasynkHero.tsx
// Uses ViewportCard (auto-toggle: border/shadow/blur/background)
// ---------------------------------
"use client";

import Image from "next/image";
import ViewportCard from "@/hoc/ViewportCard";

export default function NeurasynkHero() {
  return (
    <ViewportCard
      // Background layer (theme tint)
      // paddingClassName="px-6 md:px-10"
      containerClassName="flex items-center"
      center={true}
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 md:grid-cols-2">
        {/* Left: text + CTAs */}
        <div>
          <span className="inline-block rounded-full border border-accent/30 bg-surface px-3 py-1 text-xs font-medium text-accent">
            Neuroadaptive · EEG · DRL
          </span>

          <h1 className="mt-4 text-fg text-3xl md:text-5xl font-extrabold leading-tight">
            Brain–AI systems for adaptive, personalized neurofeedback
          </h1>

          <p className="mt-4 text-fg-muted md:text-lg">
            Real-time closed-loop EEG + Deep Reinforcement Learning to modulate
            brain network dynamics for cognition and mental health.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold
                         text-[--color-accent-contrast] bg-accent border border-surface
                         hover:opacity-90 shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition"
            >
              Explore Projects
            </a>

            <a
              href="#research"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold
                         border border-accent bg-surface text-fg hover:bg-surface-hover
                         backdrop-blur-xl transition"
            >
              See the Science
            </a>
          </div>
        </div>

        {/* Right: glass image card */}
        <div
          className="rounded-xl bg-surface/70 p-3
                     border border-white/10
                     backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
        >
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded">
            <Image
              src="/hero.png" // ensure this exists in /public
              alt="Neurasynk neural illustration"
              fill
              sizes="(min-width: 768px) 560px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </ViewportCard>
  );
}
