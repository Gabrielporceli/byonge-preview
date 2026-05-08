import { FC, useState, FormEvent } from 'react';
import Reveal from './Reveal';

const Contact: FC = () => {
  const [formState, setFormState] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formState.nome || !formState.email || !formState.assunto || !formState.mensagem) {
      setStatus({ type: 'error', message: 'Preencha todos os campos para enviar.' });
      return;
    }
    // Mock success
    setStatus({ type: 'success', message: 'Mensagem registrada — em produção será encaminhada para contato@byonge.com.' });
    setFormState({ nome: '', email: '', assunto: '', mensagem: '' });
  };

  return (
    <section className="section section-contato" id="contato">
      <div className="container two-col">
        <Reveal delayIndex={0}>
          <div>
            <p className="eyebrow">Contato</p>
            <h2 className="section-title">Vamos <span className="accent">conversar</span>.</h2>
            <p className="lead">
              Para parcerias acadêmicas, oportunidades de PD&amp;I, imprensa ou
              informações institucionais, fale com a Byonge.
            </p>

            <ul className="contact-list">
              <li>
                <span className="ci-label">E-mail</span>
                <a href="mailto:contato@byonge.com">contato@byonge.com</a>
              </li>
              <li>
                <span className="ci-label">Endereço</span>
                <span>Cuiabá — Mato Grosso, Brasil</span>
              </li>
              <li>
                <span className="ci-label">Antes</span>
                <span>fitocann.ind.br</span>
              </li>
            </ul>

            <div className="socials">
              <a href="#" aria-label="Instagram" className="social">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                </svg>
                Instagram
              </a>
              <a href="#" aria-label="LinkedIn" className="social">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v8M8 7v.01M12 18v-5a2 2 0 1 1 4 0v5M12 18v-8"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delayIndex={1}>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="nome">Nome</label>
              <input 
                id="nome" 
                name="nome" 
                type="text" 
                required 
                autoComplete="name"
                value={formState.nome}
                onChange={(e) => setFormState({...formState, nome: e.target.value})}
              />
            </div>
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                required 
                autoComplete="email"
                value={formState.email}
                onChange={(e) => setFormState({...formState, email: e.target.value})}
              />
            </div>
            <div className="field">
              <label htmlFor="assunto">Assunto</label>
              <select 
                id="assunto" 
                name="assunto" 
                required
                value={formState.assunto}
                onChange={(e) => setFormState({...formState, assunto: e.target.value})}
              >
                <option value="">Selecione…</option>
                <option>Parceria de PD&amp;I</option>
                <option>Imprensa</option>
                <option>Investimento</option>
                <option>Outro</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea 
                id="mensagem" 
                name="mensagem" 
                rows={4} 
                required
                value={formState.mensagem}
                onChange={(e) => setFormState({...formState, mensagem: e.target.value})}
              ></textarea>
            </div>
            <button className="btn btn-primary" type="submit">Enviar mensagem</button>
            {status.message && (
              <p className={`form-status ${status.type === 'error' ? 'is-error' : ''}`} role="status" aria-live="polite">
                {status.message}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
