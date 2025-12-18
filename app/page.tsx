import type { Metadata } from "next";
import { BackgroundPattern } from "@/components/common/background-pattern";
import { Hero } from "./home/sections/hero";
import { Reviews } from "./home/sections/reviews";
import { Stats } from "./home/sections/stats";
import { Pricing } from "./home/sections/pricing";
import { Process } from "./home/sections/process";
import { FAQ } from "./home/sections/faq";

export const metadata: Metadata = {
  title: "Exclusive Home Service Leads | Pay Per Lead for Contractors",
  description:
    "Get exclusive & pre-qualified leads delivered daily for home service companies. Only $75 per lead with no contracts or setup fees. Perfect for roofers, HVAC, plumbers, and contractors. Trusted by 1,000+ partners nationwide.",
  keywords: [
    "home service leads",
    "contractor leads",
    "roofer leads",
    "HVAC leads",
    "plumber leads",
    "pay per lead home service",
    "exclusive contractor leads",
    "pre-qualified home service leads",
    "home service lead generation",
    "contractor lead generation",
    "no contract leads",
    "home improvement leads",
    "service company leads",
  ],
  openGraph: {
    title: "Exclusive Home Service Leads | Pay Per Lead - No Contracts",
    description:
      "Get exclusive & pre-qualified leads delivered daily for home service companies. Only $75 per lead with no contracts. Perfect for roofers, HVAC, plumbers, and contractors.",
    url: "/",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://close-ai.com"}/main/open-graph.jpg`,
        width: 1200,
        height: 630,
        alt: "Close AI - Exclusive Home Service Leads for Contractors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exclusive Home Service Leads | Pay Per Lead",
    description:
      "Get exclusive & pre-qualified leads delivered daily for home service companies. Only $75 per lead with no contracts.",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || "https://close-ai.com"}/main/open-graph.jpg`],
  },
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <BackgroundPattern className="min-h-screen">
      <main>
        <Hero />
        <Stats />
        <Pricing />
        <Process />
        <Reviews />
        <FAQ />
      </main>
    </BackgroundPattern>
  );
}
