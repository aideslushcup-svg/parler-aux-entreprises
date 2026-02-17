import { Play, Clock, Subtitles } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";

interface VideoPlayerProps {
  videoUrl?: string | null;
}

const VideoPlayer = ({ videoUrl = null }: VideoPlayerProps) => {
  return (
    <section id="vsl" className="relative z-10 pb-16 md:pb-[120px]">
      <div className="container-narrow">
        <div className="relative max-w-[900px] mx-auto">
          {/* Glow effect */}
          <div className="absolute -inset-4 rounded-[24px] animate-glow-pulse pointer-events-none" style={{
            background: "radial-gradient(ellipse at center, rgba(0,102,255,0.15) 0%, transparent 70%)"
          }} />

          {/* Video frame wrapper */}
          <div className="relative rounded-[20px]">
            <div className="overflow-hidden rounded-[20px] border border-white/15 backdrop-blur-xl"
              style={{ background: "rgba(255,255,255,0.08)" }}
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
                    background: "linear-gradient(135deg, #021c3b 0%, #0a1628 100%)",
                  }}
                >
                  {/* Play button */}
                  <div className="absolute top-1/2 left-1/2 animate-play-pulse w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-vsl-glow group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-5 text-text-muted text-sm">
            <span>Regardez comment Calendia répond à vos appels en moins de 3 minutes</span>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 2 min 47</span>
              <span className="flex items-center gap-1"><Subtitles className="w-3.5 h-3.5" /> Sous-titres disponibles</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;
