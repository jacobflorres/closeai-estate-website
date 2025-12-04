"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface HeroAnimateProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function HeroAnimate({ children, delay = 0, className }: HeroAnimateProps) {
  return (
    <div
      className={cn(
        "animate-slide-up opacity-0 [animation-fill-mode:forwards]",
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: "600ms",
        animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  );
}

