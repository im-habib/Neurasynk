// ---------------------------------
// FILE: /components/NeurasynkAbout.tsx
// ---------------------------------
"use client";

export default function NeurasynkAbout() {
  return (
    <section id="about" className="py-16 bg-[#ecedf1]">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl font-bold text-fg">Who We Are</h2>
        <p className="mt-4 text-fg-muted max-w-3xl mx-auto">
          We are Neurasynk, a leading research group dedicated to advancing adaptive neurofeedback systems through cutting-edge AI and neuroscience. Our team is committed to pushing the boundaries of brain-AI interfaces for cognitive enhancement and mental health support.
        </p>
        <a
          href="#research"
          className="mt-6 inline-block px-6 py-3 bg-accent text-white rounded-xl font-semibold hover:opacity-90"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}