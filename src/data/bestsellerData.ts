import {
  bestSellerMainDesktop,
  bestSellerCardDesktop1,
  bestSellerCardDesktop2,
  bestSellerCardDesktop3,
  bestSellerCardDesktop4,
  bestSellerCardTabletMobile1,
  bestSellerCardTabletMobile2,
  bestSellerCardTabletMobile3,
  bestSellerCardTabletMobile4,
} from '../assets/icons/index';

export interface BestsellerItem {
  id: number;
  title: string;
  price: string;
  imageDesktop: string;
  imageTabletMobile: string;
}

export interface BestsellerData {
  title: string;
  subtitle: string;
  buttonText: string;
  mainImage: string;
  items: BestsellerItem[];
}

export const bestsellerData: BestsellerData = {
  title: 'Бестселлери',
  subtitle: 'Кожен вибирає ці бра – ти наступна',
  buttonText: 'Подивитись все',
  mainImage: bestSellerMainDesktop,
  items: [
    {
      id: 1,
      title: 'Бюстгальтер бежевий, push-up',
      price: '1 249 UAH',
      imageDesktop: bestSellerCardDesktop1,
      imageTabletMobile: bestSellerCardTabletMobile1,
    },
    {
      id: 2,
      title: 'Бюстгальтер бралет, чорний push-up',
      price: '1 700 UAH',
      imageDesktop: bestSellerCardDesktop2,
      imageTabletMobile: bestSellerCardTabletMobile2,
    },
    {
      id: 3,
      title: 'Бюстгальтер бралет, чорний',
      price: '1 349 UAH',
      imageDesktop: bestSellerCardDesktop3,
      imageTabletMobile: bestSellerCardTabletMobile3,
    },
    {
      id: 4,
      title: 'Бюстгальтер бежевий, базовий',
      price: '1 100 UAH',
      imageDesktop: bestSellerCardDesktop4,
      imageTabletMobile: bestSellerCardTabletMobile4,
    },
  ],
};
