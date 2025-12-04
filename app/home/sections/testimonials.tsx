import * as React from "react";
import { SpecialBadge } from "@/components/common/special-badge";
import { TestimonialCard } from "@/components/common/testimonial-card";
import { homeContent } from "@/content/pages/home";

export function Testimonials() {
  const { testimonials } = homeContent;

  return (
    <section
      id="testimonials"
      className="container mx-auto max-w-5xl px-4 md:px-8 py-16 md:py-20 flex flex-col items-center text-center space-y-8"
    >
      {/* Special Badge */}
      <SpecialBadge label={testimonials.badge.label} />

      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-medium text-foreground">
        {testimonials.heading}
      </h2>

      {/* Subheading */}
      <p className="text-base text-muted-foreground max-w-xl">
        {testimonials.subheading}
      </p>

      {/* Testimonial Cards */}
      <div className="w-full flex flex-col gap-8 mt-8">
        {testimonials.items.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            name={testimonial.name}
            company={testimonial.company}
            image={testimonial.image}
            quote={testimonial.quote}
            videoId={testimonial.videoId}
            tags={testimonial.tags}
          />
        ))}
      </div>
    </section>
  );
}

