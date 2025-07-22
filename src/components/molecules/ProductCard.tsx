import React from 'react';
import { Card } from 'antd';
import { Image } from '../atoms/Image';
import type { ProductType } from '../../store/productsApi';

interface ProductCardProps {
  product: ProductType;
  className?: string;
}

export const ProductCard = React.memo(({ product }: ProductCardProps) => {
  return (
    <Card
      hoverable
      variant="outlined"
      className="product-card flex flex-col w-full h-[350px] mx-auto shadow-none border border-[#e5e5e5] rounded-md overflow-hidden"
      cover={
        <Image
          preview={false}
          style={{ objectFit: 'cover' }}
          height={220} // ❗ фиксируем высоту
          width="100%"
          src={product.image || '/fallback.jpg'}
          alt={product.name || ''}
          className="product-card-image rounded h-[220px] object-cover"
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
});
