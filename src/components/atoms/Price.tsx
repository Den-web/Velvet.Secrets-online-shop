import React from 'react';

interface PriceProps {
  price: number | string;
  className?: string;
}

export const Price: React.FC<PriceProps> = ({ price}) => (
  <div>
    {price} UAH
  </div>
); 