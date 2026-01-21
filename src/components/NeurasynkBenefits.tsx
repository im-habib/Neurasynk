// ---------------------------------
// FILE: /components/NeurasynkBenefits.tsx
// ---------------------------------
"use client";

const BENEFITS = [
  {
    title: "Enhanced Cognition",
    description: "Improve attention, memory, and cognitive performance through adaptive neurofeedback."
  },
  {
    title: "Mental Health Support",
    description: "Aid in mental health treatments with personalized, AI-driven brain modulation."
  },
  {
    title: "Personalized Feedback",
    description: "Tailored neurofeedback systems that adapt to individual brain patterns."
  },
  {
    title: "Scalable Research",
    description: "Deploy solutions across studies and institutions with reproducible methods."
  },
  {
    title: "Faster Insights",
    description: "Accelerate neuroscience discoveries with real-time data analysis and AI."
  },
  {
    title: "Adaptive Systems",
    description: "Evolve with ongoing research, ensuring effective and up-to-date solutions."
  }
];

export default function NeurasynkBenefits() {
  return (
    <section id="benefits" className="py-16 bg-[#ecedf1]">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-center text-fg">Experience the Neurofeedback Advantage</h2>
        <p className="mt-4 text-center text-fg-muted">
          Discover the benefits of partnering with our AI-driven neurofeedback technology
        </p>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit) => (
            <div key={benefit.title} className="text-center">
              <h3 className="text-xl font-semibold text-fg">{benefit.title}</h3>
              <p className="mt-2 text-fg-muted">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}