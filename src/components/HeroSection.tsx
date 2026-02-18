import { Play, Clock, Subtitles } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Web3MediaHero } from "@/components/ui/web3media-hero";
import { BorderBeam } from "@/components/ui/border-beam";
import { motion } from "framer-motion";

interface HeroSectionProps {
  videoUrl?: string | null;
}

const HeroSection = ({ videoUrl = null }: HeroSectionProps) => {
  return (
    <Web3MediaHero className="pt-28 pb-0 md:pt-32">
      <div className="flex flex-col items-center text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center text-center max-w-3xl gap-5 px-4"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-primary/10 text-primary text-base font-semibold border border-primary/20">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
            Réceptionniste IA #1 au Québec
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground tracking-tight leading-[1.1]">
            Ne manquez plus{" "}
            <span className="text-primary">jamais</span> un appel.
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-foreground/60 max-w-3xl leading-relaxed font-medium">
            Calendia Pro répond à chaque appel 24/7, prend des rendez-vous
            automatiquement et vous envoie des résumés en temps réel. À partir
            de 99$/mois.
          </p>

          {/* CTA Buttons */}
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

        </motion.div>

        {/* Floating Video Card — overlaps hero boundary */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          id="vsl"
          className="relative w-full max-w-[1100px] mx-auto px-4 mt-12 md:mt-16"
          style={{ marginBottom: "-160px" }}
        >
          {/* Centered radial glow behind video */}
          <div
            className="absolute -inset-16 pointer-events-none z-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at center, rgba(0, 102, 255, 0.07) 0%, transparent 60%)",
              filter: "blur(40px)",
            }}
          />

          <div className="relative z-10 rounded-[20px]">
            <div
              className="overflow-hidden rounded-[20px] border border-black/10 shadow-2xl"
              style={{ background: "#fff" }}
            >
              {videoUrl ? (
                <div className="aspect-video">
                  <iframe
                    src={videoUrl}
                    className="w-full h-full"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title="Calendia Pro Demo"
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
            </div>
            <BorderBeam
              size={250}
              duration={12}
              borderWidth={1.5}
              colorFrom="#0066ff"
              colorTo="#00ccff"
              delay={0}
            />
          </div>

          {/* Sub-text */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 text-foreground/50 text-sm">
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
    </Web3MediaHero>
  );
};

export default HeroSection;
