import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Comment ça marche", href: "#comment-ca-marche" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex items-center justify-between w-full max-w-[1200px] rounded-pill px-6 py-3 transition-all duration-300 border border-border ${
          scrolled
            ? "bg-background/95 shadow-nav backdrop-blur-xl py-2"
            : "bg-background/92 backdrop-blur-2xl"
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-1.5 text-foreground font-bold text-lg">
          <span className="text-primary">✦</span> Calendia Pro
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-text-secondary font-medium text-sm hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#cta-final"
          className="hidden md:inline-flex items-center px-6 py-2.5 bg-primary text-primary-foreground font-semibold text-sm rounded-pill hover:brightness-90 transition-all hover:scale-[1.02]"
        >
          Réserver un appel
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 top-0 z-40 bg-background flex flex-col items-center justify-center gap-8 md:hidden">
          <button
            className="absolute top-6 right-6 text-foreground"
            onClick={() => setMenuOpen(false)}
            aria-label="Fermer"
          >
            <X size={28} />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-foreground font-semibold text-2xl hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta-final"
            onClick={() => setMenuOpen(false)}
            className="px-8 py-3.5 bg-primary text-primary-foreground font-semibold text-lg rounded-pill hover:brightness-90 transition-all"
          >
            Réserver un appel
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
