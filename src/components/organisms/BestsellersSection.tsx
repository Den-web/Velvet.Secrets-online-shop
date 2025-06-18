import React from 'react';
import { ProductCard } from '../molecules/ProductCard';
import { simpleProducts } from '../../data/products';
import type { Product } from '../../store/productsApi';
import { ShowAllButton } from '../atoms/ShowAllButton';

export const BestsellersSection: React.FC = () => (
  <section
    aria-labelledby="bestsellers-title"
    className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white overflow-visible"
  >
    <div className="flex flex-col md:flex-row py-24">
      <div className="container flex flex-col md:flex-row gap-5 w-full">
        <figure className="w-full md:w-1/2">
          <img
            src="/src/assets/imagesSection2/image-main@2x.jpg"
            alt="Жіноча білизна — головне зображення секції бестселерів"
            className="rounded w-full h-full object-cover"
          />
        </figure>

        <div className="w-full md:w-1/2 py-10">
          <h2
            id="bestsellers-title"
            className="font-manrope font-bold text-[36px] leading-[1.2] text-grey6 mb-2.5"
          >
            Бестселлери
          </h2>
          <p className="font-manrope font-regular text-[18px] leading-[1.5] text-grey6 mb-7">
            Кожен вибирає ці бра - ти наступна
          </p>

          <div className="bestsellers-list grid grid-cols-2 md:grid-cols-2 gap-6 mb-7">
            {simpleProducts.length > 0 ? (
              simpleProducts.map((product: Product) => (
                <ProductCard product={product} key={product.id} />
              ))
            ) : (
              <p>Немає бестселерів для показу.</p>
            )}
          </div>

          <ShowAllButton className="self-start font-manrope font-bold text-[20px] leading-[1] text-grey6 py-6 px-10 rounded border-2 border-solid border-pink5 hover:border-pink5 bg-white hover:bg-pink5 hover:text-white transition delay-150 duration-300 ease-in-out" />
        </div>
      </div>
    </div>
  </section>
);
