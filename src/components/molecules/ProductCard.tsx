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
    className="product-card"
    cover={
      <Image
        src={product.image || '/fallback.jpg'}
        alt={product.name || ''}
        className="product-card-image rounded object-contain"
      />
    }
  >
    <div className="product-card-content">
      <div className="product-card-title font-manrope font-bold text-[20px] leading-[1.5] text-[#121212] mb-2.5">
        {product.name}
      </div>
      <div className="product-card-price font-manrope font-regular text-[18px] leading-[1.3] text-[#121212]">
        {typeof product.price === 'number' ? `${product.price} UAH` : '—'}
      </div>
    </div>
  </Card>
);
