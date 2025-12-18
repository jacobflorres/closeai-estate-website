"use client";

import * as React from "react";
import Image from "next/image";
import { SpecialBadge } from "@/components/common/special-badge";
import { Button } from "@/components/ui/button";
import { WistiaPlayer } from "@/components/common/wistia-player";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { homeContent } from "@/content/pages/home";
import { BOOK_CALL_CONFIG } from "@/content/main/navigation";

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

export function Hero() {
  const { hero } = homeContent;

  return (
    <section
      id="hero"
      className="container mx-auto max-w-5xl px-4 md:px-8 py-16 md:py-20 flex flex-col items-center text-center space-y-8 relative z-10"
    >
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
        <SpecialBadge label={hero.badge.label} />
      </AnimatedGroup>

      {/* Heading - Two Lines */}
      <div className="space-y-2 max-w-4xl">
        <TextEffect
          preset="fade-in-blur"
          speedSegment={0.3}
          as="h1"
          className="text-2xl md:text-4xl font-medium text-foreground"
        >
          {hero.heading.line1}
        </TextEffect>
        <TextEffect
          preset="fade-in-blur"
          speedSegment={0.3}
          delay={0.2}
          as="h1"
          className="text-2xl md:text-4xl font-medium text-foreground"
        >
          {hero.heading.line2}
        </TextEffect>
      </div>

      {/* Subheading */}
      <TextEffect
        per="line"
        preset="fade-in-blur"
        speedSegment={0.3}
        delay={0.4}
        as="p"
        className="text-base text-muted-foreground max-w-xl"
      >
        {hero.subheading}
      </TextEffect>

      {/* Trust Visual */}
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
      >
        <div className="flex items-center gap-4">
          <div className="flex -space-x-3">
            {hero.trust.users.map((user, index) => (
              <div
                key={user.name}
                className="relative size-8 rounded-full border-2 border-background overflow-hidden"
                style={{ zIndex: hero.trust.users.length - index }}
              >
                <Image
                  src={user.image}
                  alt={user.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 48px, 56px"
                />
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            {hero.trust.text}
          </p>
        </div>
      </AnimatedGroup>

      {/* CTA Button */}
      <AnimatedGroup
        variants={{
          container: {
            visible: {
              transition: {
                staggerChildren: 0.05,
                delayChildren: 0.8,
              },
            },
          },
          ...transitionVariants,
        }}
      >
        <Button size="lg" className="px-12 py-6" asChild>
          <a href={BOOK_CALL_CONFIG.href}>{BOOK_CALL_CONFIG.label}</a>
        </Button>
      </AnimatedGroup>

      {/* Video Player */}
      <AnimatedGroup
        variants={{
          container: {
            visible: {
              transition: {
                staggerChildren: 0.05,
                delayChildren: 1.0,
              },
            },
          },
          ...transitionVariants,
        }}
        className="w-full"
      >
        <div className="w-full max-w-4xl mx-auto mt-4">
          <WistiaPlayer
            mediaId={hero.video.mediaId}
            aspectRatio={hero.video.aspectRatio}
          />
        </div>
      </AnimatedGroup>
    </section>
  );
}
