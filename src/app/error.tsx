"use client";
import NeurasynkError from "@/components/NeurasynkError";
import { NEURASYNK_ERRORS } from "@/lib/neurasynk-error-map";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // optional: send to Sentry/Log service
    console.error("GlobalError:", error?.message, error?.digest);
  }, [error]);

  return (
    <html>
      <body>
        <NeurasynkError info={NEURASYNK_ERRORS["500"]} />
      </body>
    </html>
  );
}
