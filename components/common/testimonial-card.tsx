import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { WistiaPlayer } from "@/components/common/wistia-player";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  company: string;
  image: string;
  quote: string;
  videoId: string;
  tags: string[];
  className?: string;
}

export function TestimonialCard({
  name,
  company,
  image,
  quote,
  videoId,
  tags,
  className,
}: TestimonialCardProps) {
  return (
    <Card className={cn("w-full hover:border-border hover:shadow-sm transition-all", className)}>
      <CardContent className="pt-4 text-left">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          {/* Left Section - Content */}
          <div className="flex-1 space-y-2 lg:py-10 flex flex-col gap-6">
            {/* Client Info */}
            <div className="flex items-start gap-4">
              <div className="relative size-11 rounded-full overflow-hidden shrink-0">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-foreground">{name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{company}</p>
              </div>
            </div>

            {/* Quote */}
            <p className="text-foreground text-left">{quote}</p>

            {/* Tags Section */}
            <div className="flex flex-col gap-3">
              <Separator />
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground shrink-0">Tags</span>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs text-muted-foreground bg-muted rounded-full border border-border/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Video Player (Desktop only) */}
          <div className="w-full md:max-w-md md:flex-shrink-0">
            <WistiaPlayer
              mediaId={videoId}
              aspectRatio="1.7777777777777777"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

