import {
  footerLogoDesktopAndMob,
  footerLogoTablet,
  footerBgDesktop,
  footerBgTablet,
  footerBgMobile,
} from '../assets/icons/index';

import { navLinksData } from './navLinksData';

type FooterSectionItem = {
  label: string;
  to?: string;
  iconKey?: string;
};

type FooterSection = {
  title: string;
  items: FooterSectionItem[];
};

type SubscribeData = {
  title: string;
  text: string;
  inputPlaceholder: string;
  requiredMessage: string;
  buttonText: string;
};

type FooterData = {
  logo: {
    desktopAndMobile: string;
    tablet: string;
  };
  background: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
  subscribe: SubscribeData;
  sections: FooterSection[];
  socials: FooterSectionItem[];
};

const findNavLink = (label: string) =>
  navLinksData.find((link) => link.label === label);

const homeSectionItems: FooterSectionItem[] = navLinksData
  .filter((link) =>
    ['Про нас', 'Новинки', 'Білизна', 'Домашній одяг', 'Акції'].includes(
      link.label,
    ),
  )
  .map((link) => ({ label: link.label, to: link.to }));

const clientsSection: FooterSection = {
  title: 'Клієнтам',
  items: [
    { label: 'Доставка та оплата', to: '/delivery' },
    { label: 'Обмін та повернення', to: '/returns' },
    { label: 'Підбір розміру', to: '/size-guide' },
    ...(findNavLink('Блог')
      ? [{ label: 'Блог', to: findNavLink('Блог')!.to }]
      : []),
  ],
};

const socialsSection: FooterSection = {
  title: 'Слідкуй за нами',
  items: [
    { label: 'Google', iconKey: 'google', to: '#' },
    { label: 'Instagram', iconKey: 'instagram', to: '#' },
    { label: 'Facebook', iconKey: 'facebook', to: '#' },
    { label: 'YouTube', iconKey: 'youtube', to: '#' },
  ],
};

export const footerData: FooterData = {
  logo: {
    desktopAndMobile: footerLogoDesktopAndMob,
    tablet: footerLogoTablet,
  },

  background: {
    desktop: footerBgDesktop,
    tablet: footerBgTablet,
    mobile: footerBgMobile,
  },

  subscribe: {
    title: 'Залишайся в курсі',
    text: 'Будьте першим, хто дізнається про наші спеціальні пропозиції та все, що стосується Velvet Secrets.',
    inputPlaceholder: 'Електронна пошта',
    requiredMessage: 'Введіть email',
    buttonText: 'Відправити',
  },

  sections: [
    { title: 'Головна', items: homeSectionItems },
    clientsSection,
    socialsSection,
  ],

  socials: socialsSection.items,
};
