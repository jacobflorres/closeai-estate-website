"use client";

import * as React from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Separator } from "@/components/ui/separator";
import { COMPANY_INFO } from "@/content/main/company";
import { PATH_HOME, PATH_BOOK_CALL, FOOTER_LEGAL_LINKS } from "@/content/main/navigation";
import { cn } from "@/lib/utils";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "mt-10 border-t border-border/30",
        "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      )}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-16">
        {/* Row 1: main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left: company section */}
          <div className="space-y-4">
            <p className="text-lg font-medium text-foreground">{COMPANY_INFO.name}</p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-sm">
              {COMPANY_INFO.tagline}
            </p>
          </div>

          {/* Right: 2-column structured area */}
          <div className="grid grid-cols-2 gap-12">
            {/* Resources */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-foreground">Resources</h4>
              <nav className="space-y-3">
                <Link
                  href={PATH_HOME}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
                <Link
                  href={PATH_BOOK_CALL}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Book Call
                </Link>
              </nav>
            </div>

            {/* Preferences */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-foreground">Preferences</h4>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Theme</span>
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-8 bg-border/40" />

        {/* Row 2 */}
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {COMPANY_INFO.name}. All Rights Reserved.
          </p>

          <div className="flex items-center space-x-6">
            {FOOTER_LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
