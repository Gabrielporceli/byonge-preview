import React from 'react';
import Reveal from './Reveal';

const newsItems = [
  { source: 'Sechat', title: 'UFMT, Uniselva e Fitocann firmam parceria para pesquisa em cannabis medicinal', href: 'https://sechat.com.br/noticia/ufmt-uniselva-e-fitocann-firmam-parceria-para-pesquisa-em-cannabis-medicinal' },
  { source: 'Leia Agora', title: 'Pesquisa desenvolve condições para cultivo de cannabis medicinal em MT', href: 'https://leiagora.com.br/pesquisa-desenvolve-condicoes-para-cultivo-de-cannabis-medicinal-em-mt/' },
  { source: 'Leia Agora', title: 'Centro de pesquisa visa tornar MT polo de referência nacional', href: 'https://leiagora.com.br/centro-de-pesquisa-visa-tornar-mt-polo-de-referencia-nacional-na-producao-de-cannabis-sativa/' },
  { source: 'Fundação Uniselva', title: 'Notícias institucionais sobre projetos em cannabis medicinal', href: 'https://web.fundacaouniselva.org.br/frmNoticias.aspx' },
  { source: 'Instagram', title: 'Divulgação da parceria nas redes sociais', href: 'https://www.instagram.com/p/DNji-kfPnQc/' }
];

const News: React.FC = () => {
  return (
    <section className="section section-news" id="news">
      <div className="container news-grid">
        <div className="news-col">
          <Reveal delayIndex={0}>
            <p className="eyebrow">Latest News</p>
            <h2 className="section-title">A parceria <span className="accent">na mídia</span>.</h2>
          </Reveal>
          <ul className="news-list">
            {newsItems.map((news, i) => (
              <Reveal key={i} delayIndex={i}>
                <li>
                  <a href={news.href} target="_blank" rel="noopener noreferrer">
                    <span className="news-source">{news.source}</span>
                    <h3>{news.title}</h3>
                    <span className="news-cta">
                      Ler matéria 
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ marginLeft: '6px' }}>
                        <path d="M7 17L17 7M9 7h8v8"/>
                      </svg>
                    </span>
                  </a>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <aside className="event-col">
          <Reveal delayIndex={2}>
            <p className="eyebrow">Upcoming</p>
            <h2 className="section-title section-title--sm">Medical Cannabis Fair 2026.</h2>
            <article className="event-card">
              <div className="event-date">
                <span className="event-month">MAI</span>
                <span className="event-day">21–23</span>
              </div>
              <div className="event-body">
                <span className="event-tag">Patrocinador Bronze</span>
                <h3>Apresentação oficial do CEIFMT</h3>
                <p>
                  A Byonge participa do evento como patrocinadora bronze para apresentar
                  oficialmente o <strong>CEIFMT — Centro de Estudos e Farmacognosia do
                  Mato Grosso</strong>.
                </p>
              </div>
            </article>
          </Reveal>
        </aside>
      </div>
    </section>
  );
};

export default News;
