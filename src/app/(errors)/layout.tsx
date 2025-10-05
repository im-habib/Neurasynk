import { ReactNode } from "react";

export const metadata = {
  title: "Neurasynk — Error",
  description: "An issue occurred.",
};

export default function ErrorLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
