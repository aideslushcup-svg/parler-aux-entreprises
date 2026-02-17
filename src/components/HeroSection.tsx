import { Star } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Web3MediaHero } from "@/components/ui/web3media-hero";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <Web3MediaHero className="pt-28 pb-12 md:pt-32 md:pb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col items-center text-center max-w-5xl gap-8 px-4"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-primary/10 text-primary text-base font-semibold border border-primary/20">
          <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
          Réceptionniste IA #1 au Québec
        </div>

        {/* Title — BIGGER */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight leading-[1.05]">
          Ne manquez plus{" "}
          <span className="text-primary">jamais</span> un appel.
        </h1>

        {/* Subtitle — BIGGER */}
        <p className="text-xl md:text-2xl lg:text-[1.7rem] text-muted-foreground max-w-3xl leading-relaxed">
          Calendia Pro répond à chaque appel 24/7, prend des rendez-vous
          automatiquement et vous envoie des résumés en temps réel. À partir
          de 99$/mois.
        </p>

        {/* CTA Buttons — BIGGER */}
        <div className="flex flex-col sm:flex-row items-center gap-5 pt-4">
          <a href="#cta-final">
            <LiquidButton size="lg" className="text-lg px-10 py-5 h-auto font-bold">
              Réserver un appel
            </LiquidButton>
          </a>
          <a href="#vsl">
            <LiquidButton variant="outline" size="lg" className="text-lg px-10 py-5 h-auto font-bold">
              Regarder la démo
            </LiquidButton>
          </a>
        </div>

        {/* Social proof — bigger */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
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
                className={`w-10 h-10 rounded-full ${bg} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}
              >
                {["JB", "ML", "SC", "PT", "LD"][i]}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1.5 text-base font-medium text-foreground">
            <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
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
