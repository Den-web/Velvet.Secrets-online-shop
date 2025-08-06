import React from 'react';
import { Input as AntInput, type InputProps } from 'antd';

const Input: React.FC<InputProps> = (props) => {
  return <AntInput {...props} />;
};

export default Input;
