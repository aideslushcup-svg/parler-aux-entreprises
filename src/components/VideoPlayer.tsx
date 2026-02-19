import { motion } from "framer-motion";
import { InfiniteTextCarousel } from "@/components/ui/infinite-text-carousel";

const industries = [
  "Plomberie",
  "Clinique dentaire",
  "Électricien",
  "Restaurant",
  "Cabinet d'avocats",
  "Hôtel",
  "HVAC",
  "Clinique médicale",
  "Toiture",
  "Salon de coiffure",
  "Comptable",
  "Compagnie de sinistres",
  "Planchers",
  "Vétérinaire",
  "Garage automobile",
  "Serrurier",
  "Paysagiste",
  "Optométriste",
  "Notaire",
  "Physiothérapie",
  "Courtier immobilier",
  "Exterminateur",
  "Chiropraticien",
  "Centre d'esthétique",
  "Entrepreneur général",
];

const VideoPlayer = () => {
  return (
    <section className="relative pt-28 md:pt-48 pb-10 md:pb-14 bg-background">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <h3 className="text-center text-lg md:text-2xl font-medium text-foreground/80 tracking-tight">
            Pour les{" "}
            <span className="font-semibold text-primary">PME</span> du
            Québec
          </h3>

          <InfiniteTextCarousel
            texts={industries}
            gap={48}
            duration={150}
            durationOnHover={200}
            className="py-6"
            textClassName="text-2xl md:text-3xl font-bold"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default VideoPlayer;
