import { useState } from 'react';
import Icon from '@/components/ui/icon';

const base = 'https://cdn.poehali.dev/projects/e5e6fbe1-db72-4349-90ef-68932761ac69/files';

const images = [
  `${base}/a0f9bc51-7dae-42cc-a49f-778c32cadb21.jpg`,
  `${base}/0ad12188-872c-4578-8e55-5dcda56f3fba.jpg`,
  `${base}/bbba2dc2-f42d-4296-a4e4-94b67fc05340.jpg`,
  `${base}/e36d7861-062a-478e-8e67-dcc387f4513b.jpg`,
  `${base}/765ea4ef-5f7b-4828-a773-aaacfc411062.jpg`,
];

const Gallery = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-28 bg-secondary/30">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-primary uppercase tracking-luxe text-sm mb-5">Галерея</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
            Концерты и сцена
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[260px]">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setActive(src)}
              className={`group relative overflow-hidden ${
                i === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <img
                src={src}
                alt={`Фото ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors flex items-center justify-center">
                <Icon
                  name="Expand"
                  size={28}
                  className="text-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-primary"
            aria-label="Закрыть"
          >
            <Icon name="X" size={32} />
          </button>
          <img src={active} alt="Просмотр" className="max-w-full max-h-[85vh] object-contain" />
        </div>
      )}
    </section>
  );
};

export default Gallery;
