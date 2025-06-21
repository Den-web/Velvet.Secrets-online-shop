import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { Product } from '../../store/productsApi';
import { ProductCard } from './ProductCard';
import { Text } from '../atoms/Text';

const BESTSELLERS_CONTENT = {
  emptyMessage: 'Немає бестселерів для показу.',
} as const;

interface ProductSliderProps {
  products: Product[];
}

export const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <>
      {/* Мобільний/Планшетний слайдер */}
      <div className="block lg:hidden overflow-x-auto -mx-5 px-5" ref={emblaRef}>
        <div className="flex gap-4 min-w-fit">
          {products.map((product) => (
            <div key={product.id} className="min-w-[80%] md:min-w-[40%]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* Точки */}
      <div className="flex justify-center gap-2 mt-5 mb-5 lg:hidden">
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`w-6 h-1 rounded-xl p-0 transition-all duration-300 ${
              i === selectedIndex ? 'bg-pink5' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Десктопна версія */}
      <div className="bestsellers-list hidden lg:grid grid-cols-2 gap-5 mb-7 items-stretch">
        {products.length > 0 ? (
          products.map((product) => <ProductCard product={product} key={product.id} />)
        ) : (
          <Text>{BESTSELLERS_CONTENT.emptyMessage}</Text>
        )}
      </div>
    </>
  );
};
