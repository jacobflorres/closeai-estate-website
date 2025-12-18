import * as React from "react";
import { SpecialBadge } from "@/components/common/special-badge";
import { ReviewCard } from "@/components/common/review-card";
import { Marquee, MarqueeContent, MarqueeItem, MarqueeFade } from "@/components/ui/marquee";
import { homeContent } from "@/content/pages/home";

export function Reviews() {
  const { reviews } = homeContent;

  return (
    <section
      id="reviews"
      className="container mx-auto max-w-5xl px-4 md:px-8 py-16 md:py-20 flex flex-col items-center text-center space-y-8"
    >
      {/* Special Badge */}
      <SpecialBadge label={reviews.badge.label} />

      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-medium text-foreground">
        {reviews.heading}
      </h2>

      {/* Subheading */}
      <p className="text-base text-muted-foreground max-w-xl">
        {reviews.subheading}
      </p>

      {/* Reviews Marquee */}
      <div className="w-full mt-8">
        <Marquee>
          <MarqueeFade side="left" />
          <MarqueeContent speed={50}>
            {reviews.items.map((review) => (
              <MarqueeItem key={review.id}>
                <ReviewCard
                  name={review.name}
                  company={review.company}
                  image={review.image}
                  review={review.review}
                />
              </MarqueeItem>
            ))}
          </MarqueeContent>
          <MarqueeFade side="right" />
        </Marquee>
      </div>
    </section>
  );
}

