import { useState, useLayoutEffect, useRef, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from './Reveal';

const allMembers = ['scientific', 'martha', 'leonardo', 'vinicius'] as const;
type MemberKey = typeof allMembers[number];

const TeamMemberCard: FC<{ memberKey: MemberKey; delayIndex: number }> = ({ memberKey, delayIndex }) => {
  const { t } = useTranslation();
  const bioRef = useRef<HTMLParagraphElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);

  const bio = t(`team.${memberKey}.bio`);

  useLayoutEffect(() => {
    setIsExpanded(false);
  }, [bio]);

  useLayoutEffect(() => {
    if (bioRef.current && !isExpanded) {
      setHasOverflow(bioRef.current.scrollHeight > bioRef.current.clientHeight);
    }
  }, [bio, isExpanded]);

  return (
    <Reveal delayIndex={delayIndex}>
      <article className="team-card team-card--featured">
        <div className="team-photo">
          <img src={t(`team.${memberKey}.photo`)} alt={t(`team.${memberKey}.name`)} />
        </div>
        <h3>{t(`team.${memberKey}.name`)}</h3>
        <p className="role">{t(`team.${memberKey}.role`)}</p>

        <div className={`bio-wrapper${isExpanded ? '' : ' bio-wrapper--clamped'}`}>
          <p ref={bioRef} className={`bio${isExpanded ? '' : ' bio--clamped'}`}>
            {bio}
          </p>
        </div>

        <div className="card-bottom">
          {(hasOverflow || isExpanded) && (
            <button className="read-more-btn" onClick={() => setIsExpanded(v => !v)}>
              {isExpanded ? t('team.readLess') : t('team.readMore')}
            </button>
          )}
          <a
            href={t(`team.${memberKey}.lattes`)}
            target="_blank"
            rel="noopener noreferrer"
            className="lattes-link"
          >
            {t(`team.${memberKey}.lattesLabel`)} →
          </a>
        </div>
      </article>
    </Reveal>
  );
};

const Team: FC = () => {
  const { t } = useTranslation();

  return (
    <section className="section section-team" id="equipe">
      <div className="container">
        <div className="section-head">
          <Reveal delayIndex={0}>
            <p className="eyebrow">{t('team.eyebrow')}</p>
            <h2
              className="section-title"
              dangerouslySetInnerHTML={{ __html: t('team.title') }}
            />
            <p className="section-sub">{t('team.sub')}</p>
          </Reveal>
        </div>

        <div className="team-grid">
          {allMembers.map((key, i) => (
            <TeamMemberCard key={key} memberKey={key} delayIndex={i + 1} />
          ))}
        </div>

        <Reveal delayIndex={5}>
          <p className="team-note">
            <span className="dot"></span> {t('team.note')}
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Team;
