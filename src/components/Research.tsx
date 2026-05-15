import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from './Reveal';

const eixoKeys = ['gacp', 'extraction', 'formulations', 'analyses'] as const;
const eixoTags = ['01', '02', '03', '04'];

const Research: FC = () => {
  const { t } = useTranslation();

  return (
    <section className="section section-pd" id="pd">
      <div className="pd-band">
        <div className="container pd-band-inner">
          <Reveal delayIndex={0}>
            <p className="eyebrow eyebrow--light">{t('research.eyebrow')}</p>
            <h2
              className="pd-title"
              dangerouslySetInnerHTML={{ __html: t('research.title') }}
            />
            <p
              className="pd-lede"
              dangerouslySetInnerHTML={{ __html: t('research.lede') }}
            />
            <a
              href="https://www.ceifmt.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="ceifmt-link"
            >
              {t('research.visitSite')} →
            </a>
          </Reveal>
        </div>
      </div>

      <div className="container pd-grid">
        <Reveal delayIndex={0}>
          <div className="pd-text">
            <p
              className="lead"
              dangerouslySetInnerHTML={{ __html: t('research.lead') }}
            />

            <ul className="pd-stats">
              <li>
                <span className="stat-num">3</span>
                <span
                  className="stat-label"
                  dangerouslySetInnerHTML={{ __html: t('research.statInstitutions') }}
                />
              </li>
              <li>
                <span className="stat-num">4</span>
                <span
                  className="stat-label"
                  dangerouslySetInnerHTML={{ __html: t('research.statAxes') }}
                />
              </li>
              <li>
                <span className="stat-num">PD&amp;I</span>
                <span
                  className="stat-label"
                  dangerouslySetInnerHTML={{ __html: t('research.statLegal') }}
                />
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal delayIndex={1}>
          <aside className="pd-projects">
            <h3>{t('research.axesTitle')}</h3>
            <ol className="proj-list">
              {eixoKeys.map((key, i) => (
                <li key={key}>
                  <span className="proj-tag">{eixoTags[i]}</span>
                  <div>
                    <h4>{t(`research.${key}.title`)}</h4>
                    <p>{t(`research.${key}.text`)}</p>
                  </div>
                </li>
              ))}
            </ol>
          </aside>
        </Reveal>
      </div>
    </section>
  );
};

export default Research;
