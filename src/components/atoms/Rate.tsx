import React from 'react';
import { Rate as AntdRate } from 'antd';

export interface RateProps {
  value?: number;

  onChange?: (value: number) => void;
}

export const Rate: React.FC<RateProps> = ({ value, onChange }) => {
  return <AntdRate value={value} onChange={onChange} />;
};
