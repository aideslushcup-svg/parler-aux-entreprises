import { Settings, Phone, FileText } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

const steps = [
  {
    icon: Settings,
    title: "On configure tout pour vous",
    detail: "On personnalise votre assistant selon votre entreprise, vos réponses, votre ton.",
    sub: "~1 heure de votre temps",
  },
  {
    icon: Phone,
    title: "Il répond à vos appels 24/7",
    detail: "Votre assistant décroche chaque appel, prend les rendez-vous, qualifie les leads.",
    sub: "Dès la première journée",
  },
  {
    icon: FileText,
    title: "Vous recevez les résumés",
    detail: "Chaque appel résumé par courriel. Vous gardez le contrôle sans décrocher.",
    sub: "En temps réel",
  },
];

const HowItWorks = () => {
  return (
    <section id="comment-ca-marche" className="section-padding bg-navy text-navy-foreground">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-h2 font-bold mb-4">
            Comment ça <span className="text-primary">marche</span>
          </h2>
          <p className="text-body-lg text-white/70">
            Trois étapes. On s'occupe de tout.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto relative">
          {/* Connection line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />

          {steps.map((step, i) => (
            <div key={i} className="relative text-center group">
              <div className="relative z-10 w-24 h-24 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center shadow-vsl-glow group-hover:scale-110 transition-transform">
                <step.icon className="w-10 h-10 text-primary-foreground" />
                <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-navy-foreground text-navy text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-white/70 text-sm mb-2">{step.detail}</p>
              <span className="text-primary text-sm font-medium">{step.sub}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a href="#cta-final">
            <LiquidButton size="lg">Réserver un appel découverte</LiquidButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
