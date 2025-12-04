"use client";

import * as React from "react";
import { Suspense, useEffect, useRef, useState } from "react";
import { Globe } from "@/components/common/globe";
import { Counter } from "@/components/ui/counter";
import { cn } from "@/lib/utils";

export interface StatItem {
  label: string;
  end: number;
  suffix?: string;
}

interface StatCardProps {
  stats: StatItem[];
  globeTitle: string;
  globeSubtitle: string;
  activeBadge: string;
  description: string;
  className?: string;
}

export function StatCard({
  stats,
  globeTitle,
  globeSubtitle,
  activeBadge,
  description,
  className,
}: StatCardProps) {
  const [isGlobeVisible, setIsGlobeVisible] = useState(false);
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsGlobeVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (globeRef.current) {
      observer.observe(globeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "bg-card rounded-xl shadow-lg overflow-hidden border border-border",
        className
      )}
    >
      {/* Globe Section */}
      <div className="relative h-[500px] p-6">
        <div className="absolute inset-x-0 top-6 z-10 px-6">
          <h3 className="text-base font-medium text-foreground text-left">
            {globeTitle}
          </h3>
          <p className="text-muted-foreground text-sm mt-1 text-left">
            {globeSubtitle}
          </p>
        </div>

        <div className="absolute bottom-6 right-6 z-10 flex items-center gap-2 bg-card/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-normal text-muted-foreground border border-border/50">
          <span className="size-3 rounded-full bg-orange-500"></span>
          <span>{activeBadge}</span>
        </div>

        <div
          ref={globeRef}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Suspense
            fallback={
              <div className="w-[280px] md:w-[320px] aspect-square bg-muted animate-pulse rounded-full" />
            }
          >
            {isGlobeVisible && (
              <div className="w-[320px] md:w-[500px] aspect-square">
                <Globe className="w-full h-full" />
              </div>
            )}
          </Suspense>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 border-t border-border/70">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={cn(
              "p-8 text-center",
              index === 1 && "border-x border-border/70"
            )}
          >
            <Counter
              end={stat.end}
              className="text-sm md:text-base font-medium text-foreground mb-2"
              suffix={stat.suffix}
            />
            <p className="text-muted-foreground text-xs md:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="p-8 border-t border-border/70">
        <p className="text-muted-foreground text-xs md:text-sm leading-relaxed text-left">
          {description}
        </p>
      </div>
    </div>
  );
}

