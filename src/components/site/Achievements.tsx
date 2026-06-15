import Icon from '@/components/ui/icon';

const items = [
  {
    year: '2023',
    title: 'Лауреат I премии',
    desc: 'Международный конкурс пианистов им. С. Рахманинова',
    icon: 'Award',
  },
  {
    year: '2021',
    title: 'Сольный концерт',
    desc: 'Большой зал Московской консерватории, аншлаг',
    icon: 'Star',
  },
  {
    year: '2019',
    title: 'Альбом «Контрапункт»',
    desc: 'Признан альбомом года по версии музыкальной критики',
    icon: 'Disc3',
  },
  {
    year: '2017',
    title: 'Европейское турне',
    desc: 'Гастроли в 8 странах, более 40 выступлений',
    icon: 'Globe',
  },
  {
    year: '2015',
    title: 'Гран-при',
    desc: 'Всероссийский конкурс молодых исполнителей',
    icon: 'Trophy',
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-28 bg-background">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-primary uppercase tracking-luxe text-sm mb-5">Достижения</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
            Признание и награды
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
          <div className="space-y-12">
            {items.map((item, i) => (
              <div
                key={item.title}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-secondary border border-primary/40 flex items-center justify-center text-primary md:absolute md:left-1/2 md:-translate-x-1/2">
                  <Icon name={item.icon} size={22} />
                </div>
                <div
                  className={`flex-1 md:w-1/2 ${
                    i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'
                  }`}
                >
                  <div className="font-display text-2xl text-primary mb-1">{item.year}</div>
                  <h3 className="text-xl text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
