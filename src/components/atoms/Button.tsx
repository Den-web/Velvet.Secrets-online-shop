import React from 'react';
import { Button as AntButton } from 'antd';
import type { ButtonProps as AntButtonProps } from 'antd';

type ButtonProps = AntButtonProps & {
  children: React.ReactNode;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  ...props
}) => (
  <AntButton
    {...props}
    className={`${className}`}
    htmlType={props.htmlType || 'button'}
  >
    {children}
  </AntButton>
);
