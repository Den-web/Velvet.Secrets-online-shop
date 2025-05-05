import React from 'react';
import { useGetProductsQuery } from '../../store/productsApi';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/cartSlice';
import Button from '../atoms/Button';

const ShopPage: React.FC = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  const dispatch = useDispatch();

  if (isLoading) return <div>Loading products...</div>;
  if (error) return <div>Error loading products.</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Shop</h1>
      <ul>
        {products?.map((product) => (
          <li
            key={product.id}
            className="mb-4 p-4 border rounded flex justify-between items-center"
          >
            <span>
              {product.name} - ${product.price}
            </span>
            <Button onClick={() => dispatch(addItem(product))}>Add to Cart</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopPage;
