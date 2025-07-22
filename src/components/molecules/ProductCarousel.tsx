import React from 'react';

import type { ProductType } from '../../store/productsApi';
import { ProductCard } from './ProductCard';
import { Text } from '../atoms/Text';

import '../../styles/carousel-hack.css';
import { Carousel } from 'antd';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

interface ProductCarouselProps {
  products: ProductType[];
  isDesktop?: boolean;
}

const BESTSELLERS_CONTENT = {
  emptyMessage: 'Немає бестселерів для показу.',
} as const;

export const ProductCarousel: React.FC<ProductCarouselProps> = ({ products, isDesktop }) => {
  const [hasMounted, setHasMounted] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const slidesToShow = isMobile ? 1 : 2;

  useEffect(() => {
    // это отключает "мигание" при первом рендере
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  if (!products?.length) {
    return (
      <Text className="text-center text-gray-500 py-8">{BESTSELLERS_CONTENT.emptyMessage}</Text>
    );
  }

  if (isDesktop) {
    return (
      <div className="grid grid-cols-2 gap-5 items-stretch mt-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="overflow-hidden -mx-4 h-[220px] pl-4 pr-[15%] mt-6">
        <Carousel
          className="carousel-slide-content"
          dots={false}
          infinite
          autoplay
          // autoplaySpeed={3000}
          slidesToShow={slidesToShow}
          slidesToScroll={1}
          swipeToSlide
          responsive={[
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 1279,
              settings: {
                slidesToShow: 2,
              },
            },
          ]}
        >
          {products.map((product, index) => (
            <div key={index}>
              <div className="flex gap-4 ">
                <div
                  key={product.id}
                  className="h-[350px] overflow-hidden w-[85vw] sm:w-[70vw] md:w-[80vw] flex-shrink-0"
                >
                  <ProductCard product={product} />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};
