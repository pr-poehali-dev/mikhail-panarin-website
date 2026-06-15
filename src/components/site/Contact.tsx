import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';
import func2url from '../../../backend/func2url.json';

const requestTypes = ['Концерт', 'Запись', 'Коллаборация', 'Преподавание', 'Другое'];

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    contact: '',
    request_type: 'Концерт',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.contact || !form.message) {
      toast.error('Заполните имя, контакт и сообщение');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(func2url.booking, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      toast.success('Заявка отправлена! Михаил свяжется с вами в ближайшее время.');
      setForm({ name: '', contact: '', request_type: 'Концерт', message: '' });
    } catch {
      toast.error('Не удалось отправить. Попробуйте ещё раз.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full bg-secondary/40 border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors';

  return (
    <section id="contact" className="py-28 bg-secondary/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-primary uppercase tracking-luxe text-sm mb-5">Контакты</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-8">
              Сотрудничество<br />и бронирование
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md">
              По вопросам концертов, записей, совместных проектов и преподавания
              заполните форму — или свяжитесь напрямую.
            </p>

            <div className="space-y-5">
              <a
                href="mailto:info@panarin-music.ru"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
              >
                <span className="w-11 h-11 rounded-full border border-border flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={18} />
                </span>
                info@panarin-music.ru
              </a>
              <a
                href="tel:+70000000000"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
              >
                <span className="w-11 h-11 rounded-full border border-border flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={18} />
                </span>
                +7 (000) 000-00-00
              </a>
              <div className="flex items-center gap-4 text-foreground">
                <span className="w-11 h-11 rounded-full border border-border flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={18} />
                </span>
                Москва, Россия
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Имя
              </label>
              <input
                className={inputClass}
                placeholder="Ваше имя"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Контакт
              </label>
              <input
                className={inputClass}
                placeholder="Email или телефон"
                value={form.contact}
                onChange={(e) => setForm({ ...form, contact: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Тип обращения
              </label>
              <select
                className={inputClass}
                value={form.request_type}
                onChange={(e) => setForm({ ...form, request_type: e.target.value })}
              >
                {requestTypes.map((t) => (
                  <option key={t} value={t} className="bg-background">
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Сообщение
              </label>
              <textarea
                rows={5}
                className={`${inputClass} resize-none`}
                placeholder="Опишите ваше предложение"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors disabled:opacity-60 w-full sm:w-auto"
            >
              {loading ? 'Отправка...' : 'Отправить заявку'}
              {!loading && <Icon name="Send" size={16} />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
