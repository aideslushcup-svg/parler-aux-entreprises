import { X, Check } from "lucide-react";
import { Button } from "@/components/ui/neon-button";

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
  "Prêt en moins de 48h",
  "Aucun engagement, annulez quand vous voulez",
  "Appels simultanés illimités",
];

const PricingSection = () => {
  return (
    <section id="tarifs" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-h2 font-bold text-foreground mb-4">
            Un prix simple. Pas de surprises.
          </h2>
          <p className="text-body-lg text-text-secondary">
            Comparez et jugez par vous-même.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Traditional */}
          <div className="rounded-card border border-border p-8 opacity-80">
            <h3 className="text-h4 font-semibold text-text-secondary mb-2">Réceptionniste traditionnelle</h3>
            <div className="text-3xl font-bold text-text-secondary mb-1">45 000$ – 60 000$/an</div>
            <p className="text-sm text-text-muted mb-6">3 750$ – 5 000$/mois</p>
            <ul className="space-y-3">
              {tradFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-text-muted text-sm">
                  <X className="w-4 h-4 text-text-muted shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Calendia */}
          <div className="relative rounded-card border-2 border-primary p-8 shadow-card-hover">
            <span className="absolute -top-3 right-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-pill">
              Recommandé
            </span>
            <h3 className="text-h4 font-semibold text-foreground mb-2">Calendia Pro</h3>
            <div className="text-3xl font-bold text-primary mb-1">À partir de 99$/mois</div>
            <p className="text-sm text-text-secondary mb-6">+ 0,85$/minute d'utilisation</p>
            <ul className="space-y-3">
              {proFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground text-sm">
                  <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <p className="text-xs text-text-muted mt-4">0 appels = 0$ de frais d'utilisation</p>
          </div>
        </div>

        <div className="text-center mt-10">
          <a href="#cta-final">
            <Button variant="solid" size="lg">Réserver un appel découverte</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
