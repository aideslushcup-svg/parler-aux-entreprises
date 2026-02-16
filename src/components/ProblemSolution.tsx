import { X, Check } from "lucide-react";

const problems = [
  "Réceptionniste à 40 000$ – 60 000$/an",
  "Absences, vacances, jours fériés",
  "Appels manqués après 17h",
  "Clients perdus à jamais",
  "Heures limitées, résultats limités",
];

const solutions = [
  "À partir de 99$/mois + 0,85$/minute",
  "Disponible 24/7, 365 jours par année",
  "Chaque appel répondu, même à 3h du matin",
  "Rendez-vous pris automatiquement",
  "Résumés d'appels envoyés en temps réel",
];

const ProblemSolution = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-h2 font-bold text-foreground text-center mb-12">
          Pourquoi les entreprises choisissent Calendia
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Without */}
          <div className="rounded-card border-2 border-destructive/20 p-8 bg-destructive/5">
            <h3 className="text-h4 font-semibold text-foreground mb-6">Sans Calendia Pro</h3>
            <ul className="space-y-4">
              {problems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-text-secondary">
                  <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* With */}
          <div className="relative rounded-card border-2 border-primary p-8 bg-primary/5 shadow-card-hover">
            <span className="absolute -top-3 right-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-pill">
              Recommandé
            </span>
            <h3 className="text-h4 font-semibold text-foreground mb-6">Avec Calendia Pro</h3>
            <ul className="space-y-4">
              {solutions.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground">
                  <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-10">
          <a href="#tarifs" className="text-primary font-semibold hover:underline transition-all">
            Voir les tarifs →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
