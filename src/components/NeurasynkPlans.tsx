// ---------------------------------
// FILE: /components/NeurasynkPlans.tsx
// ---------------------------------
"use client";

const PLANS = [
  {
    name: "Academic",
    price: "Free",
    description: "Perfect for researchers and students.",
    features: [
      "Access to open datasets",
      "Basic EEG analysis tools",
      "Community support",
      "Research publications"
    ],
    button: "Get Started",
    link: "#contact"
  },
  {
    name: "Professional",
    price: "$499 / month",
    description: "For clinical practitioners and small teams.",
    features: [
      "Custom neurofeedback development",
      "Advanced AI models",
      "Priority support",
      "Training sessions"
    ],
    button: "Get Started",
    link: "#contact"
  },
  {
    name: "Enterprise",
    price: "$999 / month",
    description: "Full-scale solutions for institutions.",
    features: [
      "Unlimited custom solutions",
      "Dedicated AI engineers",
      "24/7 support",
      "On-site integration"
    ],
    button: "Get Started",
    link: "#contact"
  }
];

export default function NeurasynkPlans() {
  return (
    <section id="plans" className="py-16 bg-[#ecedf1]">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-center text-fg">Flexible Pricing, Maximum Impact</h2>
        <p className="mt-4 text-center text-fg-muted">
          Choose the perfect plan for your research or application needs
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {PLANS.map((plan) => (
            <div key={plan.name} className="bg-white rounded-xl border border-gray-200 p-6 text-center">
              <h3 className="text-xl font-semibold text-fg">{plan.name}</h3>
              <div className="mt-2 text-3xl font-bold text-accent">{plan.price}</div>
              <p className="mt-2 text-fg-muted">{plan.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-fg">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <a
                href={plan.link}
                className="mt-6 inline-block px-6 py-3 bg-accent text-white rounded-xl font-semibold hover:opacity-90"
              >
                {plan.button}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}