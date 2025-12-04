"use client";

import * as React from "react";
import Script from "next/script";
import { cn } from "@/lib/utils";

// Type declaration for Wistia custom element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "wistia-player": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          "media-id": string;
          aspect?: string;
        },
        HTMLElement
      >;
    }
  }
}

interface WistiaPlayerProps extends React.HTMLAttributes<HTMLDivElement> {
  mediaId: string;
  aspectRatio?: string;
}

export function WistiaPlayer({
  mediaId,
  aspectRatio = "1.7777777777777777",
  className,
  ...props
}: WistiaPlayerProps) {
  const [shouldLoad, setShouldLoad] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const paddingTop = React.useMemo(
    () => `${(1 / parseFloat(aspectRatio)) * 100}%`,
    [aspectRatio]
  );

  React.useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "200px", // Start loading 200px before entering viewport
        threshold: 0.1,
      }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={cn("relative w-full", className)} {...props}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            wistia-player[media-id='${mediaId}']:not(:defined) {
              background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch');
              display: block;
              filter: blur(5px);
              padding-top: ${paddingTop};
            }
          `,
        }}
      />
      {shouldLoad && (
        <>
          <Script
            src="https://fast.wistia.com/player.js"
            strategy="lazyOnload"
          />
          <Script
            src={`https://fast.wistia.com/embed/${mediaId}.js`}
            strategy="lazyOnload"
            type="module"
          />
        </>
      )}
      {React.createElement("wistia-player", {
        "media-id": mediaId,
        aspect: aspectRatio,
        className: "w-full h-auto",
      })}
    </div>
  );
}

