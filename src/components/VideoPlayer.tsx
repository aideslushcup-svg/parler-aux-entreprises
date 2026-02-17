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
      className="relative z-20 -mt-8 md:-mt-16 pb-16 md:pb-24"
      style={{
        background: "linear-gradient(180deg, #f0f4ff 0%, #e8efff 50%, #f0f4ff 100%)",
      }}
    >
      <div className="max-w-[1100px] mx-auto px-4">
        {/* Video frame — bigger */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Glow */}
          <div
            className="absolute -inset-6 rounded-[28px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(0,102,255,0.10) 0%, transparent 70%)",
            }}
          />

          <div className="relative rounded-[20px]">
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
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-28 md:h-28 rounded-full bg-primary flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play
                      className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground ml-1"
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

          {/* Sub-text — bigger */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 text-muted-foreground text-base">
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

        {/* Brand slider — BIGGER trust section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 relative overflow-hidden"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Ils nous font confiance
            </h3>
            <p className="text-base text-muted-foreground">
              Des entreprises de toutes tailles au Québec
            </p>
          </div>

          {/* Fade edges */}
          <div
            className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none w-[80px]"
            style={{
              background:
                "linear-gradient(90deg, #e8efff 0%, rgba(232, 239, 255, 0) 100%)",
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none w-[80px]"
            style={{
              background:
                "linear-gradient(270deg, #e8efff 0%, rgba(232, 239, 255, 0) 100%)",
            }}
          />

          <motion.div
            className="flex items-center gap-20 pl-20"
            animate={{ x: [0, -(industries.length / 2) * 160] }}
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
                className="flex-shrink-0 text-xl md:text-2xl font-bold text-foreground/25 tracking-wide"
              >
                {name}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoPlayer;
