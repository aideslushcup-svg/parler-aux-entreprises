import React from "react";
import { cn } from "@/lib/utils";

interface Web3MediaHeroProps {
  className?: string;
  children?: React.ReactNode;
}

export function Web3MediaHero({ className, children }: Web3MediaHeroProps) {
  return (
    <section
      className={cn(
        "relative w-full flex flex-col overflow-visible bg-background",
        className
      )}
      role="banner"
    >
      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center w-full">
        {children}
      </div>
    </section>
  );
}
