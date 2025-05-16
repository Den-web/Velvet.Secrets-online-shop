import React from 'react';
import { Button as AntButton } from 'antd';

type ButtonProps = React.ComponentProps<typeof AntButton> & {
  children: React.ReactNode;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => (
  <AntButton className={className} {...props} htmlType={props.htmlType || 'button'}>
    {children}
  </AntButton>
);

export default Button;
