/*
How to use custom SVG icons with the Icon component:

1. Place your SVG file in the icons folder:
   src/assets/icons/star.svg

   Example star.svg:
   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" fill="currentColor"/>
   </svg>

2. Import the SVG as a React component in your file:
   // Vite, CRA, or SVGR setup required
   import StarIcon from '../../assets/icons/star.svg?react';

3. Use the Icon component to render your SVG:
   import { Icon } from './Icon';

   <Icon icon={StarIcon} className="w-6 h-6 text-yellow-500" />

You can pass any SVG props (width, height, fill, etc.) or className for styling.

Props:
- fontSize: number | string (default: 24)
- color: string (default: 'currentColor')
*/

// Usage example:
// import StarIcon from '../../assets/icons/star.svg?react';
// import { Icon } from './Icon';
// <Icon icon={StarIcon} fontSize={32} color="red" />

import React from 'react';
import AntIcon from '@ant-design/icons';

export interface IconProps {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
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
}) => (
  <AntIcon component={IconComponent} className={className} style={{ fontSize, color, ...style }} />
);
