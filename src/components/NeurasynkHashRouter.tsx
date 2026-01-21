// /components/NeurasynkHashRouter.tsx

"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const SECTION_IDS = new Set([
  "programs",
  "projects",
  "research",
  "publications",
  "contact",
]);

function run(router: ReturnType<typeof useRouter>, pathname: string) {
  const raw = typeof window !== "undefined" ? window.location.hash : "";
  const hash = (raw || "").replace(/^#/, "");

  // pattern: projects/<slug>
  const m = hash.match(/^projects\/([^/]+)$/);
  if (m) {
    const slug = decodeURIComponent(m[1]);
    // if we aren't already at that route, navigate
    if (!(pathname === `/projects/${slug}`))
      router.replace(`/projects/${slug}`);
    return;
  }

  // pattern: known section id (e.g., "#projects")
  if (SECTION_IDS.has(hash)) {
    // wait a tick for layout to paint, then scroll
    requestAnimationFrame(() => {
      document
        .getElementById(hash)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return;
  }

  // else: no-op (or strip the fragment if you want)
  // window.history.replaceState({}, "", window.location.pathname);
}

export default function NeurasynkHashRouter() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => run(router, pathname);
    handler();
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, [router, pathname]);

  return null;
}
