import * as React from "react";
import { cn } from "@/lib/utils";

interface BackgroundPatternProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function BackgroundPattern({
  children,
  className,
  ...props
}: BackgroundPatternProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        // --- Simple, lightweight dot pattern ---
        "before:absolute before:inset-0 before:bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:before:bg-[radial-gradient(#404040_1px,transparent_1px)] before:[background-size:18px_18px] before:opacity-20 dark:before:opacity-14 before:pointer-events-none",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
