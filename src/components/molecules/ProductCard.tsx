import React from 'react';
import { Card } from 'antd';
import { Image } from '../atoms/Image';
import type { Product } from '../../store/productsApi';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <Card
    hoverable
    bordered={false}
    className="product-card flex flex-col w-full h-full mx-auto shadow-none border border-[#e5e5e5] rounded-md overflow-hidden"
    cover={
      <Image
        src={product.image || ''}
        alt={product.name || ''}
        className="product-card-image rounded h-auto object-cover"
      />
    }
  >
    <div className="product-card-content flex flex-col flex-1 justify-between">
      <div className="product-card-title font-manrope font-bold text-[20px] leading-[1.5] text-grey6 mb-2.5 ">
        {product.name}
      </div>
      <div className="product-card-price font-manrope font-regular text-[18px] leading-[1.3] text-grey6">
        {typeof product.price === 'number' ? `${product.price} UAH` : '—'}
      </div>
    </div>
  </Card>
);
