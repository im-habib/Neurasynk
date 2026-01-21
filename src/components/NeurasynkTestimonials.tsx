// ---------------------------------
// FILE: /components/NeurasynkTestimonials.tsx
// ---------------------------------
"use client";

const TESTIMONIALS = [
  {
    quote: "Neurasynk's adaptive neurofeedback has revolutionized our cognitive training protocols.",
    name: "Dr. Sarah Chen",
    title: "Neuroscientist, Stanford University"
  },
  {
    quote: "The AI-driven insights have accelerated our mental health research significantly.",
    name: "Prof. Michael Torres",
    title: "Clinical Psychologist, Harvard Medical School"
  },
  {
    quote: "Their personalized systems have shown promising results in our EEG studies.",
    name: "Dr. Emily Rodriguez",
    title: "Research Director, MIT Brain Lab"
  }
];

export default function NeurasynkTestimonials() {
  return (
    <section id="testimonials" className="py-16 bg-[#ecedf1]">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-center text-fg">What Researchers Say</h2>
        <p className="mt-4 text-center text-fg-muted">
          Discover how our neurofeedback technology has impacted neuroscience research
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 text-center">
              <p className="text-fg-muted italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="mt-4">
                <div className="font-semibold text-fg">{testimonial.name}</div>
                <div className="text-sm text-fg-muted">{testimonial.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}