import React from 'react';
import { Typography } from 'antd';

interface TitleProps extends React.ComponentProps<typeof Typography.Title> {
  children: React.ReactNode;
  className?: string;
  level: 1 | 2 | 3 | 4 | 5;
}

export const Title: React.FC<TitleProps> = ({
  children,
  className = '',
  level,
  ...rest
}) => (
  <Typography.Title level={level} className={className} {...rest}>
    {children}
  </Typography.Title>
);
