import { useState, useEffect, type FC } from 'react';

const Navbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Capacidades', href: '#capacidades' },
    { name: 'Equipe', href: '#equipe' },
    { name: 'P&D', href: '#pd' },
    { name: 'News', href: '#news' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`} id="siteHeader">
      <div className="container nav-shell">
        <a href="#home" className="brand" aria-label="byonge — início">
          <img src="/logo-byonge-footer.png" alt="byonge" className="brand-logo" />
        </a>

        <nav className={`primary-nav ${isMobileMenuOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
              {link.name}
            </a>
          ))}
        </nav>

        <button 
          className={`nav-toggle ${isMobileMenuOpen ? 'is-open' : ''}`} 
          id="navToggle" 
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
