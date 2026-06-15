import Icon from '@/components/ui/icon';

const ARTIST_URL =
  'https://music.yandex.ru/artist/8930219?utm_medium=copy_link&ref_id=16ef6292-fcf6-42bf-8fa7-bf62f37a8d2f';

const Music = () => {
  return (
    <section id="music" className="py-28 bg-secondary/30">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-primary uppercase tracking-luxe text-sm mb-5">Музыка</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
            Слушать онлайн
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mt-6">
            Авторские песни и стихи, положенные на музыку. Включите любой трек
            прямо здесь — или откройте полную дискографию в Яндекс Музыке.
          </p>
        </div>

        <div className="border border-border overflow-hidden bg-background">
          <iframe
            title="Михаил Панарин — Яндекс Музыка"
            frameBorder={0}
            allow="clipboard-write"
            className="w-full h-[450px]"
            src="https://music.yandex.ru/iframe/artist/8930219"
          />
        </div>

        <div className="flex flex-wrap gap-4 mt-12">
          <a
            href={ARTIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors"
          >
            <Icon name="Radio" size={18} /> Открыть в Яндекс Музыке
          </a>
        </div>
      </div>
    </section>
  );
};

export default Music;
