import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingIcon {
  icon: React.ReactNode;
  label: string;
  position: { x: string; y: string };
}

interface Web3MediaHeroProps {
  title: string;
  highlightedText?: string;
  subtitle: string;
  ctaButton?: {
    label: string;
    onClick: () => void;
  };
  secondaryButton?: {
    label: string;
    onClick: () => void;
  };
  floatingIcons?: FloatingIcon[];
  trustedByText?: string;
  brands?: Array<{
    name: string;
    logo: React.ReactNode;
  }>;
  className?: string;
  children?: React.ReactNode;
}

export function Web3MediaHero({
  title,
  highlightedText,
  subtitle,
  ctaButton,
  secondaryButton,
  floatingIcons = [],
  trustedByText = "Trusted by",
  brands = [],
  className,
  children,
}: Web3MediaHeroProps) {
  return (
    <section
      className={cn(
        "relative w-full min-h-screen flex flex-col overflow-hidden",
        className
      )}
      style={{
        background:
          "linear-gradient(180deg, #020817 0%, #0a1628 50%, #071230 100%)",
      }}
      role="banner"
      aria-label="Hero section"
    >
      {/* Radial Glow Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute"
          style={{
            width: "1200px",
            height: "1200px",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(0, 102, 255, 0.25) 0%, rgba(0, 102, 255, 0) 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      {/* Main Content */}
      {children ? (
        <div className="relative z-10 flex-1 flex items-center justify-center w-full">
          {children}
        </div>
      ) : (
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4">
          {/* Floating Icons */}
          {floatingIcons.map((item, index) => (
            <motion.div
              key={index}
              className="absolute hidden lg:flex flex-col items-center gap-2"
              style={{
                left: item.position.x,
                top: item.position.y,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -20, 0],
              }}
              transition={{
                opacity: { duration: 0.6, delay: 0.3 + index * 0.1 },
                scale: { duration: 0.6, delay: 0.3 + index * 0.1 },
                y: {
                  duration: 3 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(0, 102, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(0, 102, 255, 0.3)",
                  boxShadow: "0 0 40px rgba(0, 102, 255, 0.3)",
                }}
              >
                {item.icon}
              </div>
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                {item.label}
              </span>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center text-center max-w-4xl gap-8"
          >
            {/* Title */}
            <h1 className="font-bold text-white tracking-tight" style={{ fontSize: "clamp(32px, 5vw, 64px)", lineHeight: "1.2" }}>
              {title}
              {highlightedText && (
                <>
                  <br />
                  <span
                    style={{
                      background:
                        "linear-gradient(90deg, #0066FF 0%, #3B82F6 50%, #0066FF 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                    className="font-extrabold"
                  >
                    {highlightedText}
                  </span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-white/70 max-w-lg" style={{ fontSize: "clamp(14px, 2vw, 16px)", lineHeight: "1.6" }}>
              {subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {ctaButton && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={ctaButton.onClick}
                  className="px-8 py-3 rounded-md font-medium text-white transition-all"
                  style={{
                    background: "linear-gradient(135deg, #0066FF 0%, #3B82F6 100%)",
                    boxShadow: "0 4px 20px rgba(0, 102, 255, 0.4)",
                  }}
                >
                  {ctaButton.label}
                </motion.button>
              )}
              {secondaryButton && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={secondaryButton.onClick}
                  className="px-8 py-3 rounded-md font-medium text-white transition-all"
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
                >
                  {secondaryButton.label}
                </motion.button>
              )}
            </div>
          </motion.div>
        </div>
      )}

      {/* Brand Slider */}
      {brands.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative z-10 w-full overflow-hidden py-16"
        >
          <div className="text-center mb-8">
            <span className="text-xs font-normal text-white/50 tracking-widest uppercase">
              {trustedByText}
            </span>
          </div>

          {/* Gradient fade edges */}
          <div
            className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none w-[200px]"
            style={{
              background:
                "linear-gradient(90deg, #020817 0%, rgba(2, 8, 23, 0) 100%)",
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none w-[200px]"
            style={{
              background:
                "linear-gradient(270deg, #020817 0%, rgba(2, 8, 23, 0) 100%)",
            }}
          />

          {/* Scrolling brands */}
          <motion.div
            className="flex items-center gap-20 pl-20"
            animate={{ x: [0, -(brands.length * 200)] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: brands.length * 5,
                ease: "linear",
              },
            }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center opacity-40 hover:opacity-70 transition-opacity w-[120px] h-[40px]"
              >
                {brand.logo}
              </div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
