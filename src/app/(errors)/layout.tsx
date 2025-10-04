export const metadata = {
  title: "Neurasynk — Error",
  description: "An issue occurred.",
};

export default function ErrorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
