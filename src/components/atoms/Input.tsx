import React from 'react';
import { Input as AntInput, type InputProps } from 'antd';

export const Input: React.FC<InputProps> = (props) => {
  return <AntInput {...props} />;
};
