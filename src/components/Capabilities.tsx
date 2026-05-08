import { FC } from 'react';
import Reveal from './Reveal';

const capabilities = [
  {
    icon: (
      <svg viewBox="0 0 64 64" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M32 56V28"/><path d="M32 28C24 28 18 22 18 14C26 14 32 20 32 28Z" fill="currentColor" opacity=".15"/><path d="M32 28C24 28 18 22 18 14C26 14 32 20 32 28Z"/>
        <path d="M32 28C40 28 46 22 46 14C38 14 32 20 32 28Z" fill="currentColor" opacity=".15"/><path d="M32 28C40 28 46 22 46 14C38 14 32 20 32 28Z"/>
        <path d="M16 56h32"/>
      </svg>
    ),
    title: 'GACP & Cultivo',
    text: 'Boas práticas agrícolas e de coleta (GACP), com supervisão agronômica rigorosa para produção de matéria-prima de grau farmacêutico.'
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 8h16v14l10 22a8 8 0 0 1-7.4 11H21.4A8 8 0 0 1 14 44l10-22V8Z"/>
        <path d="M22 30h20"/>
        <circle cx="28" cy="42" r="2" fill="currentColor"/>
        <circle cx="36" cy="46" r="1.5" fill="currentColor"/>
      </svg>
    ),
    title: 'Formulações & Processos',
    text: 'Desenvolvimento de formulações e processos de extração verde para canabinoides e outros fitofármacos, com foco em segurança e consistência.'
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 14h36"/><path d="M22 14v18l-8 18h36L42 32V14"/>
        <circle cx="28" cy="42" r="2" fill="currentColor"/>
        <circle cx="34" cy="46" r="1.5" fill="currentColor"/>
      </svg>
    ),
    title: 'Serviços analíticos',
    text: 'Caracterização, padronização e controle de qualidade de extratos vegetais, com rastreabilidade total da cadeia produtiva.'
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="10" y="10" width="44" height="44" rx="6"/>
        <path d="M20 24h24M20 32h24M20 40h16"/>
        <circle cx="44" cy="40" r="3" fill="currentColor"/>
      </svg>
    ),
    title: 'Suporte regulatório',
    text: 'Aconselhamento sobre marcos regulatórios, dossiês técnicos e conformidade para ingredientes farmacêuticos ativos de origem vegetal.'
  }
];

const Capabilities: FC = () => {
  return (
    <section className="section section-areas" id="capacidades">
      <div className="container">
        <div className="section-head">
          <Reveal delayIndex={0}>
            <p className="eyebrow">Capacidades end-to-end</p>
            <h2 className="section-title">Da bancada à <span className="accent">aplicação clínica</span>.</h2>
            <p className="section-sub">
              Integramos toda a cadeia em farmacognosia, com supervisão agrícola
              rigorosa e padrões internacionais de qualidade.
            </p>
          </Reveal>
        </div>

        <div className="areas-grid">
          {capabilities.map((item, i) => (
            <Reveal key={i} delayIndex={i}>
              <article className="area-card">
                <div className="area-icon" aria-hidden="true">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
