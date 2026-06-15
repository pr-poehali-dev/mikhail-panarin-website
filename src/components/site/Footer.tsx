import Icon from '@/components/ui/icon';

const socials = [
  { icon: 'Youtube', href: '#' },
  { icon: 'Instagram', href: '#' },
  { icon: 'Send', href: '#' },
  { icon: 'Music2', href: '#' },
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-14">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="font-display text-2xl text-foreground">Михаил Панарин</div>

          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.icon}
                href={s.href}
                className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label={s.icon}
              >
                <Icon name={s.icon} size={18} />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Михаил Панарин. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
