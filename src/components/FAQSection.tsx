import { FaqAccordion } from "@/components/ui/faq-chat-accordion";

const faqs = [
  {
    id: 1,
    question: "Est-ce que l'IA comprend le français québécois?",
    answer: "Absolument! Notre assistant est optimisé pour le français du Québec, incluant les expressions locales et les accents. C'est d'ailleurs notre spécialité — aucun compétiteur n'offre ce niveau de qualité en québécois.",
  },
  {
    id: 2,
    question: "Comment ça s'intègre à mon CRM?",
    answer: "Calendia se connecte nativement à GoHighLevel, Google Calendar, Airtable et plus de 1 000 autres outils. On s'occupe de la configuration pour vous.",
  },
  {
    id: 3,
    question: "Que se passe-t-il si l'IA ne peut pas répondre?",
    answer: "L'assistant détecte automatiquement qu'il ne peut pas aider et transfère l'appel à un membre de votre équipe avec le contexte complet. Le taux de transfert moyen est d'environ 6%.",
  },
  {
    id: 4,
    question: "Y a-t-il un engagement minimum?",
    answer: "Aucun. Pas de contrat à long terme, pas de frais cachés. Vous pouvez annuler à tout moment. Si vous avez 0 appels dans un mois, vous payez 0$ en frais d'utilisation.",
  },
  {
    id: 5,
    question: "Combien de temps pour être opérationnel?",
    answer: "Entre 1 et 3 semaines selon la complexité de votre entreprise. On a besoin d'environ 1 heure de votre temps pour comprendre vos besoins, et on s'occupe de tout le reste.",
  },
  {
    id: 6,
    question: "Et si je veux essayer avant de m'engager?",
    answer: "On offre une phase pilote incluse. Vous testez l'assistant avec de vrais appels pendant quelques jours avant de décider. Zéro risque.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-14 md:py-20 bg-background">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-12">
          Questions fréquentes
        </h2>

        <FaqAccordion
          data={faqs}
          className="max-w-3xl mx-auto"
          timestamp=""
        />
      </div>
    </section>
  );
};

export default FAQSection;
