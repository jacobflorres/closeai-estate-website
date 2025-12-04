import type { Metadata } from "next";
import { BackgroundPattern } from "@/components/common/background-pattern";
import { Hero } from "./home/sections/hero";
import { Testimonials } from "./home/sections/testimonials";
import { Stats } from "./home/sections/stats";
import { Pricing } from "./home/sections/pricing";
import { Process } from "./home/sections/process";
import { FAQ } from "./home/sections/faq";

export const metadata: Metadata = {
  title: "Exclusive Real Estate Seller Leads | Pay Per Lead",
  description:
    "Get exclusive & motivated seller leads delivered daily. Only $75 per lead with no contracts or setup fees. Pre-qualified seller opportunities verified in real-time. Trusted by 1,000+ real estate agents nationwide.",
  keywords: [
    "real estate seller leads",
    "exclusive seller leads",
    "pay per lead real estate",
    "seller leads for agents",
    "motivated seller opportunities",
    "pre-qualified seller leads",
    "real estate lead generation",
    "listing leads",
    "seller lead generation",
    "no contract leads",
  ],
  openGraph: {
    title: "Exclusive Real Estate Seller Leads | Pay Per Lead - No Contracts",
    description:
      "Get exclusive & motivated seller leads delivered daily. Only $75 per lead with no contracts. Trusted by 1,000+ real estate agents nationwide.",
    url: "/",
    images: [
      {
        url: "/main/open-graph.jpg",
        width: 1200,
        height: 630,
        alt: "Close AI - Exclusive Real Estate Seller Leads",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exclusive Real Estate Seller Leads | Pay Per Lead",
    description:
      "Get exclusive & motivated seller leads delivered daily. Only $75 per lead with no contracts.",
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
        <Testimonials />
        <Stats />
        <Process />
        <Pricing />
        <FAQ />
      </main>
    </BackgroundPattern>
  );
}
