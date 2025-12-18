import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { SiteHeader } from "@/components/main/site-header";
import { SiteFooter } from "@/components/main/site-footer";
import { COMPANY_INFO } from "@/content/main/company";

const generalSans = localFont({
  src: [
    {
      path: "../public/fonts/general-sans/GeneralSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/general-sans/GeneralSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/general-sans/GeneralSans-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/general-sans/GeneralSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/general-sans/GeneralSans-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-general-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://close-ai.com"),
  title: {
    default: "Close AI - Exclusive Home Service Leads | Pay Per Lead for Contractors",
    template: "%s | Close AI",
  },
  description:
    "Get exclusive & pre-qualified leads delivered daily for home service companies. Pay-per-lead model with no contracts. Perfect for roofers, HVAC, plumbers, and contractors. $75 per lead, verified in real-time.",
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
    "home improvement leads",
    "service company leads",
    "no contract leads",
  ],
  authors: [{ name: "Close AI" }],
  creator: "Close AI",
  publisher: "Close AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Close AI",
    title: "Close AI - Exclusive Home Service Leads | Pay Per Lead for Contractors",
    description:
      "Get exclusive & pre-qualified leads delivered daily for home service companies. Pay-per-lead model with no contracts. Perfect for roofers, HVAC, plumbers, and contractors.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://close-ai.com"}/main/open-graph.jpg`,
        width: 1200,
        height: 630,
        alt: "Close AI - Home Service Lead Generation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Close AI - Exclusive Home Service Leads | Pay Per Lead",
    description:
      "Get exclusive & pre-qualified leads delivered daily for home service companies. Pay-per-lead model with no contracts.",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || "https://close-ai.com"}/main/open-graph.jpg`],
    creator: "@closeai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add Google Search Console verification when available
    // google: "your-google-verification-code",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://close-ai.com";

  // Structured Data (JSON-LD) for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_INFO.name,
    description:
      "Close AI provides exclusive, pre-qualified leads for home service companies and contractors on a pay-per-lead basis with no contracts.",
    url: siteUrl,
    logo: `${siteUrl}/main/logo.jpg`,
    contactPoint: {
      "@type": "ContactPoint",
      email: COMPANY_INFO.contactEmail,
      contactType: "Customer Service",
    },
    sameAs: [
      // Add social media URLs when available
      // "https://twitter.com/closeai",
      // "https://linkedin.com/company/closeai",
    ],
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Home Service Lead Generation",
    provider: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
    },
    description:
      "Exclusive leads for home service companies and contractors. Pay-per-lead model with no contracts. Pre-qualified opportunities delivered daily. Perfect for roofers, HVAC, plumbers, and other home service professionals.",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
      </head>
      <body
        className={`${generalSans.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
