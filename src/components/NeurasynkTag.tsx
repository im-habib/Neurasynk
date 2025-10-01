// ---------------------------------
// FILE: /components/NeurasynkTag.tsx
// ---------------------------------
import React from "react";
export default function NeurasynkTag({ label }: { label: string }) {
  return (
    <span className="px-2 py-0.5 text-xs rounded-full bg-[#C1DADF] text-[#142850]">
      {label}
    </span>
  );
}
