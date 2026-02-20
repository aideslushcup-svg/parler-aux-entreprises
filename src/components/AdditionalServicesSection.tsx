import { cn } from "@/lib/utils";
import {
  IconBolt,
  IconBrandInstagram,
  IconStar,
  IconRobot,
  IconBell,
  IconRefresh,
  IconShare,
  IconMessageCircle,
} from "@tabler/icons-react";
import { GlowButton } from "@/components/ui/glow-button";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

const AdditionalServicesSection = () => {
  const services = [
    {
      title: "Speed to Lead",
      description:
        "Appel automatique dès qu'un lead entre dans votre système. Qualification instantanée et prise de rendez-vous directe.",
      icon: <IconBolt />,
    },
    {
      title: "Réponses automatiques Messenger & Instagram",
      description:
        "Conversations naturelles et humaines sur vos réseaux sociaux. Redirection vers votre site ou prise de RDV directement dans la messagerie.",
      icon: <IconBrandInstagram />,
    },
    {
      title: "Augmentation & gestion des avis Google",
      description:
        "Demandes automatiques après chaque service rendu. Filtrage intelligent (<4 étoiles = formulaire privé). Réponses automatisées. Boost SEO garanti.",
      icon: <IconStar />,
    },
    {
      title: "Automatisation de tâches sur mesure",
      description:
        "Workflows entièrement personnalisables selon vos besoins. Automatisez n'importe quel processus répétitif de votre entreprise.",
      icon: <IconRobot />,
    },
    {
      title: "Follow-up jusqu'au rendez-vous",
      description:
        "Rappels automatiques avant chaque rendez-vous. Assurez-vous que vos clients se présentent et réduisez les no-shows.",
      icon: <IconBell />,
    },
    {
      title: "Réactivation d'anciens clients",
      description:
        "Campagnes intelligentes pour vos listes de milliers de clients inactifs. Codes promo, messages psychologiques pour les faire revenir.",
      icon: <IconRefresh />,
    },
    {
      title: "Publication automatique réseaux sociaux",
      description:
        "Posts quotidiens ou biquotidiens sur Instagram, Facebook et LinkedIn. Contenu personnalisé à votre entreprise pour booster votre visibilité.",
      icon: <IconShare />,
    },
    {
      title: "Chatbot intelligent sur votre site",
      description:
        "Assistant IA disponible 24/7 sur votre site web. Répond aux questions, qualifie les visiteurs et prend des rendez-vous directement.",
      icon: <IconMessageCircle />,
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          {...fadeInUp(0)}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Automatisation complète avec{" "}
            <span className="text-primary">Calendia</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Services d'automatisation supplémentaires pour multiplier vos
            résultats et libérer votre temps
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div {...fadeInUp(0.2)}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
            {services.map((service, index) => (
              <Feature key={service.title} {...service} index={index} />
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeInUp(0.4)} className="text-center mt-14">
          <a href="https://app.calendiapro.com/formulaire-qualification">
            <GlowButton size="lg">Découvrir tous nos services</GlowButton>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-border",
        (index === 0 || index === 4) && "lg:border-l border-border",
        index < 4 && "lg:border-b border-border"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-primary">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-border group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-foreground">
          {title}
        </span>
      </div>
      <p className="text-sm text-foreground/70 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

export default AdditionalServicesSection;
