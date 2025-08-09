import React from 'react';
import { useGetProductsQuery } from '../../store/productsApi';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/cartSlice';
import { Button } from '../atoms/index';

const ShopPage: React.FC = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  const dispatch = useDispatch();

  if (isLoading) return <div>Loading products...</div>;
  if (error) return <div>Error loading products.</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-purple-900">Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products?.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md border border-purple-100 p-6 flex flex-col items-center"
          >
            <img
              src={product.image || 'https://placehold.co/200x200?text=Product'}
              alt={product.name}
              className="w-32 h-32 object-cover rounded mb-4 border"
            />
            <h2 className="text-lg font-semibold mb-2 text-purple-800">
              {product.name}
            </h2>
            <p className="text-gray-500 mb-2">
              {product.description || 'A wonderful product for your needs.'}
            </p>
            <span className="text-xl font-bold text-purple-700 mb-4">
              ${product.price}
            </span>
            <Button
              onClick={() => dispatch(addItem(product))}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full"
            >
              Add to Cart
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
