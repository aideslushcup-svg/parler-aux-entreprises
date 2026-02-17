import { Settings, Phone, FileText } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div
    aria-hidden
    className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
  >
    <div className="absolute inset-0 [--border:hsl(var(--primary)/0.15)] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />
    <div className="absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l border-primary/20 bg-primary/5 text-primary">
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
      className="relative py-20 md:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #f0f4ff 0%, #e8efff 50%, #f0f4ff 100%)",
      }}
    >
      {/* Subtle glow accents */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,102,255,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,102,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-6">
        {/* Header — BIGGER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            Comment ça <span className="text-primary">marche</span>
          </h2>
          <p className="mt-5 text-lg md:text-xl text-muted-foreground">
            Trois étapes. On s'occupe de tout.
          </p>
        </motion.div>

        {/* Cards — scroll animation one by one */}
        <div className="mx-auto mt-12 md:mt-20 grid max-w-sm md:max-w-full grid-cols-1 md:grid-cols-3 gap-8 *:text-center">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="group border border-primary/10 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full">
                <CardHeader className="pb-3">
                  <CardDecorator>{step.icon}</CardDecorator>
                  <h3 className="mt-6 font-semibold text-foreground text-xl md:text-2xl">
                    {step.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA — bigger */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a href="#cta-final">
            <LiquidButton size="lg" className="text-lg px-10 py-5 h-auto font-bold">
              Réserver un appel découverte
            </LiquidButton>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
