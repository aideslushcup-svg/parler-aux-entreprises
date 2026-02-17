import { Play, Clock, Subtitles } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { motion } from "framer-motion";

interface VideoPlayerProps {
  videoUrl?: string | null;
}

const industries = [
  "Cliniques", "Cabinets", "Coaches", "Services", "PME", "Startups",
  "Cliniques", "Cabinets", "Coaches", "Services", "PME", "Startups",
];

const VideoPlayer = ({ videoUrl = null }: VideoPlayerProps) => {
  return (
    <section
      id="vsl"
      className="pb-12 md:pb-16"
      style={{
        background: "linear-gradient(180deg, #f0f4ff 0%, #e8efff 50%, #f0f4ff 100%)",
      }}
    >
      <div className="max-w-[960px] mx-auto px-4">
        {/* Video frame */}
        <div className="relative">
          {/* Glow */}
          <div
            className="absolute -inset-4 rounded-[24px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(0,102,255,0.08) 0%, transparent 70%)",
            }}
          />

          <div className="relative rounded-[20px]">
            <div
              className="overflow-hidden rounded-[20px] border border-black/10 shadow-xl"
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
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play
                      className="w-8 h-8 text-primary-foreground ml-1"
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 text-muted-foreground text-sm">
            <span>
              Regardez comment Calendia répond à vos appels en moins de 3
              minutes
            </span>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> 2 min 47
              </span>
              <span className="flex items-center gap-1">
                <Subtitles className="w-3.5 h-3.5" /> Sous-titres disponibles
              </span>
            </div>
          </div>
        </div>

        {/* Brand slider — tight below video */}
        <div className="mt-10 relative overflow-hidden">
          <div className="text-center mb-4">
            <span className="text-xs font-medium text-muted-foreground/60 tracking-widest uppercase">
              Ils nous font confiance
            </span>
          </div>

          {/* Fade edges */}
          <div
            className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none w-[80px]"
            style={{
              background:
                "linear-gradient(90deg, #f0f4ff 0%, rgba(240, 244, 255, 0) 100%)",
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none w-[80px]"
            style={{
              background:
                "linear-gradient(270deg, #f0f4ff 0%, rgba(240, 244, 255, 0) 100%)",
            }}
          />

          <motion.div
            className="flex items-center gap-16 pl-16"
            animate={{ x: [0, -(industries.length / 2) * 140] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {industries.map((name, i) => (
              <span
                key={i}
                className="flex-shrink-0 text-sm font-semibold text-foreground/30 tracking-wide"
              >
                {name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;
