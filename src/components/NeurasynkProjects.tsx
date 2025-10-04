// ---------------------------------
// FILE: /components/NeurasynkProjects.tsx
// ---------------------------------
"use client";

import { NEURASYNK_PROJECTS } from "@/data/neurasynk.content";
import NeurasynkTag from "./NeurasynkTag";

const NeurasynkProjects = () => {
  return (
    <section id="projects" className="py-16 bg-[#F7FBFD]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-4 text-[#142850]">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Active Projects</h2>
            <p className="mt-2 text-[#27496D]">
              Operational tracks derived from our research roadmap.
            </p>
          </div>
          <a
            href="/projects"
            className="text-[#0C7B93] font-medium hover:underline"
          >
            View all →
          </a>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEURASYNK_PROJECTS.map((proj) => (
            <article
              key={proj.id}
              className="group rounded-2xl border border-[#C1DADF] p-5 bg-white hover:shadow-lg transition text-[#142850]"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">{proj.title}</h3>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full border ${
                    proj.status === "Published"
                      ? "bg-[#C1DADF] text-[#142850]"
                      : proj.status === "Pilot"
                      ? "bg-[#00A8CC]/10 text-[#0C7B93] border-[#00A8CC]/30"
                      : "bg-[#27496D]/10 text-[#27496D] border-[#27496D]/30"
                  }`}
                >
                  {proj.status}
                </span>
              </div>
              <p className="mt-2 text-sm text-[#27496D]">{proj.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {proj.tags.map((t) => (
                  <NeurasynkTag key={t} label={t} />
                ))}
              </div>
              {proj.link && (
                <a
                  href={proj.link}
                  className="mt-4 inline-block text-[#0C7B93] font-medium hover:underline"
                >
                  Learn more →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NeurasynkProjects;
