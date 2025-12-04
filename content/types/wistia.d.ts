import "react";

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

export {};

