import * as React from "react";
import { SpecialBadge } from "@/components/common/special-badge";
import { HowCard, HowTimeline } from "@/components/common/how-card";
import { homeContent } from "@/content/pages/home";

export function Process() {
  const { process } = homeContent;

  return (
    <section
      id="process"
      className="container mx-auto max-w-5xl px-4 md:px-8 py-16 md:py-24 flex flex-col items-center text-center space-y-8"
    >
      {/* Special Badge */}
      <SpecialBadge label={process.badge.label} />

      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-medium text-foreground">{process.heading}</h2>

      {/* Subheading */}
      <p className="text-base text-muted-foreground max-w-xl">
        {process.subheading}
      </p>

      {/* How Cards with Timeline */}
      <div className="w-full mt-8">
        <HowTimeline>
          {process.items.map((item, index) => (
            <HowCard
              key={index}
              version={item.version}
              title={item.title}
              description={item.description}
              points={item.points}
              icon={item.icon}
              gradient={item.gradient}
              index={index}
            />
          ))}
        </HowTimeline>
      </div>
    </section>
  );
}
