import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from './Reveal';

const icons = [
  <svg key="gacp" viewBox="0 0 64 64" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M32 56V28"/><path d="M32 28C24 28 18 22 18 14C26 14 32 20 32 28Z" fill="currentColor" opacity=".15"/><path d="M32 28C24 28 18 22 18 14C26 14 32 20 32 28Z"/>
    <path d="M32 28C40 28 46 22 46 14C38 14 32 20 32 28Z" fill="currentColor" opacity=".15"/><path d="M32 28C40 28 46 22 46 14C38 14 32 20 32 28Z"/>
    <path d="M16 56h32"/>
  </svg>,
  <svg key="form" viewBox="0 0 64 64" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M24 8h16v14l10 22a8 8 0 0 1-7.4 11H21.4A8 8 0 0 1 14 44l10-22V8Z"/>
    <path d="M22 30h20"/>
    <circle cx="28" cy="42" r="2" fill="currentColor"/>
    <circle cx="36" cy="46" r="1.5" fill="currentColor"/>
  </svg>,
  <svg key="anal" viewBox="0 0 64 64" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M14 14h36"/><path d="M22 14v18l-8 18h36L42 32V14"/>
    <circle cx="28" cy="42" r="2" fill="currentColor"/>
    <circle cx="34" cy="46" r="1.5" fill="currentColor"/>
  </svg>,
  <svg key="reg" viewBox="0 0 64 64" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="10" y="10" width="44" height="44" rx="6"/>
    <path d="M20 24h24M20 32h24M20 40h16"/>
    <circle cx="44" cy="40" r="3" fill="currentColor"/>
  </svg>,
];

const capabilityKeys = ['gacp', 'formulations', 'analytics', 'regulatory'] as const;

const Capabilities: FC = () => {
  const { t } = useTranslation();

  return (
    <section className="section section-areas" id="capacidades">
      <div className="container">
        <div className="section-head">
          <Reveal delayIndex={0}>
            <p className="eyebrow">{t('capabilities.eyebrow')}</p>
            <h2
              className="section-title"
              dangerouslySetInnerHTML={{ __html: t('capabilities.title') }}
            />
            <p className="section-sub">{t('capabilities.sub')}</p>
          </Reveal>
        </div>

        <div className="areas-grid">
          {capabilityKeys.map((key, i) => (
            <Reveal key={key} delayIndex={i}>
              <article className="area-card">
                <div className="area-icon" aria-hidden="true">{icons[i]}</div>
                <h3>{t(`capabilities.${key}.title`)}</h3>
                <p>{t(`capabilities.${key}.text`)}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
