import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Web3MediaHeroProps {
  className?: string;
  children?: React.ReactNode;
}

export function Web3MediaHero({ className, children }: Web3MediaHeroProps) {
  return (
    <section
      className={cn(
        "relative w-full flex flex-col overflow-hidden",
        className
      )}
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, #f0f4ff 40%, #e8efff 70%, #f0f4ff 100%)",
      }}
      role="banner"
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute"
          style={{
            width: "900px",
            height: "900px",
            left: "50%",
            top: "40%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(0, 102, 255, 0.06) 0%, rgba(0, 102, 255, 0) 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center w-full">
        {children}
      </div>
    </section>
  );
}
