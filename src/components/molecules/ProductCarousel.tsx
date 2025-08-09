import React from 'react';
import { Carousel } from '../atoms/index';
import type { Product } from '../../store/productsApi';
import { ProductCard } from './ProductCard';
import { simpleProducts } from '../../data/products';

interface ProductCarouselProps {
  products?: Product[];
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({
  products = simpleProducts,
}) => {
  return (
    <div className="overflow-hidden mt-6">
      <Carousel
        slidesToShow={1}
        infinite
        dots
        autoplay
        className="product-carousel absolute inset-y-0 left-0 "
      >
        {products.map((product) => (
          <div key={product.id} className="px-2">
            <ProductCard product={product} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
