// ---------------------------------
// FILE: /components/NeurasynkProcess.tsx
// ---------------------------------
"use client";

export default function NeurasynkProcess() {
  return (
    <section id="process" className="py-16 bg-[#ecedf1]">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-center text-fg">Our Proven Process</h2>
        <p className="mt-4 text-center text-fg-muted">
          From concept to deployment, see how we bring neurofeedback AI to life
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-accent">01</div>
            <h3 className="mt-4 text-xl font-semibold text-fg">Analysis & Design</h3>
            <p className="mt-2 text-fg-muted">
              We analyze brain signals and design adaptive feedback systems tailored to individual needs.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent">02</div>
            <h3 className="mt-4 text-xl font-semibold text-fg">Development</h3>
            <p className="mt-2 text-fg-muted">
              We build Deep Reinforcement Learning policies and integrate real-time EEG processing for seamless neurofeedback.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent">03</div>
            <h3 className="mt-4 text-xl font-semibold text-fg">Deployment</h3>
            <p className="mt-2 text-fg-muted">
              We deploy solutions in research studies, provide training, and offer ongoing support for optimal results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}