import { useState, useLayoutEffect, useRef, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from './Reveal';

const allMembers = ['scientific', 'martha', 'nilza', 'anapaula', 'leonardo', 'vinicius', 'renan'] as const;
type MemberKey = typeof allMembers[number];

const TeamMemberCard: FC<{ memberKey: MemberKey; delayIndex: number }> = ({ memberKey, delayIndex }) => {
  const { t } = useTranslation();
  const bioRef = useRef<HTMLParagraphElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);

  const bio = t(`team.${memberKey}.bio`);
  const photoUrl = t(`team.${memberKey}.photo`);

  useLayoutEffect(() => {
    setIsExpanded(false);
    if (bioRef.current) {
      setHasOverflow(bioRef.current.scrollHeight > 120);
    }
  }, [bio]);

  return (
    <Reveal delayIndex={delayIndex}>
      <article className="team-card team-card--featured">
        <div className="team-photo">
          {photoUrl ? (
            <img src={photoUrl} alt={t(`team.${memberKey}.name`)} />
          ) : (
            <div className="team-photo-placeholder">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="placeholder-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>
          )}
        </div>
        <h3>{t(`team.${memberKey}.name`)}</h3>
        <p className="role">{t(`team.${memberKey}.role`)}</p>

        <div className={`bio-wrapper${(isExpanded || !hasOverflow) ? '' : ' bio-wrapper--clamped'}`}>
          <p ref={bioRef} className={`bio${(isExpanded || !hasOverflow) ? '' : ' bio--clamped'}`}>
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
      <img src="/g-byonge.png" alt="" className="team-watermark" aria-hidden="true" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
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
