import React from 'react';
import { ProductCard } from '../molecules/ProductCard';
import { simpleProducts } from '../../data/products';
import type { Product } from '../../store/productsApi';
import { ShowAllButton } from '../atoms/ShowAllButton';

export const BestsellersSection: React.FC = () => (
  <section aria-labelledby="bestsellers-title">
    <div className="bestsellers-container">
      <figure>
        <img
          src="/src/assets/imagesSection2/image-main@2x.jpg"
          alt="Жіноча білизна — головне зображення секції бестселерів"
        />
      </figure>
      <div>
        <h2 id="bestsellers-title">Бестселлери</h2>
        <p>Кожен вибирає ці бра - ти наступна</p>
        <div className="bestsellers-list">
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
