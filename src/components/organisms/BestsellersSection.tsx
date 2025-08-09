import React from 'react';
import { ProductCard } from '../molecules/ProductCard';
import { ProductCarousel } from '../molecules/ProductCarousel';
import { simpleProducts } from '../../data/products';
import type { Product } from '../../store/productsApi';
import { Title } from '../atoms/Title';
import { Text } from '../atoms/Text';
import { Image } from '../atoms/Image';
import { Button } from '../atoms/Button';
import {
  BESTSELLERS_BUTTON,
  BESTSELLERS_CONTENT,
  BESTSELLERS_IMAGE,
} from '../../data/mainSectionBestsellers';

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
    className="relative w-full left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-12 mb-[50px] md:mb-[80px] lg:mb-[100px] lg:py-24 bg-white overflow-visible"
  >
    <div className="flex flex-col lg:flex-row items-center ">
      <div className="w-full hidden lg:block flex-shrink-0 lg:w-[50vw]">
        <div className="relative w-full ">
          <Image
            style={{ minHeight: '1000px', maxHeight: '974px' }}
            src={BESTSELLERS_IMAGE.src}
            alt={BESTSELLERS_IMAGE.alt}
            className="ant-image w-full object-cover rounded"
          />
        </div>
      </div>
      <div className="relative flex flex-col lg:flex-row w-full ">
        <div className="w-full px-5 py-8 lg:py-10 lg:w-[600px]">
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
          <div className="hidden lg:block">
            <ProductGrid products={simpleProducts} />
          </div>
          <div className="lg:hidden">
            <ProductCarousel products={simpleProducts} />
          </div>
          <div className="flex justify-center lg:justify-start mt-6">
            <Button className="custom-btn-forYourSpace self-start font-manrope text-[20px] leading-[1] py-6 px-10">
              {BESTSELLERS_BUTTON.text}
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BestsellersSection;
