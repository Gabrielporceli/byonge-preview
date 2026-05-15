import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from './Reveal';

const newsItems = [
  { source: 'Sechat', title: 'UFMT, Uniselva e Fitocann firmam parceria para pesquisa em cannabis medicinal', href: 'https://sechat.com.br/noticia/ufmt-uniselva-e-fitocann-firmam-parceria-para-pesquisa-em-cannabis-medicinal' },
  { source: 'Leia Agora', title: 'Pesquisa desenvolve condições para cultivo de cannabis medicinal em MT', href: 'https://leiagora.com.br/pesquisa-desenvolve-condicoes-para-cultivo-de-cannabis-medicinal-em-mt/' },
  { source: 'Leia Agora', title: 'Centro de pesquisa visa tornar MT polo de referência nacional', href: 'https://leiagora.com.br/centro-de-pesquisa-visa-tornar-mt-polo-de-referencia-nacional-na-producao-de-cannabis-sativa/' },
  { source: 'Fundação Uniselva', title: 'Notícias institucionais sobre projetos em cannabis medicinal', href: 'https://web.fundacaouniselva.org.br/frmNoticias.aspx' },
  { source: 'Instagram', title: 'Divulgação da parceria nas redes sociais', href: 'https://www.instagram.com/p/DNji-kfPnQc/' }
];

const News: FC = () => {
  const { t } = useTranslation();

  return (
    <section className="section section-news" id="news">
      <div className="container news-grid">
        <div className="news-col">
          <Reveal delayIndex={0}>
            <p className="eyebrow">{t('news.eyebrow')}</p>
            <h2
              className="section-title"
              dangerouslySetInnerHTML={{ __html: t('news.title') }}
            />
          </Reveal>
          <ul className="news-list">
            {newsItems.map((news, i) => (
              <Reveal key={i} delayIndex={i}>
                <li>
                  <a href={news.href} target="_blank" rel="noopener noreferrer">
                    <span className="news-source">{news.source}</span>
                    <h3>{news.title}</h3>
                    <span className="news-cta">
                      {t('news.readMore')}
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
            <p className="eyebrow">{t('news.upcoming')}</p>
            <h2 className="section-title section-title--sm">Medical Cannabis Fair 2026.</h2>
            <article className="event-card">
              <div className="event-date">
                <span className="event-month">MAI</span>
                <span className="event-day">21–23</span>
              </div>
              <div className="event-body">
                <span className="event-tag">{t('news.eventTag')}</span>
                <h3>{t('news.eventTitle')}</h3>
                <p dangerouslySetInnerHTML={{ __html: t('news.eventText') }} />
              </div>
            </article>
          </Reveal>
        </aside>
      </div>
    </section>
  );
};

export default News;
