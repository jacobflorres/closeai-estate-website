import * as React from "react";
import { SpecialBadge } from "@/components/common/special-badge";
import { PricingCard } from "@/components/common/pricing-card";
import { homeContent } from "@/content/pages/home";

export function Pricing() {
  const { pricing } = homeContent;

  return (
    <section
      id="pricing"
      className="container mx-auto max-w-5xl px-4 md:px-8 py-16 md:py-20 flex flex-col items-center text-center space-y-8"
    >
      {/* Special Badge */}
      <SpecialBadge label={pricing.badge.label} />

      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-medium text-foreground">
        {pricing.heading}
      </h2>

      {/* Subheading */}
      <p className="text-base text-muted-foreground max-w-xl">
        {pricing.subheading}
      </p>

      {/* Pricing Card */}
      <div className="w-full mt-8">
        <PricingCard
          title={pricing.card.title}
          subtitle={pricing.card.subtitle}
          price={pricing.card.price}
          priceSymbol={pricing.card.priceSymbol}
          ctaText={pricing.card.ctaText}
          ctaLink={pricing.card.ctaLink}
          includes={pricing.card.includes}
          features={pricing.card.features}
          brands={pricing.card.brands}
        />
      </div>
    </section>
  );
}

