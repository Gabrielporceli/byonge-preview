import type { FC } from 'react';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyModal: FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-root">
          {/* Backdrop */}
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <div className="modal-container">
            <motion.div
              className="modal-content"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Header */}
              <header className="modal-header">
                <div>
                  <h2>Política de Privacidade</h2>
                  <p className="modal-subtitle">BYONGE BIOTECH · Última atualização: maio/2026</p>
                </div>
                <button className="modal-close-btn" onClick={onClose} aria-label="Fechar modal">
                  <X size={20} />
                </button>
              </header>

              {/* Scrollable Body */}
              <div className="modal-body">
                <div className="privacy-rich-text">
                  <p>
                    A presente Política de Privacidade e Proteção de Dados Pessoais (“Política”) tem por finalidade demonstrar o compromisso da <strong>BYONGE BIOTECH</strong>, pessoa jurídica de direito privado, inscrita no CNPJ sob nº 52.722.140/0001-77, com sede em Av. Andre Antonio Maggi, nº 487, Sala 1105, Bairro Alvorada, Cuiabá/MT, CEP: 78.048-847 (“BYONGE”, “Empresa”, “nós”), com a proteção da privacidade, segurança e transparência no tratamento dos dados pessoais de clientes, usuários, parceiros, fornecedores, pesquisadores, pacientes, colaboradores, visitantes e demais titulares de dados (“Titular” ou “Você”).
                  </p>
                  <p>
                    Esta Política aplica-se a todas as atividades de tratamento de dados pessoais realizadas pela BYONGE em seus ambientes físicos e digitais, incluindo, mas não se limitando ao website oficial, plataformas digitais, sistemas, aplicativos, formulários, eventos, canais de atendimento e demais serviços disponibilizados pela Empresa (“Nossos Ambientes”).
                  </p>
                  <p>
                    A BYONGE realiza o tratamento de dados pessoais em conformidade com:
                  </p>
                  <ul>
                    <li>A Lei Federal nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais (“LGPD”);</li>
                    <li>A Lei Federal nº 12.965/2014 — Marco Civil da Internet;</li>
                    <li>Regulamentações da Autoridade Nacional de Proteção de Dados (“ANPD”);</li>
                    <li>Demais legislações aplicáveis relacionadas à privacidade, proteção de dados, propriedade intelectual e segurança da informação.</li>
                  </ul>
                  <p>
                    Ao acessar nossos ambientes, utilizar nossos serviços, preencher formulários, entrar em contato conosco ou fornecer seus dados pessoais, Você declara ciência desta Política e concorda com seus termos, quando aplicável.
                  </p>

                  <section>
                    <h3>1. DEFINIÇÕES</h3>
                    <p>Para fins desta Política, aplicam-se os conceitos previstos na LGPD, especialmente:</p>
                    <ul>
                      <li><strong>Dados Pessoais:</strong> informações relacionadas à pessoa natural identificada ou identificável.</li>
                      <li><strong>Dados Pessoais Sensíveis:</strong> dados sobre origem racial ou étnica, convicção religiosa, opinião política, filiação sindical, dados referentes à saúde, vida sexual, dado genético ou biométrico.</li>
                      <li><strong>Titular:</strong> pessoa natural a quem se referem os dados pessoais tratados.</li>
                      <li><strong>Tratamento:</strong> toda operação realizada com dados pessoais, incluindo coleta, utilização, armazenamento, compartilhamento, eliminação, processamento e avaliação.</li>
                      <li><strong>Controlador:</strong> pessoa jurídica responsável pelas decisões referentes ao tratamento de dados pessoais.</li>
                      <li><strong>Operador:</strong> pessoa física ou jurídica que realiza o tratamento de dados em nome do Controlador.</li>
                      <li><strong>ANPD:</strong> Autoridade Nacional de Proteção de Dados.</li>
                      <li><strong>Cookies:</strong> pequenos arquivos armazenados em dispositivos do usuário para melhorar a experiência de navegação.</li>
                    </ul>
                  </section>

                  <section>
                    <h3>2. QUAIS DADOS PODEMOS COLETAR</h3>
                    <p>A BYONGE poderá coletar dados pessoais fornecidos diretamente por Você ou coletados automaticamente durante a utilização de nossos ambientes.</p>
                    
                    <h4>2.1 Dados fornecidos diretamente pelo Titular</h4>
                    <p>Podemos coletar:</p>
                    <ul>
                      <li>Nome completo;</li>
                      <li>CPF e/ou RG;</li>
                      <li>Data de nascimento;</li>
                      <li>Endereço residencial ou comercial;</li>
                      <li>Telefone;</li>
                      <li>E-mail;</li>
                      <li>Cargo e empresa;</li>
                      <li>Dados profissionais;</li>
                      <li>Informações bancárias e financeiras quando necessárias;</li>
                      <li>Informações relacionadas a contratos;</li>
                      <li>Informações enviadas em formulários de contato;</li>
                      <li>Dados fornecidos em processos seletivos;</li>
                      <li>Dados necessários para participação em pesquisas, eventos ou projetos científicos;</li>
                      <li>Outros dados necessários à prestação dos serviços.</li>
                    </ul>

                    <h4>2.2 Dados sensíveis</h4>
                    <p>Em razão da natureza das atividades desenvolvidas pela BYONGE na área de biotecnologia, pesquisa, inovação e saúde, poderá haver tratamento de dados pessoais sensíveis, especialmente:</p>
                    <ul>
                      <li>dados relacionados à saúde;</li>
                      <li>dados genéticos;</li>
                      <li>dados biométricos;</li>
                      <li>informações clínicas;</li>
                      <li>dados laboratoriais;</li>
                      <li>histórico médico, quando necessário e autorizado.</li>
                    </ul>
                    <p>
                      O tratamento desses dados ocorrerá em estrita observância aos artigos 11 e seguintes da LGPD, mediante base legal adequada, adoção de medidas de segurança reforçadas e observância do sigilo profissional e científico aplicável.
                    </p>

                    <h4>2.3 Dados coletados automaticamente</h4>
                    <p>Também poderão ser coletados automaticamente:</p>
                    <ul>
                      <li>endereço IP;</li>
                      <li>geolocalização aproximada;</li>
                      <li>tipo de navegador e dispositivo;</li>
                      <li>logs de acesso;</li>
                      <li>páginas visitadas;</li>
                      <li>data e horário de acesso;</li>
                      <li>identificadores de sessão;</li>
                      <li>cookies e tecnologias semelhantes;</li>
                      <li>informações sobre interação com nossos ambientes digitais.</li>
                    </ul>
                  </section>

                  <section>
                    <h3>3. FINALIDADES DO TRATAMENTO DOS DADOS</h3>
                    <p>Os dados pessoais poderão ser utilizados para as seguintes finalidades:</p>
                    <ul>
                      <li>identificação e autenticação do usuário;</li>
                      <li>prestação de serviços e execução contratual;</li>
                      <li>atendimento de solicitações e suporte;</li>
                      <li>gestão de relacionamento com clientes, parceiros e fornecedores;</li>
                      <li>envio de comunicações institucionais, científicas, comerciais e informativas;</li>
                      <li>participação em eventos, pesquisas e projetos científicos;</li>
                      <li>recrutamento e seleção;</li>
                      <li>cumprimento de obrigações legais, regulatórias e contratuais;</li>
                      <li>exercício regular de direitos em processos judiciais, administrativos ou arbitrais;</li>
                      <li>prevenção à fraude e incidentes de segurança;</li>
                      <li>proteção do crédito;</li>
                      <li>melhoria dos serviços, plataformas e experiência do usuário;</li>
                      <li>análises estatísticas e métricas internas;</li>
                      <li>cumprimento de normas sanitárias, regulatórias e científicas;</li>
                      <li>pesquisa, inovação e desenvolvimento tecnológico;</li>
                      <li>proteção da vida e tutela da saúde, quando aplicável.</li>
                    </ul>
                  </section>

                  <section>
                    <h3>4. BASES LEGAIS PARA O TRATAMENTO</h3>
                    <p>A BYONGE realiza o tratamento de dados pessoais com fundamento nas bases legais previstas na LGPD, incluindo:</p>
                    <ul>
                      <li>consentimento do titular;</li>
                      <li>cumprimento de obrigação legal ou regulatória;</li>
                      <li>execução de contrato ou procedimentos preliminares;</li>
                      <li>exercício regular de direitos;</li>
                      <li>proteção da vida ou da incolumidade física;</li>
                      <li>tutela da saúde;</li>
                      <li>legítimo interesse;</li>
                      <li>proteção do crédito;</li>
                      <li>realização de estudos por órgão de pesquisa, quando aplicável.</li>
                    </ul>
                  </section>

                  <section>
                    <h3>5. COMPARTILHAMENTO DE DADOS</h3>
                    <p>A BYONGE poderá compartilhar dados pessoais com:</p>
                    <ul>
                      <li>prestadores de serviços e fornecedores;</li>
                      <li>parceiros comerciais e científicos;</li>
                      <li>laboratórios, instituições de pesquisa e universidades;</li>
                      <li>plataformas tecnológicas e provedores de hospedagem;</li>
                      <li>empresas de tecnologia e segurança da informação;</li>
                      <li>autoridades administrativas, regulatórias ou judiciais;</li>
                      <li>escritórios jurídicos, contadores e auditores;</li>
                      <li>operadores contratados para execução das atividades da Empresa.</li>
                    </ul>
                    <p>
                      O compartilhamento ocorrerá somente quando necessário, observando os princípios da necessidade, adequação e segurança previstos na LGPD. A BYONGE não comercializa dados pessoais.
                    </p>
                  </section>

                  <section>
                    <h3>6. TRANSFERÊNCIA INTERNACIONAL DE DADOS</h3>
                    <p>
                      Em razão da utilização de serviços tecnológicos, plataformas em nuvem, sistemas internacionais e parcerias científicas, os dados pessoais poderão ser transferidos e armazenados em servidores localizados no exterior.
                    </p>
                    <p>
                      Nesses casos, a BYONGE adotará medidas técnicas, administrativas e contratuais adequadas para assegurar a proteção dos dados pessoais, observando os requisitos dos artigos 33 a 36 da LGPD.
                    </p>
                  </section>

                  <section>
                    <h3>7. COOKIES E TECNOLOGIAS DE MONITORAMENTO</h3>
                    <p>A BYONGE poderá utilizar cookies e tecnologias semelhantes para:</p>
                    <ul>
                      <li>funcionamento adequado do site;</li>
                      <li>autenticação de usuários;</li>
                      <li>personalização da experiência;</li>
                      <li>análise de desempenho e navegação;</li>
                      <li>métricas estatísticas;</li>
                      <li>segurança da informação;</li>
                      <li>campanhas institucionais e marketing.</li>
                    </ul>
                    <p>
                      Você poderá gerenciar as preferências de cookies diretamente em seu navegador. O bloqueio de determinados cookies poderá impactar o funcionamento de algumas funcionalidades do site.
                    </p>
                  </section>

                  <section>
                    <h3>8. SEGURANÇA DA INFORMAÇÃO</h3>
                    <p>A BYONGE adota medidas técnicas, administrativas e organizacionais adequadas para proteger os dados pessoais contra:</p>
                    <ul>
                      <li>acessos não autorizados;</li>
                      <li>perda;</li>
                      <li>destruição;</li>
                      <li>alteração;</li>
                      <li>vazamento;</li>
                      <li>comunicação indevida;</li>
                      <li>qualquer forma de tratamento inadequado ou ilícito.</li>
                    </ul>
                    <p>Entre as medidas adotadas, poderão incluir-se:</p>
                    <ul>
                      <li>controle de acesso;</li>
                      <li>criptografia;</li>
                      <li>autenticação de usuários;</li>
                      <li>monitoramento de sistemas;</li>
                      <li>backups;</li>
                      <li>políticas internas de segurança;</li>
                      <li>treinamento de colaboradores;</li>
                      <li>gestão de incidentes.</li>
                    </ul>
                    <p>
                      Apesar dos esforços empregados, nenhum sistema é completamente imune a riscos de segurança, motivo pelo qual não é possível garantir segurança absoluta.
                    </p>
                  </section>

                  <section>
                    <h3>9. RETENÇÃO E ELIMINAÇÃO DOS DADOS</h3>
                    <p>Os dados pessoais serão armazenados somente pelo tempo necessário para cumprir as finalidades descritas nesta Política, observando:</p>
                    <ul>
                      <li>obrigações legais e regulatórias;</li>
                      <li>prazos prescricionais;</li>
                      <li>exercício regular de direitos;</li>
                      <li>retenção obrigatória prevista em lei;</li>
                      <li>legítimo interesse da Empresa.</li>
                    </ul>
                    <p>
                      Encerrado o período de retenção, os dados poderão ser eliminados, anonimizados ou mantidos de forma segura, conforme permitido pela legislação aplicável.
                    </p>
                  </section>

                  <section>
                    <h3>10. DIREITOS DOS TITULARES</h3>
                    <p>Nos termos da LGPD, o Titular poderá exercer os seguintes direitos:</p>
                    <ul>
                      <li>confirmação da existência de tratamento;</li>
                      <li>acesso aos dados pessoais;</li>
                      <li>correção de dados incompletos, inexatos ou desatualizados;</li>
                      <li>anonimização, bloqueio ou eliminação;</li>
                      <li>portabilidade dos dados;</li>
                      <li>revogação do consentimento;</li>
                      <li>oposição ao tratamento;</li>
                      <li>informação sobre compartilhamento;</li>
                      <li>revisão de decisões automatizadas, quando aplicável;</li>
                      <li>solicitação de eliminação dos dados tratados com consentimento.</li>
                    </ul>
                    <p>
                      As solicitações poderão ser realizadas através do canal oficial informado nesta Política. A BYONGE poderá solicitar informações adicionais para confirmação da identidade do Titular, visando garantir a segurança dos dados.
                    </p>
                  </section>

                  <section>
                    <h3>11. CANAL DE CONTATO E ENCARREGADO DE DADOS (DPO)</h3>
                    <p>Para exercer seus direitos ou esclarecer dúvidas relacionadas ao tratamento de dados pessoais, o Titular poderá entrar em contato com a BYONGE através dos seguintes canais:</p>
                    <ul>
                      <li><strong>Encarregado(a) pelo Tratamento de Dados Pessoais (DPO):</strong> Maria Martha M. Regis</li>
                      <li><strong>E-mail:</strong> <a href="mailto:contato@byonge.com">contato@byonge.com</a></li>
                      <li><strong>Telefone:</strong> +55 65 9969-7209</li>
                    </ul>
                  </section>

                  <section>
                    <h3>12. LINKS EXTERNOS</h3>
                    <p>
                      Nossos ambientes poderão conter links para websites, plataformas ou serviços de terceiros. A BYONGE não se responsabiliza pelas práticas de privacidade, políticas, conteúdos ou medidas de segurança adotadas por terceiros, recomendando-se a leitura das respectivas políticas antes do fornecimento de quaisquer dados pessoais.
                    </p>
                  </section>

                  <section>
                    <h3>13. PROPRIEDADE INTELECTUAL</h3>
                    <p>
                      Todo o conteúdo disponibilizado nos ambientes da BYONGE, incluindo textos, imagens, marcas, logotipos, vídeos, softwares, layouts, documentos, pesquisas e demais materiais, é protegido pela legislação de propriedade intelectual e pertence à BYONGE ou a terceiros licenciantes.
                    </p>
                    <p>
                      É proibida a reprodução, distribuição, modificação, divulgação ou utilização sem autorização prévia e expressa da Empresa.
                    </p>
                  </section>

                  <section>
                    <h3>14. RESPONSABILIDADES DO USUÁRIO</h3>
                    <p>O usuário compromete-se a:</p>
                    <ul>
                      <li>fornecer informações verdadeiras, atualizadas e legítimas;</li>
                      <li>utilizar os ambientes da BYONGE de forma ética e legal;</li>
                      <li>não praticar atos ilícitos, fraudulentos ou que comprometam a segurança dos sistemas;</li>
                      <li>respeitar direitos de propriedade intelectual e legislação aplicável.</li>
                    </ul>
                    <p>
                      O usuário será responsável pelos danos decorrentes da utilização indevida dos ambientes e serviços da Empresa.
                    </p>
                  </section>

                  <section>
                    <h3>15. ALTERAÇÕES DESTA POLÍTICA</h3>
                    <p>
                      A BYONGE poderá alterar esta Política a qualquer momento, especialmente para adequação legislativa, regulatória, tecnológica ou operacional.
                    </p>
                    <p>
                      A versão atualizada estará sempre disponível nos canais oficiais da Empresa, contendo a respectiva data de atualização. Recomenda-se a leitura periódica desta Política.
                    </p>
                  </section>

                  <section>
                    <h3>16. LEGISLAÇÃO E FORO</h3>
                    <p>Esta Política será regida e interpretada de acordo com a legislação brasileira.</p>
                    <p>
                      Fica eleito o foro da Comarca de Cuiabá-MT, com renúncia expressa a qualquer outro, por mais privilegiado que seja, para dirimir eventuais controvérsias relacionadas a esta Política.
                    </p>
                  </section>

                  <section>
                    <h3>17. DISPOSIÇÕES FINAIS</h3>
                    <p>
                      A BYONGE reafirma seu compromisso com a privacidade, proteção de dados, ética, inovação e conformidade regulatória, adotando práticas contínuas de governança e segurança da informação para proteção dos direitos fundamentais de liberdade e privacidade dos titulares de dados pessoais.
                    </p>
                    <p>
                      Caso qualquer disposição desta Política seja considerada inválida ou inexequível, as demais disposições permanecerão em pleno vigor e efeito.
                    </p>
                  </section>
                </div>
              </div>

              {/* Footer */}
              <footer className="modal-footer">
                <button className="btn btn-primary" onClick={onClose}>
                  Fechar
                </button>
              </footer>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PrivacyModal;
