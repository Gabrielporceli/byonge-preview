import { useState, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from './Reveal';

const Contact: FC = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = (e: { preventDefault(): void }) => {
    e.preventDefault();
    if (!formState.nome || !formState.email || !formState.assunto || !formState.mensagem) {
      setStatus({ type: 'error', message: t('contact.errRequired') });
      return;
    }
    setStatus({ type: 'success', message: t('contact.successMsg') });
    setFormState({ nome: '', email: '', assunto: '', mensagem: '' });
  };

  return (
    <section className="section section-contato" id="contato">
      <div className="container two-col">
        <Reveal delayIndex={0}>
          <div>
            <p className="eyebrow">{t('contact.eyebrow')}</p>
            <h2
              className="section-title"
              dangerouslySetInnerHTML={{ __html: t('contact.title') }}
            />
            <p className="lead">{t('contact.lead')}</p>

            <ul className="contact-list">
              <li>
                <span className="ci-label">{t('contact.labelEmail')}</span>
                <a href="mailto:contato@byonge.com">contato@byonge.com</a>
              </li>
              <li>
                <span className="ci-label">{t('contact.labelAddress')}</span>
                <span>Cuiabá, Mato Grosso, Brasil</span>
              </li>
              <li>
                <span className="ci-label">{t('contact.labelBefore')}</span>
                <span>fitocann.ind.br</span>
              </li>
            </ul>

            <div className="socials">
              <a href="https://www.instagram.com/byonge.br/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                </svg>
                Instagram
              </a>
              <a href="https://www.linkedin.com/company/byonge-biotech/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social">
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
              <label htmlFor="nome">{t('contact.formName')}</label>
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
              <label htmlFor="email">{t('contact.formEmail')}</label>
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
              <label htmlFor="assunto">{t('contact.formSubject')}</label>
              <select
                id="assunto"
                name="assunto"
                required
                value={formState.assunto}
                onChange={(e) => setFormState({...formState, assunto: e.target.value})}
              >
                <option value="">{t('contact.formPlaceholder')}</option>
                <option value="rdi">{t('contact.optRdi')}</option>
                <option value="press">{t('contact.optPress')}</option>
                <option value="investment">{t('contact.optInvestment')}</option>
                <option value="other">{t('contact.optOther')}</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="mensagem">{t('contact.formMessage')}</label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={4}
                required
                value={formState.mensagem}
                onChange={(e) => setFormState({...formState, mensagem: e.target.value})}
              ></textarea>
            </div>
            <button className="btn btn-primary" type="submit">{t('contact.submit')}</button>
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
