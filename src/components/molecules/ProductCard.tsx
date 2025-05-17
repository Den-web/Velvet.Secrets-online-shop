import React from 'react';
import { Card } from 'antd';
import { Image } from '../atoms/Image';
import type { Product } from '../../store/productsApi';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <Card
    hoverable
    className="product-card"
    cover={
      <Image
        src={product.image || '/fallback.jpg'}
        alt={product.name || ''}
        className="product-card-image"
      />
    }
  >
    <div className="product-card-content">
      <div className="product-card-title">{product.name}</div>
      <div className="product-card-price">
        {typeof product.price === 'number' ? `${product.price} UAH` : '—'}
      </div>
      {product.description && <div className="product-card-description">{product.description}</div>}
    </div>
  </Card>
);
