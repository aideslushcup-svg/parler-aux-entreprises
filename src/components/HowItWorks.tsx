import { Settings, Phone, FileText } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { ReactNode } from "react";

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div
    aria-hidden
    className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
  >
    <div className="absolute inset-0 [--border:white] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-10" />
    <div className="absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l border-white/20 bg-white/5 text-primary">
      {children}
    </div>
  </div>
);

const steps = [
  {
    icon: <Settings className="size-6" />,
    title: "On configure tout pour vous",
    description:
      "Un appel d'onboarding pour comprendre votre entreprise, puis on construit et installe votre assistant vocal sur mesure. Prêt en 1 à 3 semaines.",
  },
  {
    icon: <Phone className="size-6" />,
    title: "Il répond à vos appels 24/7",
    description:
      "Votre assistant décroche chaque appel avec le ton de votre entreprise. Il qualifie les leads, prend les rendez-vous et transfère les urgences.",
  },
  {
    icon: <FileText className="size-6" />,
    title: "Vous gardez le contrôle total",
    description:
      "Résumé par courriel et fiche CRM après chaque appel. Besoin d'un ajustement? On s'en occupe. Aucun engagement.",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="comment-ca-marche"
      className="relative py-16 md:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #020817 0%, #0a1628 40%, #071230 100%)",
      }}
    >
      {/* Subtle glow accents */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,102,255,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,102,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
            Comment ça <span className="text-primary">marche</span>
          </h2>
          <p className="mt-4 text-white/50">
            Trois étapes. On s'occupe de tout.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-10 md:mt-16 grid max-w-sm md:max-w-full grid-cols-1 md:grid-cols-3 gap-6 *:text-center">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="group border-0 bg-white/[0.03] shadow-none backdrop-blur-sm hover:bg-white/[0.06] transition-all duration-300"
            >
              <CardHeader className="pb-3">
                <CardDecorator>{step.icon}</CardDecorator>
                <h3 className="mt-6 font-medium text-white text-lg">
                  {step.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-white/50 leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="#cta-final">
            <LiquidButton size="lg">Réserver un appel découverte</LiquidButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
