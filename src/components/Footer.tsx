import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-brand">
          <img src="/logo-byonge-footer.png" alt="byonge — Além do essencial." className="footer-logo" />
        </div>

        <nav className="footer-nav" aria-label="Rodapé">
          <div>
            <h5>Empresa</h5>
            <a href="#sobre">Sobre</a>
            <a href="#capacidades">Capacidades</a>
            <a href="#equipe">Equipe</a>
            <a href="#pd">P&amp;D · CEIFMT</a>
          </div>
          <div>
            <h5>Conteúdo</h5>
            <a href="#news">News</a>
            <a href="#contato">Contato</a>
          </div>
          <div>
            <h5>Fale conosco</h5>
            <a href="mailto:contato@byonge.com">contato@byonge.com</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </div>
        </nav>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© <span id="year">{currentYear}</span> Byonge Pesquisa e Desenvolvimento. Todos os direitos reservados.</p>
          <p className="muted">Anteriormente Fitocann.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
