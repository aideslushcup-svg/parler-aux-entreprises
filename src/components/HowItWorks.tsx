import { Settings, Phone, FileText } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

const StepCard = ({ icon, title, description, benefits }: StepCardProps) => (
  <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:border-primary/40 hover:bg-white/10">
    {/* Icon */}
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
      {icon}
    </div>
    {/* Title and Description */}
    <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
    <p className="mb-6 text-white/60">{description}</p>
    {/* Benefits List */}
    <ul className="space-y-3">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-center gap-3">
          <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
            <div className="h-2 w-2 rounded-full bg-primary" />
          </div>
          <span className="text-white/70 text-sm">{benefit}</span>
        </li>
      ))}
    </ul>
  </div>
);

const steps = [
  {
    icon: <Settings className="h-6 w-6" />,
    title: "On configure tout pour vous",
    description:
      "Un appel d'onboarding pour bien comprendre votre entreprise, puis on construit et installe votre assistant vocal sur mesure.",
    benefits: [
      "Appel découverte pour analyser vos besoins",
      "On programme les réponses à vos questions fréquentes",
      "On connecte votre calendrier et votre CRM",
      "Installation complète en 1 à 3 semaines",
    ],
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Il répond à vos appels 24/7",
    description:
      "Votre assistant décroche chaque appel avec le ton de votre entreprise. Il qualifie, prend les rendez-vous et redirige quand nécessaire.",
    benefits: [
      "Prend les rendez-vous directement dans votre calendrier",
      "Qualifie les leads selon vos critères",
      "Gère les appels simultanés sans limite",
      "Transfère les urgences à votre équipe",
    ],
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Vous gardez le contrôle total",
    description:
      "Chaque appel est résumé et envoyé en temps réel par courriel et dans votre CRM. Besoin d'un ajustement? On s'en occupe.",
    benefits: [
      "Résumé détaillé de chaque appel par courriel",
      "Fiche d'appel automatique dans votre CRM",
      "On ajuste le comportement de l'assistant pour vous sur demande",
      "Aucun engagement — annulez quand vous voulez",
    ],
  },
];

const HowItWorks = () => {
  return (
    <section id="comment-ca-marche" className="section-padding bg-navy text-navy-foreground">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-h2 font-bold mb-4">
            Comment ça <span className="text-primary">marche</span>
          </h2>
          <p className="text-body-lg text-white/70">
            Trois étapes. On s'occupe de tout.
          </p>
        </div>

        {/* Step Indicators with Connecting Line */}
        <div className="relative mx-auto mb-8 w-full max-w-4xl">
          <div
            aria-hidden="true"
            className="absolute left-[16.6667%] top-1/2 h-0.5 w-[66.6667%] -translate-y-1/2 bg-white/20"
          />
          <div className="relative grid grid-cols-3">
            {steps.map((_, index) => (
              <div
                key={index}
                className="flex h-8 w-8 items-center justify-center justify-self-center rounded-full bg-white/10 font-semibold text-white ring-4 ring-[hsl(var(--navy))]"
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Steps Grid */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              benefits={step.benefits}
            />
          ))}
        </div>

        {/* CTA */}
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
