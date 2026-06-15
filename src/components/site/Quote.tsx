import Icon from '@/components/ui/icon';

const Quote = () => {
  return (
    <section className="py-28 bg-background relative overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Icon
            name="Quote"
            size={48}
            className="text-primary/40 mx-auto mb-10"
          />
          <p className="font-display text-3xl md:text-5xl text-foreground leading-snug mb-8">
            Если ты чувствуешь — значит, ты жив.
            <br />
            Если любишь — значит, не зря пишу.
          </p>
          <div className="w-16 h-px bg-primary mx-auto mt-10" />
          <p className="text-muted-foreground uppercase tracking-luxe text-sm mt-8">
            Михаил Панарин
          </p>
        </div>
      </div>
    </section>
  );
};

export default Quote;
