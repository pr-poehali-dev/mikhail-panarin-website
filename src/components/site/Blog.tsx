import Icon from '@/components/ui/icon';

const posts = [
  {
    date: '12 мая 2026',
    category: 'Размышления',
    title: 'О тишине между нотами',
    excerpt:
      'Почему паузы в музыке порой важнее самих звуков и как они формируют драматургию исполнения.',
  },
  {
    date: '28 апреля 2026',
    category: 'Гастроли',
    title: 'Записки из европейского турне',
    excerpt:
      'Залы, публика и неожиданные открытия — впечатления от выступлений в пяти городах за две недели.',
  },
  {
    date: '03 апреля 2026',
    category: 'Творчество',
    title: 'Как рождается новое сочинение',
    excerpt:
      'Путь от первой музыкальной идеи до завершённой партитуры: дисциплина, сомнения и вдохновение.',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-28 bg-background">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-primary uppercase tracking-luxe text-sm mb-5">Блог</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
            Мысли и заметки
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((p) => (
            <article
              key={p.title}
              className="group border border-border p-8 hover:border-primary/50 transition-colors flex flex-col"
            >
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground mb-6">
                <span className="text-primary">{p.category}</span>
                <span className="text-border">·</span>
                <span>{p.date}</span>
              </div>
              <h3 className="font-display text-2xl text-foreground mb-4 leading-snug">
                {p.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8 flex-1">{p.excerpt}</p>
              <button className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground group-hover:text-primary transition-colors self-start">
                Читать <Icon name="ArrowRight" size={16} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
