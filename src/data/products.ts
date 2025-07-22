import type { ProductType } from '../store/productsApi';
import image1 from '../assets/imagesSection2/image1_4@2.jpg';
import image2 from '../assets/imagesSection2/image2@2x.jpg';
import image3 from '../assets/imagesSection2/image3.jpg';

export const simpleProducts: ProductType[] = [
  {
    id: '1',
    name: 'Бюстгальтер бежевий push-up',
    price: 1249,
    image: image1,
    description: 'Бежевий бюстгальтер пуш-ап',
  },
  {
    id: '2',
    name: 'Бюстгальтер бралет, чорний push-up',
    price: 1700,
    image: image2,
    description: 'Чорний бюстгальтер-бралет пуш-ап',
  },
  {
    id: '3',
    name: 'Бюстгальтер бралет, чорний',
    price: 1349,
    image: image3,
    description: 'Чорний бюстгальтер-бралет',
  },
  {
    id: '4',
    name: 'Бюстгальтер бежевий, базовий',
    price: 1100,
    image: image1,
    description: 'Бежевий базовий бюстгальтер',
  },
];
