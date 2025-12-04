import * as React from "react";
import { SpecialBadge } from "@/components/common/special-badge";
import { StatCard } from "@/components/common/stat-card";
import { homeContent } from "@/content/pages/home";

export function Stats() {
  const { stats } = homeContent;

  return (
    <section
      id="stats"
      className="container mx-auto max-w-5xl px-4 md:px-8 py-16 md:py-20 flex flex-col items-center text-center space-y-8"
    >
      {/* Special Badge */}
      <SpecialBadge label={stats.badge.label} />

      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-medium text-foreground">
        {stats.heading}
      </h2>

      {/* Subheading */}
      <p className="text-base text-muted-foreground max-w-xl">
        {stats.subheading}
      </p>

      {/* Stat Card */}
      <div className="w-full mt-8">
        <StatCard
          stats={stats.statCard.stats}
          globeTitle={stats.statCard.globeTitle}
          globeSubtitle={stats.statCard.globeSubtitle}
          activeBadge={stats.statCard.activeBadge}
          description={stats.statCard.description}
        />
      </div>
    </section>
  );
}

