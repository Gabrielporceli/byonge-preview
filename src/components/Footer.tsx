import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface FooterProps {
  onOpenPrivacy: () => void;
}

const Footer: FC<FooterProps> = ({ onOpenPrivacy }) => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-brand">
          <img src="/logo-byonge-footer.png" alt="byonge" className="footer-logo" />
        </div>

        <nav className="footer-nav" aria-label="Rodapé">
          <div>
            <h5>{t('footer.company')}</h5>
            <a href="#sobre">{t('nav.about')}</a>
            <a href="#capacidades">{t('nav.capabilities')}</a>
            <a href="#equipe">{t('nav.team')}</a>
            <a href="#pd">{t('nav.rd')} · CEIFMT</a>
          </div>
          <div>
            <h5>{t('footer.content')}</h5>
            <a href="#news">{t('nav.news')}</a>
            <a href="#contato">{t('nav.contact')}</a>
          </div>
          <div>
            <h5>{t('footer.getInTouch')}</h5>
            <a href="mailto:contato@byonge.com">contato@byonge.com</a>
            <a href="https://www.instagram.com/byonge.br/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.linkedin.com/company/byonge-biotech/?viewAsMember=true" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </nav>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {currentYear} {t('footer.rights')}</p>
          <div className="footer-bottom-links">
            <p className="muted">{t('footer.previously')}</p>
            <button onClick={(e) => { e.preventDefault(); onOpenPrivacy(); }} className="privacy-link-btn">
              {t('footer.privacy')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
