// /components/NeurasynkHashRouter.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const SECTION_IDS = new Set([
  "programs",
  "projects",
  "research",
  "publications",
  "contact",
]);

function handleHash(router: ReturnType<typeof useRouter>) {
  const raw = (typeof window !== "undefined" ? window.location.hash : "") || "";
  const hash = raw.replace(/^#/, ""); // drop the '#'

  // pattern: projects/<slug>
  const projectMatch = hash.match(/^projects\/([^/]+)$/);
  if (projectMatch) {
    const slug = decodeURIComponent(projectMatch[1]);
    router.replace(`/projects/${slug}`); // will 404 if slug doesn't exist
    return;
  }

  // pattern: known section id (e.g., "projects")
  if (SECTION_IDS.has(hash)) {
    const el = document.getElementById(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  // Unknown fragment: no-op (or strip it)
  // window.history.replaceState({}, "", window.location.pathname);
}

export default function NeurasynkHashRouter() {
  const router = useRouter();

  useEffect(() => {
    // run on mount
    handleHash(router);

    // run on hash changes
    const onHash = () => handleHash(router);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [router]);

  return null;
}
