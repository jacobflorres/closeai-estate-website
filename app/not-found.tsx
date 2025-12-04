import Link from "next/link";
import { BackgroundPattern } from "@/components/common/background-pattern";
import { SpecialBadge } from "@/components/common/special-badge";
import { Button } from "@/components/ui/button";
import { notFoundContent } from "@/content/pages/not-found";

export default function NotFound() {
  return (
    <BackgroundPattern className="min-h-screen">
      <main className="flex min-h-[calc(100vh-100px)] items-center justify-center">
        <section className="container mx-auto max-w-2xl px-4 py-16 md:py-20 flex flex-col items-center text-center space-y-8">
          {/* Special Badge */}
          <SpecialBadge label={notFoundContent.badge.label} />

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-medium text-foreground">
            {notFoundContent.heading}
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg text-muted-foreground max-w-xl">
            {notFoundContent.subheading}
          </p>

          {/* CTA Button */}
          <Button asChild size="lg">
            <Link href={notFoundContent.cta.href}>
              {notFoundContent.cta.label}
            </Link>
          </Button>
        </section>
      </main>
    </BackgroundPattern>
  );
}

