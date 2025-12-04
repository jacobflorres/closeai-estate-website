import * as React from "react";
import { SpecialBadge } from "@/components/common/special-badge";
import { FAQCard } from "@/components/common/faq-card";
import { homeContent } from "@/content/pages/home";

export function FAQ() {
  const { faq } = homeContent;

  // FAQ Structured Data (JSON-LD) for rich snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      className="container mx-auto max-w-5xl px-4 md:px-8 py-16 md:py-24 flex flex-col items-center text-center space-y-8"
    >
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Special Badge */}
      <SpecialBadge label={faq.badge.label} />

      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-medium text-foreground">{faq.heading}</h2>

      {/* Subheading */}
      <p className="text-base text-muted-foreground max-w-xl">
        {faq.subheading}
      </p>

      {/* FAQ Card */}
      <div className="w-full mt-8">
        <FAQCard items={faq.items} />
      </div>
    </section>
  );
}

