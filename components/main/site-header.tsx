"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { COMPANY_INFO } from "@/content/main/company";
import { PATH_HOME, MAIN_NAV_LINKS, BOOK_CALL_CONFIG } from "@/content/main/navigation";
import { cn } from "@/lib/utils";

function smoothScrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  
  // Check if we're on home page (both / and /home routes)
  const isHomePage = pathname === PATH_HOME || pathname === "/home";

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    smoothScrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border/30 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all",
        isScrolled && "shadow-xs"
      )}
    >
      <div className="container max-w-5xl mx-auto flex h-16 items-center justify-between px-4">
        {/* Company Name - Always shown */}
        <Link
          href={PATH_HOME}
          className="flex items-center gap-2 font-medium text-foreground hover:opacity-80 transition-opacity"
          onClick={(e) => {
            if (isHomePage) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <span className="text-lg">{COMPANY_INFO.name}</span>
        </Link>

        {/* Desktop Navigation - Only on home page */}
        {isHomePage && (
          <nav className="hidden md:flex items-center gap-10">
            {MAIN_NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  if (link.sectionId) {
                    handleLinkClick(e, link.sectionId);
                  }
                }}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        {/* Desktop CTA Button & Theme Toggle - Always shown */}
        <div className="hidden md:flex items-center gap-3">
          <Button size="sm" asChild className="text-xs">
            <Link href={BOOK_CALL_CONFIG.href}>{BOOK_CALL_CONFIG.label}</Link>
          </Button>
          <ThemeToggle variant="desktop" />
        </div>

        {/* Mobile: CTA Button + Menu */}
        <div className="flex md:hidden items-center gap-2">
          <Button size="sm" asChild className="text-xs">
            <Link href={BOOK_CALL_CONFIG.href}>{BOOK_CALL_CONFIG.label}</Link>
          </Button>

          <DropdownMenu open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                {isMobileMenuOpen ? (
                  <X className="size-5" />
                ) : (
                  <Menu className="size-5" />
                )}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {isHomePage ? (
                <>
                  {MAIN_NAV_LINKS.map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          if (link.sectionId) {
                            handleLinkClick(e, link.sectionId);
                          }
                          setIsMobileMenuOpen(false);
                        }}
                        className="cursor-pointer"
                      >
                        {link.label}
                      </a>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href={PATH_HOME} className="cursor-pointer">
                      Home
                    </Link>
                  </DropdownMenuItem>
                  <div>
                    <ThemeToggle variant="mobile" />
                  </div>
                </>
              ) : (
                <>
                  <DropdownMenuItem asChild>
                    <Link href={PATH_HOME} className="cursor-pointer">
                      Home
                    </Link>
                  </DropdownMenuItem>
                  <div>
                    <ThemeToggle variant="mobile" />
                  </div>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

