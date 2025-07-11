import {
  dressWithLoveDesktop,
  dressWithLoveDesktopCarousel1,
  dressWithLoveDesktopCarousel2,
  dressWithLoveDesktopCarousel3,
  dressWithLoveTabletCarouse1,
  dressWithLoveTabletCarouse2,
  dressWithLoveTabletCarouse3,
  dressWithLoveMobileCarouse1,
  dressWithLoveMobileCarouse2,
  dressWithLoveMobileCarouse3,
} from '../assets/icons/index';

export const dressWithLoveData = {
  title: 'Одягайся з любов’ю до себе',
  subtitle: 'М’яка білизна, затишний одяг і натхнення для твого щоденного комфорту.',
  buttonText: 'Обрати комфорт',
  desktopSideImage: dressWithLoveDesktop,
  slides: [
    {
      desktop: dressWithLoveDesktopCarousel1,
      tablet: dressWithLoveTabletCarouse1,
      mobile: dressWithLoveMobileCarouse1,
    },
    {
      desktop: dressWithLoveDesktopCarousel2,
      tablet: dressWithLoveTabletCarouse2,
      mobile: dressWithLoveMobileCarouse2,
    },
    {
      desktop: dressWithLoveDesktopCarousel3,
      tablet: dressWithLoveTabletCarouse3,
      mobile: dressWithLoveMobileCarouse3,
    },
  ],
};
