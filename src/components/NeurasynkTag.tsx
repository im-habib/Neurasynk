// ---------------------------------
// FILE: /components/NeurasynkTag.tsx
// ---------------------------------
"use client";

const NeurasynkTag = ({ label }: { label: string }) => {
  return (
    <span className="px-2 py-0.5 text-xs rounded-full bg-[#C1DADF] text-[#142850]">
      {label}
    </span>
  );
};

export default NeurasynkTag;
