import React from 'react';
import { Button as AntButton } from 'antd';

type ButtonProps = React.ComponentProps<typeof AntButton>;

export const Button: React.FC<ButtonProps> = (props) => {
  return <AntButton {...props} />;
};
