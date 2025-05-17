import React from 'react';
import { Typography } from 'antd';

interface PriceProps extends React.ComponentProps<typeof Typography.Text> {
  price?: number | string;
  currency?: string;
  className?: string;
}

export const Price: React.FC<PriceProps> = ({
  price,
  currency = 'UAH',
  className = '',
  ...rest
}) => {
  let display = '—';
  if (typeof price === 'number') {
    display = price.toLocaleString('uk-UA') + ' ' + currency;
  } else if (typeof price === 'string' && price.trim() !== '') {
    display = price + ' ' + currency;
  }
  return (
    <Typography.Text className={className} {...rest}>
      {display}
    </Typography.Text>
  );
};
