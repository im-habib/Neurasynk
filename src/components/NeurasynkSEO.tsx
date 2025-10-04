// ---------------------------------
// FILE: /components/NeurasynkSEO.tsx
// ---------------------------------
"use client";

type NeurasynkSEOProps = { jsonLd?: object };

const NeurasynkSEO = ({ jsonLd }: NeurasynkSEOProps) => {
  if (!jsonLd) return null;
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default NeurasynkSEO;
