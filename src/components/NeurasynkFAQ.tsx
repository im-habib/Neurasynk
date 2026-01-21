// ---------------------------------
// FILE: /components/NeurasynkFAQ.tsx
// ---------------------------------
"use client";

const FAQ = [
  {
    question: "What is adaptive neurofeedback?",
    answer: "Adaptive neurofeedback uses real-time EEG data and AI to provide personalized feedback that adjusts brain activity for cognitive enhancement and mental health."
  },
  {
    question: "How does AI improve neurofeedback?",
    answer: "AI analyzes complex brain signals and optimizes feedback strategies, leading to more effective and efficient training compared to traditional methods."
  },
  {
    question: "Who can benefit from Neurasynk's technology?",
    answer: "Researchers, clinicians, and individuals interested in cognitive training, mental health support, and neuroscience studies."
  },
  {
    question: "What support do you provide?",
    answer: "We offer training, documentation, community support, and priority assistance depending on your plan."
  },
  {
    question: "How much does it cost?",
    answer: "We have free academic access, professional plans starting at $499/month, and enterprise solutions at $999/month."
  }
];

export default function NeurasynkFAQ() {
  return (
    <section id="faq" className="py-16 bg-[#ecedf1]">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-center text-fg">Your Questions, Answered</h2>
        <p className="mt-4 text-center text-fg-muted">
          Answers to your most common questions about our neurofeedback technology
        </p>
        <div className="mt-12 space-y-6">
          {FAQ.map((item, i) => (
            <div key={item.question} className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-fg">{item.question}</h3>
              <p className="mt-2 text-fg-muted">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}