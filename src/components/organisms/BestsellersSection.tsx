import React from 'react';
import { ProductCard } from '../molecules/ProductCard';
import { ProductCarousel } from '../molecules/ProductCarousel';
import { simpleProducts } from '../../data/products';
import type { Product } from '../../store/productsApi';
import { ShowAllButton } from '../atoms/ShowAllButton';
import { Title, Text, Image } from '../atoms/index';

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
  <div className="bestsellers-list grid grid-cols-2 gap-5 mb-7">
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
    className="w-full bg-white relative"
  >
    <div className="flex flex-col md:flex-row">
      {/* Image Section */}
      <div className="w-full md:w-1/2 relative">
        <div className="w-full h-full">
          <Image
            src={BESTSELLERS_IMAGE.src}
            alt={BESTSELLERS_IMAGE.alt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2">
        <div className="max-w-[600px] py-24 pl-8 pr-4">
          <Title
            id="bestsellers-title"
            level={2}
            className="font-manrope font-bold text-[36px] leading-[1.2] text-grey6 mb-2.5"
          >
            {BESTSELLERS_CONTENT.title}
          </Title>

          <Text className="font-manrope font-regular text-[18px] leading-[1.5] text-grey6 mb-7 block">
            {BESTSELLERS_CONTENT.description}
          </Text>

          {/* Desktop/Tablet: Grid Layout */}
          <div className="hidden md:block">
            <ProductGrid products={simpleProducts} />
          </div>

          {/* Mobile: Carousel Layout */}
          <div className="md:hidden">
            <ProductCarousel products={simpleProducts} />
          </div>

          <ShowAllButton className="self-start font-manrope font-bold text-[20px] leading-[1] text-grey6 py-6 px-10 rounded border-2 border-solid border-pink5 hover:border-pink5 bg-white hover:bg-pink5 hover:text-white transition delay-150 duration-300 ease-in-out" />
        </div>
      </div>
    </div>
  </section>
);

export default BestsellersSection;
