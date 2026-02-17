import { Star } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Web3MediaHero } from "@/components/ui/web3media-hero";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <Web3MediaHero className="pt-24 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col items-center text-center max-w-4xl gap-6 px-4"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-primary/10 text-primary text-sm font-medium border border-primary/20">
          <span className="w-2 h-2 rounded-full bg-primary" />
          Réceptionniste IA #1 au Québec
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-tight">
          Ne manquez plus{" "}
          <span className="text-primary">jamais</span> un appel.
        </h1>

        {/* Subtitle — bigger */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
          Calendia Pro répond à chaque appel 24/7, prend des rendez-vous
          automatiquement et vous envoie des résumés en temps réel. À partir
          de 99$/mois.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
          <a href="#cta-final">
            <LiquidButton size="lg">Réserver un appel</LiquidButton>
          </a>
          <a href="#vsl">
            <LiquidButton variant="outline" size="lg">
              Regarder la démo
            </LiquidButton>
          </a>
        </div>

        {/* Social proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <div className="flex -space-x-3">
            {[
              "bg-primary",
              "bg-emerald-500",
              "bg-rose-500",
              "bg-amber-500",
              "bg-violet-500",
            ].map((bg, i) => (
              <div
                key={i}
                className={`w-9 h-9 rounded-full ${bg} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}
              >
                {["JB", "ML", "SC", "PT", "LD"][i]}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1 text-sm font-medium text-foreground">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>
              500+ entreprises — On aide des PME partout au Québec à ne plus
              manquer d'appels.
            </span>
          </div>
        </div>
      </motion.div>
    </Web3MediaHero>
  );
};

export default HeroSection;
