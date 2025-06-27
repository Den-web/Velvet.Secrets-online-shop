import React from 'react';

import type { ProductType } from '../../store/productsApi';
import { ProductCard } from './ProductCard';
import { Text } from '../atoms/Text';

import '../../styles/carousel-hack.css';
import { Carousel } from 'antd';

interface ProductCarouselProps {
  products: ProductType[];
}

const BESTSELLERS_CONTENT = {
  emptyMessage: 'Немає бестселерів для показу.',
} as const;

export const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  if (!products?.length) {
    return (
      <Text className="text-center text-gray-500 py-8">{BESTSELLERS_CONTENT.emptyMessage}</Text>
    );
  }

  return (
    <Carousel
      swipeToSlide
      draggable
      arrows
      dots={{
        className: 'custom-carousel-dots',
      }}
    >
      {products.map((product, index) => (
        <div key={index}>
          <ProductCard {...product} />
        </div>
      ))}
    </Carousel>
  );
};
