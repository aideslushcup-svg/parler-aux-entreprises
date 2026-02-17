import { Star } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { HeroLamp } from "@/components/ui/hero-lamp";

const FloatingCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => (
  <div
    className={`absolute hidden lg:flex items-center gap-2 bg-card rounded-card shadow-card px-4 py-3 text-sm font-medium ${className}`}
  >
    {children}
  </div>
);

const HeroSection = () => {
  return (
    <HeroLamp className="pt-24 pb-16">
      <div className="flex flex-col items-center text-center space-y-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-secondary text-secondary-foreground text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-primary" />
          Réceptionniste IA #1 au Québec
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground max-w-4xl tracking-tight">
          Ne manquez plus{" "}
          <span className="text-primary">jamais</span> un appel.
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
          Calendia Pro répond à chaque appel 24/7, prend des rendez-vous
          automatiquement et vous envoie des résumés en temps réel. À partir de
          99$/mois.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a href="#cta-final">
            <LiquidButton size="lg">Réserver un appel</LiquidButton>
          </a>
          <a href="#vsl">
            <LiquidButton variant="outline" size="lg">Regarder la démo</LiquidButton>
          </a>
        </div>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <div className="flex -space-x-3">
            {[
              "bg-primary", "bg-success", "bg-destructive",
              "bg-secondary-foreground", "bg-text-secondary",
            ].map((bg, i) => (
              <div
                key={i}
                className={`w-9 h-9 rounded-full ${bg} border-2 border-background flex items-center justify-center text-primary-foreground text-xs font-bold`}
              >
                {["JB","ML","SC","PT","LD"][i]}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1 text-sm font-medium text-foreground">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            5.0 — 500+ entreprises satisfaites
          </div>
        </div>
      </div>

      {/* Floating cards */}
      <FloatingCard className="top-[18%] left-[4%] animate-float-1 z-50">
        <div className="text-xs">
          <div className="text-text-muted line-through">8% Sans Calendia</div>
          <div className="text-primary font-bold">75% Avec Calendia</div>
        </div>
      </FloatingCard>

      <FloatingCard className="top-[15%] right-[4%] animate-float-2 z-50">
        <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center text-success">✓</div>
        <span className="text-foreground">Appels sécurisés 24/7</span>
      </FloatingCard>

      <FloatingCard className="top-[45%] right-[2%] animate-float-3 z-50">
        <span>👥</span>
        <span className="text-foreground">Votre équipe CX</span>
      </FloatingCard>

      <FloatingCard className="bottom-[28%] left-[3%] animate-float-4 z-50">
        <div>
          <div className="text-foreground text-xs font-semibold">Appels aujourd'hui: 47</div>
          <div className="flex gap-0.5 mt-1">
            {[40, 65, 50, 80, 55, 70, 90].map((h, i) => (
              <div key={i} className="w-2 bg-primary/70 rounded-sm" style={{ height: `${h / 5}px` }} />
            ))}
          </div>
        </div>
      </FloatingCard>

      <FloatingCard className="bottom-[22%] right-[5%] animate-float-5 z-50">
        <div className="w-2 h-2 rounded-full bg-success" />
        <span className="text-foreground text-xs">Nouveau rendez-vous — Dr. Tremblay, 14h30</span>
      </FloatingCard>

      <FloatingCard className="bottom-[12%] left-1/2 -translate-x-1/2 animate-float-6 z-50">
        <div className="w-2.5 h-2.5 rounded-full bg-success animate-pulse-glow" />
        <span className="text-foreground text-xs font-semibold">Assistant actif 24/7</span>
      </FloatingCard>
    </HeroLamp>
  );
};

export default HeroSection;
