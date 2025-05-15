import React from 'react';
import { Card } from 'antd';
import { Image } from '../atoms/Image';
import type { Product } from '../../store/productsApi';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <Card>
      <Image
        src={product.image || ''}
        alt={product.name || ''}
      />
    <div>{product.name}</div>
    <div>{product.price} UAH</div>
    <div>{product.description}</div>
  </Card>
); 