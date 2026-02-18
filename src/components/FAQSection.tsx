import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Est-ce que l'IA comprend le français québécois?",
    a: "Absolument! Notre assistant est optimisé pour le français du Québec, incluant les expressions locales et les accents. C'est d'ailleurs notre spécialité — aucun compétiteur n'offre ce niveau de qualité en québécois.",
  },
  {
    q: "Comment ça s'intègre à mon CRM?",
    a: "Calendia se connecte nativement à GoHighLevel, Google Calendar, Airtable et plus de 1 000 autres outils. On s'occupe de la configuration pour vous.",
  },
  {
    q: "Que se passe-t-il si l'IA ne peut pas répondre?",
    a: "L'assistant détecte automatiquement qu'il ne peut pas aider et transfère l'appel à un membre de votre équipe avec le contexte complet. Le taux de transfert moyen est d'environ 6%.",
  },
  {
    q: "Y a-t-il un engagement minimum?",
    a: "Aucun. Pas de contrat à long terme, pas de frais cachés. Vous pouvez annuler à tout moment. Si vous avez 0 appels dans un mois, vous payez 0$ en frais d'utilisation.",
  },
  {
    q: "Combien de temps pour être opérationnel?",
    a: "Moins de 48h. On a besoin d'environ 1 heure de votre temps pour comprendre votre entreprise, et on s'occupe de tout le reste.",
  },
  {
    q: "Et si je veux essayer avant de m'engager?",
    a: "On offre une phase pilote incluse. Vous testez l'assistant avec de vrais appels pendant quelques jours avant de décider. Zéro risque.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-14 md:py-20 bg-background border-t border-border">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-12">
          Questions fréquentes
        </h2>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-border rounded-card px-6 data-[state=open]:bg-primary/5"
            >
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground py-5 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
