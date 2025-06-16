import React from 'react';
import { ProductCard } from '../molecules/ProductCard';
import { simpleProducts } from '../../data/products';
import type { Product } from '../../store/productsApi';
import { ShowAllButton } from '../atoms/ShowAllButton';

export const BestsellersSection: React.FC = () => (
  <section
    aria-labelledby="bestsellers-title"
    className="bg-white w-full h-auto  py-24 overflow-hidden mx-auto"
  >
    <div className="flex flex-row gap-5 border-t-2 border-b-2 border-solid border-wisper">
      <figure className="flex flex-col md:flex-row w-full items-normal object-contain">
        <img
          src="/src/assets/imagesSection2/image-main@2x.jpg"
          alt="Жіноча білизна — головне зображення секції бестселерів"
          className="rounded w-full h-auto object-cover"
        />
      </figure>
      <div className="grid grid-row-2 py-10">
        <div className="pe-8">
          <h2
            id="bestsellers-title"
            className="font-manrope font-bold text-[36px] leading-[1.2] text-[#121212] mb-2.5"
          >
            Бестселлери
          </h2>
          <p className="font-manrope font-regular text-[18px] leading-[1.5] text-[#121212] mb-7">
            Кожен вибирає ці бра - ти наступна
          </p>
          <div className="grid flex-wrap grid-cols-2 items-start justify-start gap-5 mb-7 ">
            {simpleProducts.length > 0 ? (
              simpleProducts.map((product: Product) => (
                <ProductCard product={product} key={product.id} />
              ))
            ) : (
              <p>Немає бестселерів для показу.</p>
            )}
          </div>
          <ShowAllButton className="bestsellers-button font-manrope font-bold text-[20px] leading-[1] text-[#121212] py-6 px-10 rounded border-2 border-solid border-pink-700 hover:border-pink-700 bg-white hover:bg-pink-700 hover:text-white transition delay-150 duration-300 ease-in-out" />
        </div>
      </div>
    </div>
  </section>
);
