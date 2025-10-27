// /app/(errors)/[code]/page.tsx

import type { Metadata } from "next";
import NeurasynkError from "@/components/NeurasynkError";
import { NEURASYNK_ERRORS } from "@/lib/neurasynk-error-map";

export function generateStaticParams() {
  return ["400", "401", "403", "502", "503", "504", "505"].map((code) => ({
    code,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { code: string };
}): Promise<Metadata> {
  const info = NEURASYNK_ERRORS[params.code] ?? NEURASYNK_ERRORS["500"];
  return {
    title: `${info.code} ${info.label} — Neurasynk`,
    description: info.detail,
    robots: { index: false },
  };
}

export default function ErrorCodePage({
  params,
}: {
  params: { code: string };
}) {
  const info = NEURASYNK_ERRORS[params.code] ?? NEURASYNK_ERRORS["500"];
  return <NeurasynkError info={info} />;
}
