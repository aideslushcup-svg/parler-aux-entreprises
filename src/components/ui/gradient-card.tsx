'use client'
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "blue" | "purple";
}

export function GradientCard({
  children,
  className,
  glowColor = "blue",
}: GradientCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = -(y / rect.height) * 4;
      const rotateY = (x / rect.width) * 4;
      setRotation({ x: rotateX, y: rotateY });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  const glowColors = glowColor === "purple"
    ? {
        radial1: "rgba(172, 92, 255, 0.6)",
        radial2: "rgba(56, 189, 248, 0.6)",
        center: "rgba(161, 58, 229, 0.6)",
        border: "rgba(172, 92, 255, 0.8)",
        shadow: "rgba(172, 92, 255, 0.25)",
      }
    : {
        radial1: "rgba(30, 144, 255, 0.5)",
        radial2: "rgba(0, 102, 255, 0.5)",
        center: "rgba(0, 102, 255, 0.5)",
        border: "rgba(30, 144, 255, 0.8)",
        shadow: "rgba(30, 144, 255, 0.25)",
      };

  return (
    <motion.div
      ref={cardRef}
      className={cn("relative rounded-2xl overflow-hidden", className)}
      style={{
        transformStyle: "preserve-3d",
        backgroundColor: "#0e131f",
        boxShadow: `0 -8px 60px 5px ${glowColors.shadow}, 0 0 8px 0 rgba(0, 0, 0, 0.4)`,
      }}
      initial={{ y: 0 }}
      animate={{
        y: isHovered ? -5 : 0,
        rotateX: rotation.x,
        rotateY: rotation.y,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Glass reflection */}
      <motion.div
        className="absolute inset-0 z-[35] pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 80%, rgba(255,255,255,0.05) 100%)",
        }}
        animate={{ opacity: isHovered ? 0.7 : 0.5 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Dark background */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: "linear-gradient(180deg, #0a0f1a 0%, #000000 100%)" }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-20 mix-blend-overlay z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Bottom glow */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-2/3 z-20"
        style={{
          background: `
            radial-gradient(ellipse at bottom right, ${glowColors.radial1} -10%, transparent 70%),
            radial-gradient(ellipse at bottom left, ${glowColors.radial2} -10%, transparent 70%)
          `,
          filter: "blur(40px)",
        }}
        animate={{
          opacity: isHovered ? 0.9 : 0.7,
          y: isHovered ? rotation.x * 0.5 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Center glow */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-2/3 z-[21]"
        style={{
          background: `radial-gradient(circle at bottom center, ${glowColors.center} -20%, transparent 60%)`,
          filter: "blur(45px)",
        }}
        animate={{
          opacity: isHovered ? 0.85 : 0.65,
          y: isHovered ? `calc(10% + ${rotation.x * 0.3}px)` : "10%",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Bottom border glow line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1.5px] z-[25]"
        style={{
          background: `linear-gradient(90deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.05) 100%)`,
        }}
        animate={{
          boxShadow: isHovered
            ? `0 0 15px 3px ${glowColors.border}, 0 0 25px 5px ${glowColors.center}`
            : `0 0 10px 2px ${glowColors.border}, 0 0 20px 4px ${glowColors.center}`,
          opacity: isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Left border glow */}
      <motion.div
        className="absolute bottom-0 left-0 h-1/4 w-[1px] z-[25] rounded-full"
        style={{
          background: "linear-gradient(to top, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0) 80%)",
        }}
        animate={{
          boxShadow: isHovered
            ? `0 0 12px 3px ${glowColors.border}`
            : `0 0 8px 2px ${glowColors.border}`,
          opacity: isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Right border glow */}
      <motion.div
        className="absolute bottom-0 right-0 h-1/4 w-[1px] z-[25] rounded-full"
        style={{
          background: "linear-gradient(to top, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0) 80%)",
        }}
        animate={{
          boxShadow: isHovered
            ? `0 0 12px 3px ${glowColors.border}`
            : `0 0 8px 2px ${glowColors.border}`,
          opacity: isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Content */}
      <div className="relative z-40 h-full">{children}</div>
    </motion.div>
  );
}
