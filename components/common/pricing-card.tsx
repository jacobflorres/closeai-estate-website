import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BOOK_CALL_CONFIG } from "@/content/main/navigation";
import { cn } from "@/lib/utils";

export interface PricingFeature {
  title: string;
  items: string[];
}

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  priceSymbol?: string;
  ctaText: string;
  ctaLink: string;
  includes: string;
  features: PricingFeature[];
  brands: {
    title: string;
    logos: Array<{ name: string; image: string }>;
  };
  className?: string;
}

export function PricingCard({
  title,
  subtitle,
  price,
  priceSymbol = "$",
  ctaText,
  ctaLink,
  includes,
  features,
  brands,
  className,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "bg-card relative rounded-3xl border border-border/50 shadow-lg shadow-zinc-950/5",
        className
      )}
    >
      <div className="grid items-start gap-12 divide-y p-12 md:grid-cols-2 md:divide-x md:divide-y-0">
        {/* Left Section - Pricing Info */}
        <div className="pb-12 text-left md:pb-0 md:pr-12 flex flex-col">
          <h3 className="text-3xl md:text-4xl font-medium text-foreground">
            {title}
          </h3>
          <p className="mt-2 text-muted-foreground">{subtitle}</p>

          <div className="flex justify-center mt-10">
            <Button asChild size="lg" className="w-full max-w-full">
              <Link href={BOOK_CALL_CONFIG.href}>
                {BOOK_CALL_CONFIG.label}
              </Link>
            </Button>
          </div>

          <p className="text-muted-foreground mt-6 text-sm">{includes}</p>
        </div>

        {/* Right Section - Features & Brands */}
        <div className="relative overflow-hidden">
          <div className="space-y-6">
            {features.map((feature, featureIndex) => (
              <div key={featureIndex}>
                <ul role="list" className="space-y-4">
                  {feature.items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-muted border border-border/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-muted-foreground" />
                      </div>
                      <span className="text-muted-foreground text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                {featureIndex < features.length - 1 && (
                  <div className="my-6 h-px bg-border" />
                )}
              </div>
            ))}
          </div>

          <p className="text-muted-foreground mt-6 text-sm text-left">
            {brands.title}
          </p>
        </div>
      </div>
    </div>
  );
}
