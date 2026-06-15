export interface Social {
  icon: string;
  href: string;
  label: string;
}

export const socials: Social[] = [
  {
    icon: 'Radio',
    label: 'Яндекс Музыка',
    href: 'https://music.yandex.ru/artist/8930219',
  },
  { icon: 'Send', label: 'Telegram', href: 'https://t.me/panarin_songs' },
  { icon: 'Music2', label: 'ВКонтакте', href: 'https://vk.ru/panarinmisha' },
  {
    icon: 'Users',
    label: 'Одноклассники',
    href: 'https://ok.ru/profile/532478215157',
  },
  {
    icon: 'Music',
    label: 'TikTok',
    href: 'https://www.tiktok.com/@mikhailpanarin',
  },
];