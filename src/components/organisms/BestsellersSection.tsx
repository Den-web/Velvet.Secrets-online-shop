import React from 'react';
import { ProductCard } from '../molecules/ProductCard';
import { ProductCarousel } from '../molecules/ProductCarousel';
import { simpleProducts } from '../../data/products';
import type { Product } from '../../store/productsApi';
import { Title } from '../atoms/Title';
import { Text } from '../atoms/Text';
import { Image } from '../atoms/Image';
import { ButtonConfig } from '../atoms/ButtonConfig';

const BESTSELLERS_IMAGE = {
  src: '/src/assets/imagesSection2/image-main@2x.jpg',
  alt: 'Жіноча білизна — головне зображення секції бестселерів',
} as const;

const BESTSELLERS_CONTENT = {
  title: 'Бестселлери',
  description: 'Кожен вибирає ці бра - ти наступна',
  emptyMessage: 'Немає бестселерів для показу.',
} as const;

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => (
  <div className="bestsellers-list grid grid-cols-2 gap-5 mb-7 w-full">
    {products.length > 0 ? (
      products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))
    ) : (
      <Text>{BESTSELLERS_CONTENT.emptyMessage}</Text>
    )}
  </div>
);

const BestsellersSection: React.FC = () => (
  <section
    aria-labelledby="bestsellers-title"
    className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-12 md:20 lg:py-24 bg-white overflow-visible"
  >
    <div className="flex flex-col lg:flex-row ">
      {/* Image Section */}
      <div className="w-full hidden lg:block">
        <div className="relative w-full">
          <Image
            height={974}
            src={BESTSELLERS_IMAGE.src}
            alt={BESTSELLERS_IMAGE.alt}
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full h-full flex items-center">
        <div className="w-full px-5 py-8 lg:py-10 lg:max-w-[600px]">
          <Title
            id="bestsellers-title"
            level={2}
            className="font-manrope font-bold lg:font-semibold text-[36px] leading-[1.2] text-grey6 mb-2.5 text-center md:text-left"
          >
            {BESTSELLERS_CONTENT.title}
          </Title>

          <Text className="font-manrope font-regular text-[18px] leading-[1.5] text-grey6 mb-7 block text-center md:text-left">
            {BESTSELLERS_CONTENT.description}
          </Text>

          {/* Desktop/Tablet: Grid Layout */}
          <div className="hidden lg:block">
            <ProductGrid products={simpleProducts} />
          </div>

          {/* Mobile: Carousel Layout */}
          <div className="lg:hidden">
            <ProductCarousel products={simpleProducts} />
          </div>
          <div className="flex justify-center lg:justify-start mt-6">
            <ButtonConfig />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BestsellersSection;
