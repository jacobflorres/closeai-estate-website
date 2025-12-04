import type { Metadata } from "next";
import { termsContent } from "@/content/pages/terms";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Close AI Terms of Service. Review our terms and conditions for using our real estate lead generation services.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms of Service - Close AI",
    description: "Close AI Terms of Service - Terms and conditions.",
    url: "/terms",
  },
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <div className="container max-w-3xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="mb-12">
          <h1 className="text-2xl md:text-3xl font-medium text-foreground mb-2">
            {termsContent.title}
          </h1>
          <p className="text-sm text-muted-foreground">
            Last updated: {termsContent.lastUpdated}
          </p>
        </div>

        <div className="prose prose-sm max-w-none space-y-8">
          {termsContent.sections.map((section, index) => (
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

