import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowDownToLine } from "lucide-react";

interface SpecialBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
}

export function SpecialBadge({ 
  label, 
  className, 
  ...props 
}: SpecialBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 bg-background dark:bg-secondary backdrop-blur-sm px-3 py-1.5 rounded-full border border-border/50 shadow-sm", 
        className
      )}
      {...props}
    >
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="w-px h-5 bg-border/50" />
      <div className="flex items-center justify-center size-5 rounded-full bg-secondary dark:bg-background/30 shadow-sm">
        <ArrowDownToLine className="w-2.5 h-2.5 text-muted-foreground" />
      </div>
    </div>
  );
}

