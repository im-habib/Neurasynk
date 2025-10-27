// =============================
// Neurasynk — Next.js Componentized Landing (App Router + Tailwind)
// ES6+ modules, all components prefixed with `Neurasynk`.
// Copy each block into its file path.
// Palette: #142850, #27496D, #0C7B93, #00A8CC, #C1DADF
// =============================

// ---------------------------------
// FILE: /app/page.tsx (MAIN)
// ---------------------------------
import NeurasynkCTA from "@/components/NeurasynkCTA";
import NeurasynkHero from "@/components/NeurasynkHero";
import NeurasynkNavbar from "@/components/NeurasynkNavbar";
import NeurasynkFooter from "@/components/NeurasynkFooter";
import NeurasynkPrograms from "@/components/NeurasynkPrograms";
import NeurasynkProjects from "@/components/NeurasynkProjects";
import NeurasynkResearchMethod from "@/components/NeurasynkResearchMethod";
import NeurasynkPublications from "@/components/NeurasynkPublications";

const NeurasynkApp = () => {
  return (
    <main className="min-h-scree text-[#00A8CC]">
      <NeurasynkNavbar />
      <NeurasynkHero />
      <NeurasynkPrograms />
      <NeurasynkProjects />
      <NeurasynkResearchMethod />
      <NeurasynkPublications />
      <NeurasynkCTA />
      <NeurasynkFooter />
    </main>
  );
};

export default NeurasynkApp;
