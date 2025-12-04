import type { Metadata } from "next";
import { privacyContent } from "@/content/pages/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Close AI Privacy Policy. Learn how we collect, use, and protect your personal information when using our real estate lead generation services.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy - Close AI",
    description: "Close AI Privacy Policy - How we protect your information.",
    url: "/privacy",
  },
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <div className="container max-w-3xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="mb-12">
          <h1 className="text-2xl md:text-3xl font-medium text-foreground mb-2">
            {privacyContent.title}
          </h1>
          <p className="text-sm text-muted-foreground">
            Last updated: {privacyContent.lastUpdated}
          </p>
        </div>

        <div className="prose prose-sm max-w-none space-y-8">
          {privacyContent.sections.map((section, index) => (
            <div key={index} className="space-y-3">
              <h2 className="text-lg md:text-xl font-medium text-foreground">
                {section.heading}
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

