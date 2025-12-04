import type { Metadata } from "next";
import Script from "next/script";
import { BackgroundPattern } from "@/components/common/background-pattern";
import { SpecialBadge } from "@/components/common/special-badge";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { bookCallContent } from "@/content/pages/book-call";

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

export const metadata: Metadata = {
  title: "Book Demo Call",
  description:
    "Book a free demo call to learn more about our pay-per-lead system for real estate agents. Get exclusive seller leads delivered daily with no contracts.",
  keywords: [
    "book demo call",
    "real estate lead generation demo",
    "seller leads demo",
    "close ai demo",
  ],
  openGraph: {
    title: "Book Demo Call - Close AI Real Estate Lead Generation",
    description:
      "Book a free demo call to learn more about our pay-per-lead system for real estate agents.",
    url: "/book-call",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://close-ai.com"}/main/open-graph.jpg`,
        width: 1200,
        height: 630,
        alt: "Close AI - Book Demo Call",
      },
    ],
  },
  alternates: {
    canonical: "/book-call",
  },
};

export default function BookCallPage() {
  return (
    <BackgroundPattern className="min-h-screen">
      <main>
        <section className="container mx-auto max-w-5xl px-4 py-12 md:py-16 flex flex-col items-center text-center space-y-8">
          {/* Special Badge */}
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0,
                  },
                },
              },
              ...transitionVariants,
            }}
          >
            <SpecialBadge label={bookCallContent.badge.label} />
          </AnimatedGroup>

          {/* Heading */}
          <TextEffect
            preset="fade-in-blur"
            speedSegment={0.3}
            delay={0.2}
            as="h1"
            className="text-2xl md:text-4xl font-medium text-foreground"
          >
            {bookCallContent.heading}
          </TextEffect>

          {/* Subheading */}
          <TextEffect
            per="line"
            preset="fade-in-blur"
            speedSegment={0.3}
            delay={0.4}
            as="p"
            className="text-base text-muted-foreground max-w-xl"
          >
            {bookCallContent.subheading}
          </TextEffect>

          {/* Calendar Embed */}
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.6,
                  },
                },
              },
              ...transitionVariants,
            }}
            className="w-full"
          >
            <div className="w-full">
              <iframe
                src={bookCallContent.calendar.embedUrl}
                style={{
                  width: "100%",
                  border: "none",
                  overflow: "hidden",
                }}
                scrolling="yes"
                id={bookCallContent.calendar.embedId}
                className="min-h-[800px]"
                title="Book Demo Call"
              />
            </div>
          </AnimatedGroup>
        </section>

        <Script
          src={bookCallContent.calendar.scriptUrl}
          strategy="lazyOnload"
        />
      </main>
    </BackgroundPattern>
  );
}

