import type { Product } from '../store/productsApi';
import {
  productCard1,
  productCard2,
  productCard3,
} from '../assets/icons/index.ts';

export const simpleProducts: Product[] = [
  {
    id: '1',
    name: 'Бюстгальтер бежевий push-up',
    price: 1249,
    image: productCard1,
    description: 'Бежевий бюстгальтер пуш-ап',
  },
  {
    id: '2',
    name: 'Бюстгальтер бралет, чорний push-up',
    price: 1700,
    image: productCard2,
    description: 'Чорний бюстгальтер-бралет пуш-ап',
  },
  {
    id: '3',
    name: 'Бюстгальтер бралет, чорний',
    price: 1349,
    image: productCard3,
    description: 'Чорний бюстгальтер-бралет',
  },
  {
    id: '4',
    name: 'Бюстгальтер бежевий, базовий',
    price: 1100,
    image: productCard1,
    description: 'Бежевий базовий бюстгальтер',
  },
];
