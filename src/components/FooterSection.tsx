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
    <footer id="cta-final" className="bg-navy text-navy-foreground">
      {/* CTA Block */}
      <div className="section-padding border-b border-white/10">
        <div className="container-narrow text-center max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Prêt à ne plus jamais manquer un appel?
          </h2>
          <p className="text-body-lg text-white/70 mb-8">
            Réservez un appel découverte gratuit de 15 minutes. On vous montre exactement
            comment Calendia peut s'adapter à votre entreprise.
          </p>
          <a
            href="#"
            className="inline-flex px-10 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-pill hover:brightness-90 hover:scale-[1.02] transition-all shadow-lg"
          >
            Réserver mon appel gratuit
          </a>
          <p className="text-sm text-white/50 mt-4">
            Configuration en moins de 48h. Sans engagement. Phase pilote incluse.
          </p>
        </div>
      </div>

      {/* Footer links */}
      <div className="py-12 md:py-16">
        <div className="container-narrow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="text-lg font-bold mb-3">
                <span className="text-primary">✦</span> Calendia Pro
              </div>
              <p className="text-sm text-white/60">
                Votre réceptionniste IA, avec l'accent d'ici.
              </p>
            </div>

            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold text-sm mb-4 text-white/90">{category}</h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-white/60 hover:text-white transition-colors"
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
      <div className="border-t border-white/10 py-6">
        <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <span>© 2026 Calendia Pro. Tous droits réservés. Fait au Québec 🇨🇦</span>
          <div className="flex items-center gap-4">
            {["LinkedIn", "Facebook", "Instagram"].map((s) => (
              <a key={s} href="#" className="hover:text-white transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
