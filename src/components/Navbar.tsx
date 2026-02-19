import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { GlowButton } from "@/components/ui/glow-button";

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
        <a href="#" className="flex items-center">
          <img src="/calendia-logo.png" alt="Calendia" className="h-10" />
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
        <a href="https://app.calendiapro.com/formulaire-qualification" className="hidden md:inline-flex">
          <GlowButton size="sm">Réserver un appel</GlowButton>
        </a>

        {/* Mobile hamburger — CSS icons, no re-render on toggle */}
        <button
          className="md:hidden text-foreground relative w-6 h-6"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <Menu size={24} className={`absolute inset-0 transition-opacity duration-150 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
          <X size={24} className={`absolute inset-0 transition-opacity duration-150 ${menuOpen ? "opacity-100" : "opacity-0"}`} />
        </button>
      </nav>

      {/* Mobile drawer — always in DOM, shown/hidden via CSS (no mount/unmount lag) */}
      <div
        className={`fixed inset-0 top-0 z-40 bg-background flex flex-col items-center justify-center gap-8 md:hidden transition-opacity duration-200 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
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
        <a href="https://app.calendiapro.com/formulaire-qualification" onClick={() => setMenuOpen(false)}>
          <GlowButton size="lg">Réserver un appel</GlowButton>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
