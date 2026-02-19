import { X, Check } from "lucide-react";
import { GlowButton } from "@/components/ui/glow-button";
import { GradientCard } from "@/components/ui/gradient-card";
import { motion } from "framer-motion";

const tradFeatures = [
  "Disponible 9h à 17h seulement",
  "Absences, vacances, maladie",
  "Formation et intégration requises",
  "Turnover et recrutement constant",
  "Un seul appel à la fois",
];

const proFeatures = [
  "Disponible 24/7, 365 jours par année",
  "Aucune absence, jamais de congé",
  "Prêt en 1 à 3 semaines",
  "Aucun engagement, annulez quand vous voulez",
  "Appels simultanés illimités",
];

const PricingSection = () => {
  return (
    <section id="tarifs" className="py-14 md:py-20 bg-background">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Un prix simple. Pas de surprises.
          </h2>
          <p className="text-base md:text-lg text-foreground/80 font-medium">
            Comparez et jugez par vous-même.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Traditional — pushed back / receded */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <div className="h-full w-full rounded-2xl border border-border/60 bg-muted/40 p-6 md:p-12 opacity-75 scale-[0.97]">
              <h3 className="text-xl font-semibold text-foreground/50 mb-2">Réceptionniste traditionnelle</h3>
              <div className="text-3xl font-bold text-foreground/50 mb-1">45 000$ – 60 000$/an</div>
              <p className="text-sm text-foreground/40 mb-6">3 750$ – 5 000$/mois</p>
              <ul className="space-y-3">
                {tradFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground/50 text-sm">
                    <X className="w-4 h-4 text-foreground/30 shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Calendia — prominent floating card with blue glow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <GradientCard className="h-full ring-2 ring-primary/30" glowColor="blue">
              <div className="relative p-6 md:p-12">
                <span className="absolute top-4 right-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  Recommandé
                </span>
                <h3 className="text-xl font-semibold text-foreground mb-2">Calendia</h3>
                <div className="text-3xl font-bold text-primary mb-1">À partir de 99$/mois</div>
                <p className="text-sm text-foreground/70 mb-6">+ 0,85$/minute d'utilisation</p>
                <ul className="space-y-3">
                  {proFeatures.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground text-sm">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-foreground/60 mt-4">0 appels = 0$ de frais d'utilisation</p>
              </div>
            </GradientCard>
          </motion.div>
        </div>

        <div className="text-center mt-10">
          <a href="#cta-final">
            <GlowButton size="lg">Réserver un appel découverte</GlowButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
