import React from 'react';
import AntIcon from '@ant-design/icons';

export interface IconProps {
  icon:
    | React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    | React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
  style?: React.CSSProperties;
  fontSize?: number | string;
  color?: string;
}

const Icon: React.FC<IconProps> = ({
  icon,
  className = '',
  style = {},
  fontSize = 23,
  color = 'currentColor',
}) => {
  const isAntIcon = (Component: React.ComponentType): boolean => {
    return (
      typeof Component === 'function' &&
      'displayName' in Component &&
      typeof Component.displayName === 'string' &&
      Component.displayName.includes('Icon')
    );
  };

  const commonStyle = { fontSize, color, ...style };

  if (isAntIcon(icon)) {
    const AntIconComponent = icon as React.ComponentType<React.SVGProps<SVGSVGElement>>;
    return <AntIconComponent className={className} style={commonStyle} />;
  }

  return (
    <AntIcon
      component={icon as React.FunctionComponent}
      className={className}
      style={commonStyle}
    />
  );
};

export default Icon;
