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
        "relative w-full flex flex-col overflow-visible bg-background",
        className
      )}
      role="banner"
    >
      {/* Mesh background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(30, 144, 255, 0.12)" }}
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(65, 105, 225, 0.08)" }}
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(0, 191, 255, 0.1)" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center w-full">
        {children}
      </div>
    </section>
  );
}
