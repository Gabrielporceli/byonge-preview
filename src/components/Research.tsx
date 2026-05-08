import type { FC } from 'react';
import Reveal from './Reveal';

const researchEixos = [
  { tag: '01', title: 'GACP de Cannabis sativa L.', text: 'Boas práticas agrícolas, seleção de cultivares e padronização agronômica.' },
  { tag: '02', title: 'Extração verde de canabinoides', text: 'Processos sustentáveis com alta pureza e rastreabilidade.' },
  { tag: '03', title: 'Formulações e derivados', text: 'Design molecular para eficácia clínica e mínimos efeitos adversos.' },
  { tag: '04', title: 'Análises farmacognósticas', text: 'Padronização e controle de qualidade de extratos vegetais.' }
];

const Research: FC = () => {
  return (
    <section className="section section-pd" id="pd">
      <div className="pd-band">
        <div className="container pd-band-inner">
          <Reveal delayIndex={0}>
            <p className="eyebrow eyebrow--light">Pesquisa & Desenvolvimento</p>
            <h2 className="pd-title">
              CEIFMT — <span className="accent-light">Centro de Estudos e Farmacognosia</span> do Mato Grosso.
            </h2>
            <p className="pd-lede">
              Um laboratório multiusuário em construção, fruto de uma <strong>Parceria
              Público-Privada</strong> entre a <strong>Byonge</strong> (à época, Fitocann),
              a <strong>UFMT — Universidade Federal de Mato Grosso</strong> e a
              <strong>Fundação Uniselva</strong>.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="container pd-grid">
        <Reveal delayIndex={0}>
          <div className="pd-text">
            <p className="lead">
              O CEIFMT será dedicado à pesquisa em <em>Cannabis sativa L.</em> e outras
              plantas medicinais, contemplando GACP, formulações, serviços analíticos
              e suporte regulatório — sob o marco regulatório brasileiro e em
              conformidade com requisitos de biossegurança.
            </p>

            <ul className="pd-stats">
              <li>
                <span className="stat-num">3</span>
                <span className="stat-label">instituições<br/>parceiras</span>
              </li>
              <li>
                <span className="stat-num">4</span>
                <span className="stat-label">eixos de<br/>pesquisa</span>
              </li>
              <li>
                <span className="stat-num">PD&amp;I</span>
                <span className="stat-label">marco legal<br/>de CT&amp;I</span>
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal delayIndex={1}>
          <aside className="pd-projects">
            <h3>Eixos de pesquisa</h3>
            <ol className="proj-list">
              {researchEixos.map((eixo, i) => (
                <li key={i}>
                  <span className="proj-tag">{eixo.tag}</span>
                  <div>
                    <h4>{eixo.title}</h4>
                    <p>{eixo.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </aside>
        </Reveal>
      </div>
    </section>
  );
};

export default Research;
