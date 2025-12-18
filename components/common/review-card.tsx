import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ReviewCardProps {
  name: string;
  company: string;
  image: string;
  review: string;
  className?: string;
}

export function ReviewCard({
  name,
  company,
  image,
  review,
  className,
}: ReviewCardProps) {
  return (
    <Card className={cn("w-[350px] md:w-[400px] hover:border-border hover:shadow-sm transition-all", className)}>
      <CardContent className="pt-6 pb-6 text-left">
        <div className="space-y-4">
          {/* Client Info */}
          <div className="flex items-start gap-4">
            <div className="relative size-12 rounded-full overflow-hidden shrink-0">
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

          {/* Review */}
          <p className="text-foreground text-sm leading-relaxed">{review}</p>
        </div>
      </CardContent>
    </Card>
  );
}

