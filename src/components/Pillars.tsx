import React from 'react';
import Reveal from './Reveal';

const pillars = [
  {
    num: '01',
    title: 'Rastreabilidade total',
    text: 'Cadeia produtiva integralmente documentada, do material vegetal ao princípio ativo final.'
  },
  {
    num: '02',
    title: 'Padrão GACP',
    text: 'Boas Práticas Agrícolas e de Coleta para garantir matéria-prima de grau farmacêutico.'
  },
  {
    num: '03',
    title: 'Segurança & consistência',
    text: 'Padronização rigorosa para reprodutibilidade clínica e mínimos efeitos adversos.'
  },
  {
    num: '04',
    title: 'Supervisão agrícola',
    text: 'Equipe agronômica dedicada à seleção de cultivares, fenotipagem e controle de produção.'
  }
];

const Pillars: React.FC = () => {
  return (
    <section className="section pillars-section">
      <div className="container">
        <div className="pillars-grid">
          {pillars.map((pillar, i) => (
            <Reveal key={i} delayIndex={i}>
              <div className="pillar">
                <span className="pillar-num">{pillar.num}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
