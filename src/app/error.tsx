"use client";

import { useEffect } from "react";
import NeurasynkError from "@/components/NeurasynkError";
import { NEURASYNK_ERRORS } from "@/lib/neurasynk-error-map";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // 🔹 optional: send to a logging service
    console.error("Neurasynk GlobalError:", error?.message, error?.digest);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center bg-[#F7FBFD] text-[#142850]">
        <NeurasynkError info={NEURASYNK_ERRORS["500"]} showBack={false} />
        <div className="mt-6 text-center">
          <button
            onClick={reset}
            className="px-6 py-2 rounded-xl bg-[#00A8CC] text-white font-semibold hover:opacity-90"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
