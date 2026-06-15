import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const links = [
  { id: 'home', label: 'Главная' },
  { id: 'bio', label: 'Биография' },
  { id: 'music', label: 'Музыка' },
  { id: 'gallery', label: 'Галерея' },
  { id: 'blog', label: 'Блог' },
  { id: 'contact', label: 'Контакты' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        <button
          onClick={() => scrollTo('home')}
          className="font-display text-2xl tracking-wide text-foreground"
        >
          М. Панарин
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          <Icon name={open ? 'X' : 'Menu'} size={26} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <nav className="container flex flex-col py-4">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="py-3 text-left text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;