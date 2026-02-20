import { Play, Clock, Subtitles } from "lucide-react";
import { GlowButton } from "@/components/ui/glow-button";
import { CardCanvas, GlowCard } from "@/components/ui/animated-glow-card";
import { motion } from "framer-motion";

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

interface HeroSectionProps {
  videoUrl?: string | null;
}

const HeroSection = ({ videoUrl = null }: HeroSectionProps) => {
  return (
    <section className="pt-24 pb-0 md:pt-32 bg-background">
      <div className="flex flex-col items-center text-center w-full">
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center text-center max-w-3xl gap-5 px-4"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm md:text-base font-semibold border border-primary/20">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
            Réceptionniste IA #1 au Québec
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground tracking-tight leading-[1.1]">
            Ne manquez plus{" "}
            <span className="text-primary">jamais</span> un appel.
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-xl text-foreground/80 max-w-3xl leading-relaxed font-medium">
            Calendia répond à chaque appel 24/7, prend des rendez-vous
            automatiquement et vous envoie des résumés en temps réel. À partir
            de 99$/mois.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
            <a href="https://app.calendiapro.com/formulaire-qualification" className="w-full sm:w-auto">
              <GlowButton size="lg" className="w-full sm:w-auto md:glow-btn-xl">Réserver un appel</GlowButton>
            </a>
            <a href="#vsl" className="w-full sm:w-auto">
              <GlowButton variant="outline" size="lg" showIcon={false} className="w-full sm:w-auto md:glow-btn-xl">Regarder la démo</GlowButton>
            </a>
          </div>

        </motion.div>

        {/* Floating Video Card — overlaps hero boundary */}
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          id="vsl"
          className="relative w-full max-w-[1100px] mx-auto px-4 mt-10 md:mt-16 mb-[-80px] md:mb-[-160px]"
        >
          <CardCanvas>
            <GlowCard className="w-full">
              {videoUrl ? (
                <div className="aspect-video">
                  <iframe
                    src={videoUrl}
                    className="w-full h-full"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title="Calendia Demo"
                  />
                </div>
              ) : (
                <div
                  className="aspect-video relative flex items-center justify-center cursor-pointer group"
                  style={{
                    background:
                      "linear-gradient(135deg, #f8faff 0%, #e8efff 100%)",
                  }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-28 md:h-28 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform border border-primary/20">
                    <Play
                      className="w-10 h-10 md:w-12 md:h-12 text-white ml-1"
                      fill="currentColor"
                    />
                  </div>
                </div>
              )}
            </GlowCard>
          </CardCanvas>

          {/* Sub-text */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 text-foreground/70 text-sm">
            <span>
              Regardez comment Calendia répond à vos appels en moins de 3
              minutes
            </span>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> 2 min 47
              </span>
              <span className="flex items-center gap-1.5">
                <Subtitles className="w-4 h-4" /> Sous-titres disponibles
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
