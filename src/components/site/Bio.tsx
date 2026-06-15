const PIANO_IMG =
  'https://cdn.poehali.dev/projects/e5e6fbe1-db72-4349-90ef-68932761ac69/bucket/05cd05bf-efef-4516-ac89-65f1e38c37f7.png';

const facts = [
  { value: '2', label: 'года на сцене' },
  { value: '5', label: 'концертов в Москве' },
  { value: '3', label: 'книги' },
  { value: '350', label: 'авторских стихов' },
  { value: '85', label: 'авторских песен' },
  { value: '2', label: 'авторских альбома' },
];

const Bio = () => {
  return (
    <section id="bio" className="py-28 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={PIANO_IMG}
              alt="Михаил Панарин"
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block border border-primary/40 w-40 h-40" />
          </div>

          <div>
            <p className="text-primary uppercase tracking-luxe text-sm mb-5">Биография</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8 leading-tight">
              Влюблённый в слова,<br />мелодии и людей
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
              <p>
                Меня зовут Михаил, и я — музыкант и поэт. Мои стихи — это
                признания, спрятанные между строк. Мои песни — это письма тем,
                кого ждут. Каждая строчка — как прикосновение. Каждый аккорд —
                как пульс души.
              </p>
              <p>
                Я верю, что любовь не нуждается в громких словах. Её сила — в
                простом взгляде, в тёплом голосе, в песне, которую кто-то
                слушает на повторе.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-12 pt-10 border-t border-border">
              {facts.map((f) => (
                <div key={f.label}>
                  <div className="font-display text-4xl text-primary mb-1">{f.value}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    {f.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;