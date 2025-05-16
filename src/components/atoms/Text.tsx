import React from 'react';
import { Typography } from 'antd';

interface TextProps extends React.ComponentProps<typeof Typography.Text> {
  children: React.ReactNode;
  className?: string;
}

export const Text: React.FC<TextProps> = ({ children, className = '', ...rest }) => (
  <Typography.Text className={className} {...rest}>
    {children}
  </Typography.Text>
);
