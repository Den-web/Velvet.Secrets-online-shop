export type NavLink = {
  to: string;
  label: string;
};

export const navLinksData: NavLink[] = [
  { to: '/new', label: 'Новинки' },
  { to: '/underwear', label: 'Білизна' },
  { to: '/homewear', label: 'Домашній одяг' },
  { to: '/promotions', label: 'Акції' },
  { to: '/blog', label: 'Блог' },
  { to: '/about', label: 'Про нас' },
];
