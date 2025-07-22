import React from 'react';
import { Card as AntCard } from 'antd';
import type { CardProps as AntCardProps } from 'antd';

interface CardProps extends Omit<AntCardProps, 'children'> {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  bordered?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = false,
  bordered = true,
  ...restProps
}) => {
  return (
    <AntCard
      className={className}
      hoverable={hoverable}
      bordered={bordered}
      {...restProps}
    >
      {children}
    </AntCard>
  );
};

export default Card;
