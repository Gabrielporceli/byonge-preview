import type { FC } from 'react';
import Reveal from './Reveal';

const About: FC = () => {
  return (
    <section className="section section-sobre" id="sobre">
      <div className="container two-col">
        <Reveal delayIndex={0}>
          <p className="eyebrow">Sobre a Byonge</p>
          <h2 className="section-title">
            <em className="strike">Fitocann</em> agora é <span className="accent">Byonge</span>:
            uma evolução de marca, a mesma ciência.
          </h2>
        </Reveal>
        <Reveal delayIndex={1}>
          <p className="lead">
            A <strong>Byonge</strong> é uma empresa de <strong>pesquisa e
            desenvolvimento</strong> dedicada à <strong>farmacognosia aplicada</strong>.
            Apoiamos parceiros farmacêuticos e de biotecnologia no
            desenvolvimento de terapêuticos derivados de plantas medicinais —
            com expertise particular em <strong>canabinoides</strong> e em
            compostos com potencial terapêutico e mínimos efeitos adversos.
          </p>
          <p>
            Nossa atuação é orientada por ciência, transparência regulatória e
            compromisso com a <strong>rastreabilidade total</strong> da cadeia
            produtiva — do cultivo ao princípio ativo, sob padrões de grau
            farmacêutico.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
