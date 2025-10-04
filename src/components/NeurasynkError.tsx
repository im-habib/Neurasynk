"use client";
import React from "react";
import Link from "next/link";
import type { NeurasynkErrorInfo } from "@/lib/neurasynk-error-map";

export default function NeurasynkError({
  info,
  showHome = true,
  showBack = true,
}: {
  info: NeurasynkErrorInfo;
  showHome?: boolean;
  showBack?: boolean;
}) {
  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-[#F7FBFD] px-6">
      <div className="max-w-xl w-full text-center text-[#142850]">
        <div className="inline-flex items-center gap-3">
          <span className="text-5xl font-extrabold">{info.code}</span>
          <span className="text-sm px-2 py-1 rounded-full bg-[#C1DADF] text-[#142850]">
            {info.label}
          </span>
        </div>
        <h1 className="mt-4 text-2xl md:text-3xl font-bold">{info.headline}</h1>
        <p className="mt-3 text-[#27496D]">{info.detail}</p>
        {info.hint && (
          <p className="mt-2 text-sm text-[#0C7B93]">{info.hint}</p>
        )}

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          {showBack && (
            <button
              onClick={() =>
                typeof window !== "undefined" ? window.history.back() : null
              }
              className="px-5 py-2.5 rounded-xl bg-white border border-[#C1DADF] text-[#142850] font-semibold hover:bg-[#C1DADF]"
            >
              Go Back
            </button>
          )}
          {showHome && (
            <Link
              href="/"
              className="px-5 py-2.5 rounded-xl bg-[#00A8CC] text-white font-semibold hover:opacity-90"
            >
              Home
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
