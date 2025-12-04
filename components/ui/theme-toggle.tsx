"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  variant?: "desktop" | "mobile";
  className?: string;
}

export function ThemeToggle({ variant = "desktop", className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  if (variant === "mobile") {
    return (
      <button
        onClick={toggleTheme}
        className={cn(
          "flex items-center justify-between w-full px-2 py-1.5 text-sm text-foreground hover:bg-accent rounded-sm transition-colors",
          className
        )}
      >
        <span>Switch Theme</span>
        {isDark ? (
          <Sun className="size-4 text-muted-foreground" />
        ) : (
          <Moon className="size-4 text-muted-foreground" />
        )}
      </button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={cn("size-9", className)}
      aria-label="Toggle theme"
    >
      <Sun className="size-4 scale-100 transition-all dark:scale-0 dark:rotate-90" />
      <Moon className="absolute size-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    </Button>
  );
}

