// src/components/atoms/Badge.tsx
import React from 'react';
import { Badge as AntdBadge } from 'antd';
import type { BadgeProps } from 'antd';

export const Badge: React.FC<BadgeProps> = (props) => {
  return <AntdBadge {...props} />;
};
