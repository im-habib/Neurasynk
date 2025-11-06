"use client";

import type { CSSProperties, ReactNode } from "react";
import clsx from "clsx";

export type ViewportCardProps = {
  children: ReactNode;

  containerClassName?: string;
  className?: string;
  backgroundClassName?: string;
  backgroundStyle?: CSSProperties;
  colorOverrides?: Record<string, string>;

  /** Optional Tailwind or custom class to enable border */
  border?: string | boolean;
  /** Optional Tailwind or custom class to enable shadow */
  shadow?: string | boolean;
  /** Optional Tailwind or custom class to enable blur */
  blur?: string | boolean;
  /** Optional Tailwind or custom class to enable inner background */
  background?: string | boolean;

  radius?: string;
  center?: boolean;
  paddingClassName?: string;
};

/**
 * ViewportCard
 * - Full viewport container
 * - Auto-toggle border, shadow, background, blur
 * - Theme-aware (responds to CSS variables)
 */
export default function ViewportCard({
  children,
  containerClassName,
  className,
  backgroundClassName,
  backgroundStyle,
  colorOverrides,
  border,
  shadow,
  blur,
  background,
  radius = "3xl",
  center = true,
  paddingClassName = "p-6 md:p-10",
}: ViewportCardProps) {
  const varStyle: CSSProperties | undefined = colorOverrides
    ? Object.fromEntries(
        Object.entries(colorOverrides).map(([key, val]) => [`--${key}`, val])
      )
    : undefined;

  // ─────────────────────────────────────────────
  // Smart auto-toggle logic
  // ─────────────────────────────────────────────
  const borderClass = border
    ? typeof border === "string"
      ? border
      : "border border-white/10"
    : "";
  const shadowClass = shadow
    ? typeof shadow === "string"
      ? shadow
      : "shadow-[0_20px_60px_rgba(0,0,0,0.20)]"
    : "";
  const blurClass = blur
    ? typeof blur === "string"
      ? blur
      : "backdrop-blur-2xl"
    : "";
  const backgroundClass = background
    ? typeof background === "string"
      ? background
      : "bg-surface/70"
    : "";

  return (
    <section
      className={clsx(
        "relative isolate overflow-hidden min-h-dvh w-full transition-all duration-500",
        containerClassName
      )}
      style={varStyle}
    >
      {backgroundClassName && (
        <div
          aria-hidden
          className={clsx(
            "absolute inset-0 -z-10 transition-all duration-500",
            backgroundClassName
          )}
          style={backgroundStyle}
        />
      )}

      <div
        className={clsx(
          "mx-auto max-w-7xl w-full",
          center && "min-h-dvh flex items-center justify-center"
        )}
      >
        <div
          className={clsx(
            borderClass,
            shadowClass,
            blurClass,
            backgroundClass,
            `rounded-${radius}`,
            "transition-all duration-500 text-fg",
            paddingClassName,
            className
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
