"use client";

import * as React from "react";
import { SpecialBadge } from "@/components/common/special-badge";
import { StatCard } from "@/components/common/stat-card";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { homeContent } from "@/content/pages/home";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

// Hero animations finish around 1.5s (1.0s delay + 1.5s duration)
// Start stats animations at 1.5s to ensure hero completes first
const BASE_DELAY = 1.5;

export function Stats() {
  const { stats } = homeContent;

  return (
    <section
      id="stats"
      className="container mx-auto max-w-5xl px-4 md:px-8 py-16 md:py-20 flex flex-col items-center text-center space-y-8"
    >
      {/* Special Badge */}
      <AnimatedGroup
        variants={{
          container: {
            visible: {
              transition: {
                staggerChildren: 0.05,
                delayChildren: BASE_DELAY,
              },
            },
          },
          ...transitionVariants,
        }}
      >
        <SpecialBadge label={stats.badge.label} />
      </AnimatedGroup>

      {/* Heading */}
      <TextEffect
        preset="fade-in-blur"
        speedSegment={0.3}
        delay={BASE_DELAY + 0.2}
        as="h2"
        className="text-2xl md:text-4xl font-medium text-foreground"
      >
        {stats.heading}
      </TextEffect>

      {/* Subheading */}
      <TextEffect
        per="line"
        preset="fade-in-blur"
        speedSegment={0.3}
        delay={BASE_DELAY + 0.4}
        as="p"
        className="text-base text-muted-foreground max-w-xl"
      >
        {stats.subheading}
      </TextEffect>

      {/* Stat Card */}
      <AnimatedGroup
        variants={{
          container: {
            visible: {
              transition: {
                staggerChildren: 0.05,
                delayChildren: BASE_DELAY + 0.6,
              },
            },
          },
          ...transitionVariants,
        }}
        className="w-full mt-8"
      >
        <StatCard
          stats={stats.statCard.stats}
          globeTitle={stats.statCard.globeTitle}
          globeSubtitle={stats.statCard.globeSubtitle}
          activeBadge={stats.statCard.activeBadge}
          description={stats.statCard.description}
        />
      </AnimatedGroup>
    </section>
  );
}

