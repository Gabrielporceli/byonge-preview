import { useState, useEffect, type FC } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=2000&q=80',
    alt: 'Cultivo controlado de plantas medicinais em estufa'
  },
  {
    url: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=2000&q=80',
    alt: 'Pesquisa e extração verde em laboratório'
  },
  {
    url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=2000&q=80',
    alt: 'Pesquisadora analisando amostras químicas'
  },
  {
    url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=2000&q=80',
    alt: 'Folhas de planta medicinal em close-up'
  }
];

const Hero: FC = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="hero" id="home">
      <div className="carousel" id="carousel" aria-label="Atividades da Byonge">
        <ul className="carousel-track" id="carouselTrack">
          {slides.map((slide, i) => (
            <li key={i} className={`slide ${i === current ? 'is-active' : ''}`}>
              <img src={slide.url} alt={slide.alt} />
            </li>
          ))}
        </ul>

        <div className="hero-card">
          <p className="hero-eyebrow">{t('hero.eyebrow')}</p>
          <h1
            className="hero-title"
            dangerouslySetInnerHTML={{ __html: t('hero.title') }}
          />
          <p
            className="hero-lede"
            dangerouslySetInnerHTML={{ __html: t('hero.lede') }}
          />
          <div className="hero-ctas">
            <a href="#capacidades" className="btn btn-primary">{t('hero.cta1')}</a>
            <a href="#sobre" className="btn btn-ghost">{t('hero.cta2')}</a>
          </div>
        </div>

        <button className="carousel-arrow carousel-arrow--prev" onClick={prev} aria-label="Slide anterior">
          <ChevronLeft size={22} />
        </button>
        <button className="carousel-arrow carousel-arrow--next" onClick={next} aria-label="Próximo slide">
          <ChevronRight size={22} />
        </button>

        <div className="carousel-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={i === current ? 'is-active' : ''}
              onClick={() => setCurrent(i)}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
