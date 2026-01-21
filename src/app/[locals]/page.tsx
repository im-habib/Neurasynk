// =============================
// Neurasynk — Next.js Componentized Landing (App Router + Tailwind)
// ES6+ modules, all components prefixed with `Neurasynk`.
// Copy each block into its file path.
// Palette: #142850, #27496D, #0C7B93, #00A8CC, #C1DADF
// =============================

// ---------------------------------
// FILE: /app/page.tsx (MAIN)
// ---------------------------------
import NeurasynkFAQ from "@/components/NeurasynkFAQ";
import NeurasynkCTA from "@/components/NeurasynkCTA";
import NeurasynkHero from "@/components/NeurasynkHero";
import NeurasynkPlans from "@/components/NeurasynkPlans";
import NeurasynkAbout from "@/components/NeurasynkAbout";
import NeurasynkNavbar from "@/components/NeurasynkNavbar";
import NeurasynkFooter from "@/components/NeurasynkFooter";
import NeurasynkProcess from "@/components/NeurasynkProcess";
import NeurasynkProjects from "@/components/NeurasynkProjects";
import NeurasynkPrograms from "@/components/NeurasynkPrograms";
import NeurasynkBenefits from "@/components/NeurasynkBenefits";
import NeurasynkPublications from "@/components/NeurasynkPublications";
import NeurasynkTestimonials from "@/components/NeurasynkTestimonials";
import NeurasynkResearchMethod from "@/components/NeurasynkResearchMethod";

const NeurasynkApp = () => {
  return (
    <main className="min-h-scree text-[#00A8CC]">
      <NeurasynkNavbar />
      <NeurasynkHero />
      <NeurasynkProcess />
      <NeurasynkPrograms />
      <NeurasynkBenefits />
      <NeurasynkPlans />
      <NeurasynkAbout />
      <NeurasynkTestimonials />
      <NeurasynkFAQ />
      <NeurasynkProjects />
      <NeurasynkResearchMethod />
      <NeurasynkPublications />
      <NeurasynkCTA />
      <NeurasynkFooter />
    </main>
  );
};

export default NeurasynkApp;
