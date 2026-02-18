import { LiquidButton } from "@/components/ui/liquid-glass-button";

const footerLinks = {
  Produit: [
    { label: "Comment ça marche", href: "#comment-ca-marche" },
    { label: "Tarifs", href: "#tarifs" },
    { label: "Intégrations", href: "#integrations" },
    { label: "FAQ", href: "#faq" },
  ],
  Entreprise: [
    { label: "À propos", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Légal: [
    { label: "Politique de confidentialité", href: "#" },
    { label: "Conditions d'utilisation", href: "#" },
  ],
};

const FooterSection = () => {
  return (
    <footer id="cta-final" className="bg-white text-foreground border-t border-border">
      {/* CTA Block */}
      <div className="py-14 md:py-20 border-b border-border/40">
        <div className="mx-auto max-w-5xl px-6 text-center max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-foreground">
            Prêt à ne plus jamais manquer un appel?
          </h2>
          <p className="text-body-lg text-muted-foreground mb-8">
            Réservez un appel découverte gratuit de 15 minutes. On vous montre exactement
            comment Calendia peut s'adapter à votre entreprise.
          </p>
          <a href="#">
            <LiquidButton size="xl">Réserver mon appel gratuit</LiquidButton>
          </a>
          <p className="text-sm text-muted-foreground/70 mt-4">
            Configuration en moins de 48h. Sans engagement. Phase pilote incluse.
          </p>
        </div>
      </div>

      {/* Footer links */}
      <div className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="text-lg font-bold mb-3">
                <span className="text-primary">✦</span> Calendia Pro
              </div>
              <p className="text-sm text-muted-foreground">
                Votre réceptionniste IA, avec l'accent d'ici.
              </p>
            </div>

            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold text-sm mb-4 text-foreground/90">{category}</h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/40 py-6">
        <div className="mx-auto max-w-5xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground/70">
          <span>© 2026 Calendia Pro. Tous droits réservés. Fait au Québec 🇨🇦</span>
          <div className="flex items-center gap-4">
            {["LinkedIn", "Facebook", "Instagram"].map((s) => (
              <a key={s} href="#" className="hover:text-foreground transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
