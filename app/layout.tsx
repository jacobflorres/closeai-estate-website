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
    default: "Close AI - Exclusive Real Estate Seller Leads | Pay Per Lead",
    template: "%s | Close AI",
  },
  description:
    "Get exclusive & motivated seller leads delivered daily. Pay-per-lead model with no contracts. Pre-qualified seller opportunities for real estate agents. $75 per lead, verified in real-time.",
  keywords: [
    "real estate seller leads",
    "exclusive seller leads",
    "pay per lead real estate",
    "real estate lead generation",
    "seller leads for agents",
    "motivated seller opportunities",
    "pre-qualified seller leads",
    "real estate agent leads",
    "listing leads",
    "seller lead generation",
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
    title: "Close AI - Exclusive Real Estate Seller Leads | Pay Per Lead",
    description:
      "Get exclusive & motivated seller leads delivered daily. Pay-per-lead model with no contracts. Pre-qualified seller opportunities for real estate agents.",
    images: [
      {
        url: "/main/open-graph.jpg",
        width: 1200,
        height: 630,
        alt: "Close AI - Real Estate Lead Generation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Close AI - Exclusive Real Estate Seller Leads",
    description:
      "Get exclusive & motivated seller leads delivered daily. Pay-per-lead model with no contracts.",
    images: ["/main/open-graph.jpg"],
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
      "Close AI provides exclusive, pre-qualified seller leads for real estate agents on a pay-per-lead basis with no contracts.",
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
    serviceType: "Real Estate Lead Generation",
    provider: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
    },
    description:
      "Exclusive seller leads for real estate agents. Pay-per-lead model with no contracts. Pre-qualified opportunities delivered daily.",
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
