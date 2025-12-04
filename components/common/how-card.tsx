"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check, UserPlus, Settings, Zap, type LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BOOK_CALL_CONFIG } from "@/content/main/navigation";
import { cn } from "@/lib/utils";

// Icon map
const icons: Record<string, LucideIcon> = {
  UserPlus,
  Settings,
  Zap,
};

/* ------------------------------------------
   TIMELINE WRAPPER
   ------------------------------------------ */

export function HowTimeline({ children }: { children: React.ReactNode }) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Full timeline line height
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative">
      {/* Single vertical scroll-controlled line */}
      <motion.div
        className="absolute left-6 top-0 w-px bg-border/50 origin-top"
        style={{ height: lineHeight }}
      />

      {/* Cards stack */}
      <div className="space-y-20">{children}</div>
    </div>
  );
}

/* ------------------------------------------
   HOW CARD
   ------------------------------------------ */

interface HowCardProps {
  version: string;
  title: string;
  description: string;
  points: string[];
  icon: string;
  gradient: string;
  index: number;
  className?: string;
}

export function HowCard({
  version,
  title,
  description,
  points,
  icon: iconName,
  gradient,
  index,
  className,
}: HowCardProps) {
  const Icon = icons[iconName] || UserPlus;

  return (
    <div className={cn("flex gap-6 items-start relative", className)}>
      {/* Step Circle */}
      <div className="flex-shrink-0 size-12 rounded-full bg-background border border-border/50 flex items-center justify-center relative z-10">
        <span className="text-muted-foreground text-xs sm:text-sm font-medium">
          {version}
        </span>
      </div>

      {/* Card */}
      <Card className="flex-1 hover:border-border hover:shadow-sm transition-all">
        <CardContent className="p-4 px-6 text-left">
          {/* Icon + Title */}
          <div className="flex items-center gap-3 mb-4">
            <div className={cn("p-2.5 rounded-md bg-gradient-to-br", gradient)}>
              <Icon className="size-4.5 text-white" />
            </div>
            <h3 className="text-foreground text-lg font-medium">{title}</h3>
          </div>

          {/* Description */}
          <p className="text-sm md:text-base text-muted-foreground mb-4">
            {description}
          </p>

          {/* List */}
          <ul className="space-y-2">
            {points.map((point, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-sm md:text-base text-muted-foreground"
              >
                <div className="w-5 h-5 rounded-full bg-muted border border-border/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-muted-foreground" />
                </div>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-6">
            <Button variant="ghost" size="sm" className="text-special/80 hover:text-special" asChild>
              <Link
                href={BOOK_CALL_CONFIG.href}
                className="inline-flex items-center gap-2"
              >
                {BOOK_CALL_CONFIG.label}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
