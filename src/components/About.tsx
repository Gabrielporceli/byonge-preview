import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from './Reveal';

const About: FC = () => {
  const { t } = useTranslation();
  return (
    <section className="section section-sobre" id="sobre">
      <div className="container two-col">
        <Reveal delayIndex={0}>
          <p className="eyebrow">{t('about.eyebrow')}</p>
          <h2
            className="section-title"
            dangerouslySetInnerHTML={{ __html: t('about.title') }}
          />
        </Reveal>
        <Reveal delayIndex={1}>
          <p
            className="lead"
            dangerouslySetInnerHTML={{ __html: t('about.lead') }}
          />
          <p dangerouslySetInnerHTML={{ __html: t('about.p2') }} />
        </Reveal>
      </div>
    </section>
  );
};

export default About;
