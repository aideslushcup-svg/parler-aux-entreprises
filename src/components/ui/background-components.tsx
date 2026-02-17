import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlowBackgroundProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  glowOpacity?: number;
}

export const GlowBackground = ({
  children,
  className,
  glowColor = "rgba(0, 102, 255, 0.08)",
  glowOpacity = 0.6,
}: GlowBackgroundProps) => {
  return (
    <div className={cn("relative", className)}>
      {/* Soft Radial Glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)`,
          opacity: glowOpacity,
          mixBlendMode: "multiply",
        }}
      />
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
