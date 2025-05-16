import React from 'react';
import { Typography } from 'antd';

interface TitleProps extends React.ComponentProps<typeof Typography.Title> {
  children: React.ReactNode;
  className?: string;
}

export const Title: React.FC<TitleProps> = ({ children, className = '', ...rest }) => (
  <Typography.Title className={className} {...rest}>
    {children}
  </Typography.Title>
);
