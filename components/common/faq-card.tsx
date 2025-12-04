import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCardProps {
  items: FAQItem[];
  className?: string;
}

export function FAQCard({ items, className }: FAQCardProps) {
  return (
    <div className={cn("w-full", className)}>
      <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-4">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-card rounded-2xl border border-border/50 px-6 py-1 shadow-xs hover:border-border hover:shadow-sm transition-all"
          >
            <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm text-left">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

