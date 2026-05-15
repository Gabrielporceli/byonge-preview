import { useState, useEffect, type FC } from 'react';
import { useTranslation } from 'react-i18next';

const LANGS = [
  { code: 'pt', label: 'PT' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
];

const Navbar: FC = () => {
  const { t, i18n } = useTranslation();
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
    { name: t('nav.about'), href: '#sobre' },
    { name: t('nav.capabilities'), href: '#capacidades' },
    { name: t('nav.team'), href: '#equipe' },
    { name: t('nav.rd'), href: '#pd' },
    { name: t('nav.news'), href: '#news' },
    { name: t('nav.contact'), href: '#contato' },
  ];

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`} id="siteHeader">
      <div className="container nav-shell">
        <a href="#home" className="brand" aria-label="byonge, início">
          <img src="/logo-byonge-footer.png" alt="byonge" className="brand-logo" />
        </a>

        <nav className={`primary-nav ${isMobileMenuOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
              {link.name}
            </a>
          ))}
        </nav>

        <div className="lang-switcher">
          {LANGS.map(({ code, label }) => (
            <button
              key={code}
              className={`lang-btn ${i18n.language === code ? 'is-active' : ''}`}
              onClick={() => i18n.changeLanguage(code)}
              aria-label={`Switch language to ${label}`}
            >
              {label}
            </button>
          ))}
        </div>

        <button className="nav-toggle" id="navToggle" aria-label="Abrir menu" aria-expanded={isMobileMenuOpen}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
