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
  const paddingTop = React.useMemo(
    () => `${(1 / parseFloat(aspectRatio)) * 100}%`,
    [aspectRatio]
  );

  return (
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
      <div className={cn("relative w-full", className)} {...props}>
        {React.createElement("wistia-player", {
          "media-id": mediaId,
          aspect: aspectRatio,
          className: "w-full h-auto",
        })}
      </div>
    </>
  );
}

