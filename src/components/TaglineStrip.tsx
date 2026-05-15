import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

const TaglineStrip: FC = () => {
  const { t } = useTranslation();
  return (
    <section className="tagline-strip">
      <div className="container">
        <p className="tagline">{t('tagline')}</p>
      </div>
    </section>
  );
};

export default TaglineStrip;
