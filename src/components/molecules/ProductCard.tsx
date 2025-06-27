import React from 'react';
import { Card } from 'antd';
import { Image } from '../atoms/Image';
import type { ProductType } from '../../store/productsApi';

export const ProductCard: React.FC<ProductType> = ({ name, price, image }) => (
  <Card
    hoverable
    bordered={false}
    className="product-card flex flex-col w-full h-full mx-auto shadow-none border border-[#e5e5e5] rounded-md overflow-hidden"
    cover={
      <Image
        src={image || '/fallback.jpg'}
        alt={name || ''}
        className="product-card-image rounded w-full h-auto object-cover"
      />
    }
  >
    <div className="product-card-content flex flex-col flex-1 justify-between">
      <div className="product-card-title font-manrope font-bold text-[20px] leading-[1.5] text-grey6 mb-2.5 ">
        {name}
      </div>
      <div className="product-card-price font-manrope font-regular text-[18px] leading-[1.3] text-grey6">
        {typeof price === 'number' ? `${price} UAH` : '—'}
      </div>
    </div>
  </Card>
);
