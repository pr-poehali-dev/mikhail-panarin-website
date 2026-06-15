const PIANO_IMG =
  'https://cdn.poehali.dev/projects/e5e6fbe1-db72-4349-90ef-68932761ac69/files/bbba2dc2-f42d-4296-a4e4-94b67fc05340.jpg';

const facts = [
  { value: '20+', label: 'лет на сцене' },
  { value: '300+', label: 'концертов' },
  { value: '15', label: 'стран гастролей' },
  { value: '4', label: 'авторских альбома' },
];

const Bio = () => {
  return (
    <section id="bio" className="py-28 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={PIANO_IMG}
              alt="Рояль на сцене"
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block border border-primary/40 w-40 h-40" />
          </div>

          <div>
            <p className="text-primary uppercase tracking-luxe text-sm mb-5">Биография</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8 leading-tight">
              Путь, выстроенный<br />на дисциплине звука
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
              <p>
                Михаил Панарин — пианист и композитор, чьё имя ассоциируется с
                академической точностью исполнения и глубокой интерпретацией.
                Выпускник консерватории по классу фортепиано, лауреат
                международных конкурсов.
              </p>
              <p>
                В репертуаре — произведения от барокко до современных авторов, а
                также собственные сочинения, исполняемые на сценах ведущих
                концертных залов России и Европы.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-12 pt-10 border-t border-border">
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
