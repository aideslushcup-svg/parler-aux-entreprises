import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { WorldMap } from "@/components/ui/world-map";
import { MeshBackground } from "@/components/ui/mesh-background";
import { GradientCard } from "@/components/ui/gradient-card";
import {
  CalendarCheck,
  Headphones,
  MessageSquareText,
  Phone,
  PhoneIncoming,
  Settings,
  Sparkles,
  UserCheck,
} from "lucide-react";
import { motion } from "framer-motion";

// Single Quebec marker on the world map
const quebecMarker = [{ lat: 46.8, lng: -71.2, label: "Québec" }];

export default function FeaturesSection() {
  return (
    <section
      id="comment-ca-marche"
      className="relative py-14 md:py-20 overflow-hidden bg-background"
    >
      <MeshBackground />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
            Comment ça <span className="text-primary">marche</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-foreground/80 font-medium max-w-2xl mx-auto">
            On s'occupe de tout, de A à Z. Vous restez concentré sur votre
            entreprise.
          </p>
        </motion.div>

        {/* Feature cards grid */}
        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 — Configuration */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
          >
            <GradientCard className="h-full">
              <div className="p-8">
                <Settings className="text-primary size-6" />
                <h3 className="text-foreground mt-5 text-xl font-semibold">
                  Configuration sur mesure
                </h3>
                <p className="text-foreground/70 mt-3 text-balance">
                  Un appel d'onboarding pour comprendre votre entreprise, puis on
                  construit votre assistant vocal personnalisé. Prêt en 1 à 3
                  semaines.
                </p>

                <div className="mt-9 aspect-video rounded-xl p-4 bg-white/50 border border-foreground/10">
                  <div className="mb-0.5 text-sm font-semibold text-foreground">
                    Appel d'onboarding
                  </div>
                  <div className="mb-4 flex gap-2 text-sm">
                    <span className="text-foreground/50">
                      Configuration personnalisée
                    </span>
                  </div>
                  <div className="mb-2 flex -space-x-1.5">
                    {[
                      { bg: "bg-primary", initials: "CP" },
                      { bg: "bg-emerald-500", initials: "VE" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className={`${item.bg} size-7 rounded-full border border-white/50 flex items-center justify-center text-white text-[10px] font-bold`}
                      >
                        {item.initials}
                      </div>
                    ))}
                  </div>
                  <div className="text-foreground/50 text-sm font-medium">
                    Ton, vocabulaire, scénarios
                  </div>
                </div>
              </div>
            </GradientCard>
          </motion.div>

          {/* Card 2 — Réponse 24/7 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <GradientCard className="h-full">
              <div className="group px-8 pt-8 h-full">
                <PhoneIncoming className="text-primary size-6" />
                <h3 className="text-foreground mt-5 text-xl font-semibold">
                  Réponse intelligente 24/7
                </h3>
                <p className="text-foreground/70 mt-3 text-balance">
                  Votre assistant décroche chaque appel avec le ton de votre
                  entreprise. Il qualifie les leads, prend les rendez-vous et
                  transfère les urgences.
                </p>

                <div aria-hidden className="relative mt-6">
                  <div className="aspect-video w-4/5 translate-y-4 rounded-xl p-3 transition-transform duration-200 ease-in-out group-hover:-rotate-3 bg-white/50 border border-foreground/10">
                    <div className="mb-3 flex items-center gap-2">
                      <div className="bg-emerald-500 size-6 rounded-full flex items-center justify-center">
                        <Phone className="size-3 text-white" />
                      </div>
                      <span className="text-foreground/50 text-sm font-medium">
                        Appel entrant
                      </span>
                      <span className="text-foreground/30 text-xs">
                        Maintenant
                      </span>
                    </div>
                    <div className="ml-8 space-y-2">
                      <div className="bg-foreground/10 h-2 rounded-full" />
                      <div className="bg-foreground/10 h-2 w-3/5 rounded-full" />
                      <div className="bg-foreground/10 h-2 w-1/2 rounded-full" />
                    </div>
                    <UserCheck className="ml-8 mt-3 size-5 text-primary" />
                  </div>
                  <div className="aspect-3/5 absolute -top-4 right-0 flex w-2/5 translate-y-4 rounded-xl p-2 transition-transform duration-200 ease-in-out group-hover:rotate-3 bg-white/50 border border-foreground/10">
                    <div className="m-auto flex size-10 rounded-full bg-primary/15">
                      <CalendarCheck className="m-auto size-4 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </GradientCard>
          </motion.div>

          {/* Card 3 — Contrôle total */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <GradientCard className="h-full">
              <div className="group px-8 pt-8 h-full">
                <Headphones className="text-primary size-6" />
                <h3 className="text-foreground mt-5 text-xl font-semibold">
                  Contrôle total et résumés
                </h3>
                <p className="text-foreground/70 mt-3 text-balance">
                  Résumé par courriel et fiche CRM après chaque appel. Besoin d'un
                  ajustement? On s'en occupe. Aucun engagement.
                </p>

                <div className="mask-b-from-50 -mx-2 -mt-2 px-2 pt-2">
                  <div
                    aria-hidden
                    className="mt-6 aspect-video translate-y-4 rounded-xl p-4 pb-6 transition-transform duration-200 group-hover:translate-y-0 bg-white/50 border border-foreground/10"
                  >
                    <div className="w-fit">
                      <Sparkles className="size-3.5 fill-primary/50 stroke-primary" />
                      <p className="mt-2 line-clamp-2 text-sm text-foreground/70">
                        Résumé de l'appel: Mme Tremblay souhaite un rendez-vous
                        lundi à 14h pour une consultation.
                      </p>
                    </div>
                    <div className="bg-foreground/5 -mx-3 -mb-3 mt-3 space-y-3 rounded-lg p-3">
                      <div className="text-foreground/50 text-sm">
                        Envoyé au CRM
                      </div>
                      <div className="flex justify-between">
                        <div className="flex gap-2">
                          <div className="size-7 rounded-2xl border border-foreground/10 flex items-center justify-center">
                            <MessageSquareText className="size-3.5 text-foreground/50" />
                          </div>
                          <div className="size-7 rounded-2xl border border-foreground/10 flex items-center justify-center">
                            <CalendarCheck className="size-3.5 text-foreground/50" />
                          </div>
                        </div>
                        <div className="size-7 rounded-2xl bg-primary flex items-center justify-center">
                          <Sparkles className="size-3.5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </GradientCard>
          </motion.div>
        </div>

        {/* Map section — floating card with border */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              L'IA qui parle québécois, de{" "}
              <span className="text-primary">Gatineau à Gaspé</span>.
            </h3>
            <p className="mt-3 text-base md:text-lg text-foreground/80 font-medium max-w-2xl mx-auto">
              Chaque appel manqué est une vente qui va au concurrent. On couvre
              votre territoire 24/7 pour une fraction du prix d'une
              réceptionniste.
            </p>
          </div>

          <GradientCard borderOnly className="w-full">
            <WorldMap markers={quebecMarker} lineColor="#0066ff" />
          </GradientCard>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a href="#cta-final">
            <LiquidButton
              size="lg"
              className="text-lg px-10 py-5 h-auto font-bold"
            >
              Réserver un appel découverte
            </LiquidButton>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
