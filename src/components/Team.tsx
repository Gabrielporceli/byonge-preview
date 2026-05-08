import { FC } from 'react';
import Reveal from './Reveal';

const teamMembers = [
  { role: 'Diretoria Científica', bio: 'Liderança técnica em pesquisa e desenvolvimento de fitofármacos.' },
  { role: 'Cultivo & GACP', bio: 'Coordenação dos protocolos de cultivo controlado e fenotipagem.' },
  { role: 'Química & Analytics', bio: 'Métodos verdes de extração e caracterização de canabinoides.' },
  { role: 'Regulatório & Parcerias', bio: 'Conformidade regulatória, propriedade intelectual e relações institucionais.' }
];

const Team: FC = () => {
  return (
    <section className="section section-team" id="equipe">
      <div className="container">
        <div className="section-head">
          <Reveal delayIndex={0}>
            <p className="eyebrow">Equipe</p>
            <h2 className="section-title">As pessoas <span className="accent">por trás da ciência</span>.</h2>
            <p className="section-sub">
              Nossa equipe reúne pesquisadores, profissionais da indústria farmacêutica e
              parceiros acadêmicos. Esta seção será atualizada com fotos e biografias
              completas.
            </p>
          </Reveal>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, i) => (
            <Reveal key={i} delayIndex={i}>
              <article className="team-card">
                <div className="avatar"><span>BY</span></div>
                <h3>Em breve</h3>
                <p className="role">{member.role}</p>
                <p className="bio">{member.bio}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delayIndex={4}>
          <p className="team-note">
            <span className="dot"></span> Conteúdo em construção · biografias completas no segundo semestre de 2026
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Team;
