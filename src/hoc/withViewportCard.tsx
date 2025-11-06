"use client";

import React from "react";
import ViewportCard, { type ViewportCardProps } from "./ViewportCard";

export type WithViewportCardOptions = Omit<ViewportCardProps, "children">;

export function withViewportCardRef<T extends React.ComponentType<any>>(
  Wrapped: T,
  cardProps: WithViewportCardOptions
) {
  type P = React.ComponentPropsWithoutRef<T>;
  type R = React.ComponentRef<T>;

  const WithCard = React.forwardRef<R, P>((props, ref) => (
    <ViewportCard {...cardProps}>
      {/* @ts-expect-error — ref only valid if Wrapped accepts it; caller decides */}
      <Wrapped ref={ref} {...(props as P)} />
    </ViewportCard>
  ));

  (WithCard as any).displayName = `withViewportCard(${
    (Wrapped as any).displayName || Wrapped.name || "Component"
  })`;

  return WithCard as React.MemoExoticComponent<
    React.ForwardRefExoticComponent<P & React.RefAttributes<R>>
  >;
}
