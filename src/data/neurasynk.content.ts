// ---------------------------------
// FILE: /data/neurasynk.content.ts
// ---------------------------------
import type { Pillar, Project } from "./neurasynk.types";

export const NEURASYNK_PILLARS: Pillar[] = [
  {
    title: "Deep Reinforcement Learning (DRL)",
    points: [
      "PPO/SAC with safety constraints (CMDP)",
      "Recurrent policies for temporal brain dynamics",
      "Reward shaping from network targets + usability metrics",
    ],
  },
  {
    title: "Brain Network Modeling",
    points: [
      "EEG features → PLV/wPLI/coherence + graph metrics",
      "Dimensionality reduction with AEs/Riemannian mapping",
      "Subject-specific targets (focus, relaxation, control)",
    ],
  },
  {
    title: "Real-Time Closed Loop",
    points: [
      "LSL → preprocessing → DRL → feedback pipeline",
      "End-to-end latency ≤ 150 ms",
      "Visual / audio / haptic adaptive feedback",
    ],
  },
  {
    title: "Safety, Ethics & Data",
    points: [
      "Intensity caps, artifact-aware fallback",
      "IRB/GDPR-ready data lifecycle",
      "Reproducible configs & encrypted logs",
    ],
  },
];

export const NEURASYNK_PROJECTS: Project[] = [
  {
    id: "neurasynk-core",
    title: "Neurasynk Core Platform",
    blurb:
      "End-to-end EEG→feature→policy→feedback stack for adaptive neurofeedback using DRL.",
    tags: ["EEG", "DRL", "Closed Loop"],
    status: "In Progress",
    link: "/projects/neurasynk-core",
  },
  {
    id: "feature-pipeline",
    title: "EEG Feature & Network Pipeline",
    blurb:
      "Low-latency preprocessing, artifact handling (ASR/ICA), bandpower + connectivity features with graph summaries.",
    tags: ["Signal Processing", "Connectivity", "Graphs"],
    status: "In Progress",
    link: "/projects/feature-pipeline",
  },
  {
    id: "policy-lab",
    title: "DRL Policy Lab",
    blurb:
      "Offline pretraining + on-policy fine-tuning. Constrained RL for safe, sample-efficient human-in-the-loop learning.",
    tags: ["PPO", "SAC", "Safety"],
    status: "Pilot",
    link: "/projects/policy-lab",
  },
  {
    id: "personalization",
    title: "Personalization Engine",
    blurb:
      "Meta-learning + subject embeddings for rapidly adapting policies to individual brain signatures.",
    tags: ["Meta-Learning", "Embeddings"],
    status: "Ideation",
    link: "/projects/personalization",
  },
  {
    id: "validation-study",
    title: "Human Validation Study",
    blurb:
      "Within-subject crossover (DRL vs Fixed-Rule). Neural + behavioral endpoints; preregistered analyses.",
    tags: ["Human Study", "Statistics"],
    status: "Ideation",
    link: "/projects/validation-study",
  },
  {
    id: "findrl",
    title: "FinDRL (Cross-Domain Research)",
    blurb:
      "Finance-focused DRL methods used to test exploration/exploitation & risk constraints transferable to neurofeedback.",
    tags: ["Finance", "DRL", "Transfer"],
    status: "Published",
    link: "/projects/findrl",
  },
];
