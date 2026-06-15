import Icon from '@/components/ui/icon';
import { socials } from './socials';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/e5e6fbe1-db72-4349-90ef-68932761ac69/bucket/039fe78a-0719-426d-b805-2edc3306dc0b.png';

const Hero = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="Михаил Панарин" className="w-full h-full object-cover object-[75%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-primary uppercase tracking-luxe text-sm mb-6">
            Музыкант · Поэт
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-foreground mb-8">
            Михаил<br />Панарин
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Я пишу о том, что чувствую сам: о любви, которая лечит, о разлуке,
            что делает нас сильнее, о надежде, что согревает даже в самую
            долгую ночь.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo('music')}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors"
            >
              <Icon name="Play" size={18} />
              Слушать музыку
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-4 text-sm uppercase tracking-widest hover:border-primary hover:text-primary transition-colors"
            >
              Сотрудничество
            </button>
          </div>

          <div className="flex items-center gap-4 mt-12">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Icon name={s.icon} size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollTo('bio')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        aria-label="Вниз"
      >
        <Icon name="ChevronDown" size={28} />
      </button>
    </section>
  );
};

export default Hero;