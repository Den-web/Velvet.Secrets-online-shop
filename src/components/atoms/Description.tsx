import React from 'react';
import { Typography } from 'antd';

interface DescriptionProps extends React.ComponentProps<typeof Typography.Paragraph> {
  children: React.ReactNode;
  className?: string;
}

export const Description: React.FC<DescriptionProps> = ({ children, className = '', ...rest }) => (
  <Typography.Paragraph className={className} {...rest}>
    {children}
  </Typography.Paragraph>
);
