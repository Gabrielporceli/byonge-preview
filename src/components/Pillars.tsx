import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from './Reveal';

const pillarKeys = [
  { key: 'traceability', num: '01' },
  { key: 'gacp', num: '02' },
  { key: 'safety', num: '03' },
  { key: 'supervision', num: '04' },
] as const;

const Pillars: FC = () => {
  const { t } = useTranslation();

  return (
    <section className="section pillars-section">
      <div className="container">
        <div className="pillars-grid">
          {pillarKeys.map(({ key, num }, i) => (
            <Reveal key={key} delayIndex={i}>
              <div className="pillar">
                <span className="pillar-num">{num}</span>
                <h3>{t(`pillars.${key}.title`)}</h3>
                <p>{t(`pillars.${key}.text`)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
