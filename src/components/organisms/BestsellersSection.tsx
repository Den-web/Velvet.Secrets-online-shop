import React from 'react';
import { ProductCard } from '../molecules/ProductCard';
import { simpleProducts } from '../../data/products';
import type { Product } from '../../store/productsApi';
import { ShowAllButton } from '../atoms/ShowAllButton';

export const BestsellersSection: React.FC = () => (
  <section
    aria-labelledby="bestsellers-title"
    className="py-12 bg-white w-[1920px] border-t border-b border-[#eee] mx-auto"
  >
    <div className="bestsellers-container flex md:flex-row mt-[100px]">
      <figure className="flex-1 m-0 rounded-[4px] overflow-hidden w-[952px] h-[1025px] mr-[20px]">
        <img
          src="/src/assets/imagesSection2/image-main@2x.jpg"
          alt="Жіноча білизна — головне зображення секції бестселерів"
          className="h-full w-full object-cover "
        />
      </figure>
      <div className="flex-1 flex flex-col justify-center h-full mt-[40px]">
        <h2
          id="bestsellers-title"
          className="font-manrope font-bold text-[36px] leading-[1.2] text-[#121212] mb-[10px]"
        >
          Бестселлери
        </h2>
        <p className="font-manrope font-regular text-[18px] leading-[1.5] text-[#121212] mb-[30px]">
          Кожен вибирає ці бра - ти наступна
        </p>
        <div className="grid grid-cols-2 gap-[30px] w-[598px] rounded-[4px] overflow-hidden">
          {simpleProducts.length > 0 ? (
            simpleProducts.map((product: Product) => (
              <ProductCard product={product} key={product.id} />
            ))
          ) : (
            <p>Немає бестселерів для показу.</p>
          )}
        </div>
        <ShowAllButton />
      </div>
    </div>
  </section>
);
