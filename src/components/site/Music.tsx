import Icon from '@/components/ui/icon';

const tracks = [
  { title: 'Ноктюрн ре минор', album: 'Тишина и форма', duration: '6:42' },
  { title: 'Прелюдия № 3', album: 'Тишина и форма', duration: '4:18' },
  { title: 'Соната для рояля', album: 'Контрапункт', duration: '11:05' },
  { title: 'Этюд «Движение»', album: 'Контрапункт', duration: '5:33' },
  { title: 'Колыбельная', album: 'После заката', duration: '3:57' },
];

const Music = () => {
  return (
    <section id="music" className="py-28 bg-secondary/30">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-primary uppercase tracking-luxe text-sm mb-5">Музыка</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
            Избранные записи
          </h2>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {tracks.map((t, i) => (
            <div
              key={t.title}
              className="group flex items-center gap-6 py-6 hover:bg-secondary/40 transition-colors px-4"
            >
              <span className="font-display text-2xl text-muted-foreground w-10">
                {String(i + 1).padStart(2, '0')}
              </span>
              <button className="flex-shrink-0 w-11 h-11 rounded-full border border-border flex items-center justify-center text-foreground group-hover:border-primary group-hover:text-primary transition-colors">
                <Icon name="Play" size={16} />
              </button>
              <div className="flex-1 min-w-0">
                <div className="text-foreground text-lg truncate">{t.title}</div>
                <div className="text-sm text-muted-foreground truncate">{t.album}</div>
              </div>
              <span className="text-sm text-muted-foreground tabular-nums">{t.duration}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground hover:text-primary transition-colors"
          >
            <Icon name="Music2" size={18} /> Apple Music
          </a>
          <span className="text-border">·</span>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground hover:text-primary transition-colors"
          >
            <Icon name="Radio" size={18} /> Яндекс Музыка
          </a>
          <span className="text-border">·</span>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground hover:text-primary transition-colors"
          >
            <Icon name="Youtube" size={18} /> YouTube
          </a>
        </div>
      </div>
    </section>
  );
};

export default Music;
