import { useCallback, useEffect, useRef, useState } from "react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { motion } from "framer-motion";
import createGlobe, { COBEOptions } from "cobe";
import { cn } from "@/lib/utils";

// Quebec cities coordinates
const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [0 / 255, 102 / 255, 255 / 255],
  glowColor: [1, 1, 1],
  markers: [
    // Montreal
    { location: [45.5017, -73.5673], size: 0.1 },
    // Quebec City
    { location: [46.8139, -71.208], size: 0.08 },
    // Laval
    { location: [45.6066, -73.7124], size: 0.06 },
    // Gatineau
    { location: [45.4765, -75.7013], size: 0.06 },
    // Sherbrooke
    { location: [45.4042, -71.8929], size: 0.05 },
    // Trois-Rivières
    { location: [46.3432, -72.5432], size: 0.05 },
    // Saguenay
    { location: [48.4279, -71.0548], size: 0.04 },
    // Rimouski
    { location: [48.449, -68.524], size: 0.03 },
  ],
};

function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [r, setR] = useState(0);

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      setR(delta / 200);
    }
  };

  const onRender = useCallback(
    (state: Record<string, any>) => {
      if (!pointerInteracting.current) phi += 0.005;
      state.phi = phi + r;
      state.width = width * 2;
      state.height = width * 2;
    },
    [r]
  );

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender,
    });

    setTimeout(() => {
      if (canvasRef.current) canvasRef.current.style.opacity = "1";
    });
    return () => {
      window.removeEventListener("resize", onResize);
      globe.destroy();
    };
  }, []);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        )}
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}

const GlobeSection = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-full overflow-hidden rounded-3xl bg-muted border border-gray-200 shadow-md px-6 py-16 md:px-16 md:py-24"
        >
          <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row">
            <div className="z-10 max-w-xl text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                On aide les entreprises de{" "}
                <span className="text-primary">partout au Québec</span>{" "}
                <span className="text-muted-foreground font-normal">
                  à ne plus jamais manquer un appel. De Montréal à Rimouski, votre
                  réceptionniste IA répond 24/7 avec l'accent d'ici.
                </span>
              </h2>
              <a href="#cta-final">
                <LiquidButton
                  size="lg"
                  className="mt-8 text-lg px-10 py-5 h-auto font-bold"
                >
                  Réserver un appel
                </LiquidButton>
              </a>
            </div>
            <div className="relative h-[180px] w-full max-w-xl">
              <Globe className="absolute -bottom-20 -right-40 scale-150" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobeSection;
