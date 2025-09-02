import React from 'react';
import type { IconBaseProps } from '@ant-design/icons/lib/components/Icon';

export interface IconProps {
  icon: React.ComponentType<IconBaseProps>;
  className?: string;
  style?: React.CSSProperties;
  fontSize?: number | string;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({
  icon: IconComponent,
  className = '',
  style = {},
  fontSize = 24,
  color = 'currentColor',
}) => {
  return (
    <IconComponent
      className={className}
      style={{ fontSize, color, ...style }}
    />
  );
};
