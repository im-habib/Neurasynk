// ---------------------------------
// FILE: /data/neurasynk.types.ts
// ---------------------------------
export type Pillar = {
  title: string;
  points: string[];
};

export type Project = {
  id: string;
  title: string;
  blurb: string;
  tags: string[];
  status: "Ideation" | "In Progress" | "Pilot" | "Published";
  link?: string;
};
