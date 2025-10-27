// /app/not-found.tsx

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] grid place-items-center text-center p-8">
      <div>
        <h1 className="text-3xl font-bold">404 — Page Not Found</h1>
        <p className="mt-2 text-slate-600">
          The link may be broken or the page moved.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-xl bg-[#00A8CC] px-5 py-3 text-white"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
}
