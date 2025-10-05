import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import NeurasynkHashRouter from "@/components/NeurasynkHashRouter";

const geistSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neurasynk — Synchronizing Brain and AI",
  description:
    "We are building next-generation closed-loop neurofeedback systems using Deep Reinforcement Learning, EEG, and Brain Network Modeling. Our mission is to create adaptive technologies that enhance cognition, support mental health, and drive neurorehabilitation.",
};

export default function NeurasynkLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-[#142850]`}
      >
        {/* Global utilities */}
        <NeurasynkHashRouter />
        <div className="w-full bg-[#00A8CC] text-white text-center py-2 text-sm font-medium">
          🚧 Neurasynk is under active development. Coming soon. 🚀
        </div>

        {/* Page content */}
        {children}
      </body>
    </html>
  );
}
