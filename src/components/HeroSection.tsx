import { Star } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <AuroraBackground className="pt-24 pb-16 dark">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative z-10 flex flex-col items-center text-center space-y-6 px-4"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-white/10 text-white/80 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-primary" />
          Réceptionniste IA #1 au Québec
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-4xl tracking-tight">
          Ne manquez plus{" "}
          <span className="text-primary">jamais</span> un appel.
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/60 max-w-2xl">
          Calendia Pro répond à chaque appel 24/7, prend des rendez-vous
          automatiquement et vous envoie des résumés en temps réel. À partir de
          99$/mois.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a href="#cta-final">
            <LiquidButton size="lg">Réserver un appel</LiquidButton>
          </a>
          <a href="#vsl">
            <LiquidButton variant="outline" size="lg">Regarder la démo</LiquidButton>
          </a>
        </div>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <div className="flex -space-x-3">
            {[
              "bg-primary", "bg-success", "bg-destructive",
              "bg-secondary-foreground", "bg-text-secondary",
            ].map((bg, i) => (
              <div
                key={i}
                className={`w-9 h-9 rounded-full ${bg} border-2 border-zinc-900 flex items-center justify-center text-primary-foreground text-xs font-bold`}
              >
                {["JB","ML","SC","PT","LD"][i]}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1 text-sm font-medium text-white">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            5.0 — 500+ entreprises satisfaites
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default HeroSection;
