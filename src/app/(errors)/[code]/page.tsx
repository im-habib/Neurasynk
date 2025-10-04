import type { Metadata } from "next";
import NeurasynkError from "@/components/NeurasynkError";
import { NEURASYNK_ERRORS } from "@/lib/neurasynk-error-map";

export function generateStaticParams() {
  // These routes are statically generated so they’re always available
  return ["400", "401", "403", "404", "500", "502", "503", "504", "505"].map(
    (code) => ({ code })
  );
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
    robots: { index: false }, // usually keep error pages out of search
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
