import React from 'react';
import { ProductCard } from '../molecules/ProductCard';
import { simpleProducts } from '../../data/products';
import type { Product } from '../../store/productsApi';
import { ShowAllButton } from '../atoms/ShowAllButton';

export const BestsellersSection: React.FC = () => (
  <section>
    <div>
      <div>
        <img
          src="/src/assets/imagesSection2/image-main@2x.jpg"
          alt="Main"
        />
      </div>
      <div>
        <h2>Бестселлери</h2>
        <p>Кожен вибирає ці бра - ти наступна</p>
        <div>
          {simpleProducts.map((product: Product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
        <ShowAllButton/>
      </div>
    </div>
  </section>
); 