import { Star, Phone, CalendarCheck, BarChart3, Bell } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Web3MediaHero } from "@/components/ui/web3media-hero";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <Web3MediaHero
      title="Ne manquez plus"
      highlightedText="jamais un appel."
      subtitle="Calendia Pro répond à chaque appel 24/7, prend des rendez-vous automatiquement et vous envoie des résumés en temps réel. À partir de 99$/mois."
      ctaButton={{
        label: "Réserver un appel",
        onClick: () => {
          document.getElementById("cta-final")?.scrollIntoView({ behavior: "smooth" });
        },
      }}
      secondaryButton={{
        label: "Regarder la démo",
        onClick: () => {
          document.getElementById("vsl")?.scrollIntoView({ behavior: "smooth" });
        },
      }}
      floatingIcons={[
        {
          icon: <Phone className="w-8 h-8 text-primary" />,
          label: "Appels",
          position: { x: "8%", y: "25%" },
        },
        {
          icon: <CalendarCheck className="w-8 h-8 text-primary" />,
          label: "RDV",
          position: { x: "12%", y: "65%" },
        },
        {
          icon: <BarChart3 className="w-8 h-8 text-primary" />,
          label: "Stats",
          position: { x: "82%", y: "28%" },
        },
        {
          icon: <Bell className="w-8 h-8 text-primary" />,
          label: "Alertes",
          position: { x: "78%", y: "68%" },
        },
      ]}
      trustedByText="Ils nous font confiance"
      brands={[
        {
          name: "Cliniques",
          logo: <span className="text-white/50 text-sm font-semibold tracking-wide">Cliniques</span>,
        },
        {
          name: "Cabinets",
          logo: <span className="text-white/50 text-sm font-semibold tracking-wide">Cabinets</span>,
        },
        {
          name: "Coaches",
          logo: <span className="text-white/50 text-sm font-semibold tracking-wide">Coaches</span>,
        },
        {
          name: "Services",
          logo: <span className="text-white/50 text-sm font-semibold tracking-wide">Services</span>,
        },
        {
          name: "PME",
          logo: <span className="text-white/50 text-sm font-semibold tracking-wide">PME</span>,
        },
        {
          name: "Startups",
          logo: <span className="text-white/50 text-sm font-semibold tracking-wide">Startups</span>,
        },
      ]}
      className="pt-20"
    >
      {/* Custom content with social proof */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col items-center text-center max-w-4xl gap-8 px-4"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-white/10 text-white/80 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-primary" />
          Réceptionniste IA #1 au Québec
        </div>

        {/* Title */}
        <h1
          className="font-bold text-white tracking-tight"
          style={{ fontSize: "clamp(32px, 5vw, 64px)", lineHeight: "1.15" }}
        >
          Ne manquez plus{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #0066FF 0%, #3B82F6 50%, #60A5FA 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            className="font-extrabold"
          >
            jamais
          </span>{" "}
          un appel.
        </h1>

        {/* Subtitle */}
        <p
          className="text-white/60 max-w-xl"
          style={{ fontSize: "clamp(14px, 2vw, 18px)", lineHeight: "1.6" }}
        >
          Calendia Pro répond à chaque appel 24/7, prend des rendez-vous
          automatiquement et vous envoie des résumés en temps réel. À partir
          de 99$/mois.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a href="#cta-final">
            <LiquidButton size="lg">Réserver un appel</LiquidButton>
          </a>
          <a href="#vsl">
            <LiquidButton variant="outline" size="lg">
              Regarder la démo
            </LiquidButton>
          </a>
        </div>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <div className="flex -space-x-3">
            {[
              "bg-primary",
              "bg-success",
              "bg-destructive",
              "bg-secondary-foreground",
              "bg-text-secondary",
            ].map((bg, i) => (
              <div
                key={i}
                className={`w-9 h-9 rounded-full ${bg} border-2 border-[#0a1628] flex items-center justify-center text-primary-foreground text-xs font-bold`}
              >
                {["JB", "ML", "SC", "PT", "LD"][i]}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1 text-sm font-medium text-white">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            5.0 — 500+ entreprises satisfaites
          </div>
        </div>
      </motion.div>
    </Web3MediaHero>
  );
};

export default HeroSection;
