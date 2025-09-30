import React from 'react';
import { Typography } from 'antd';

const { Link: AntLink } = Typography;

export interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  className,
  target = '_self',
}) => {
  return (
    <AntLink href={href} target={target} className={className}>
      {children}
    </AntLink>
  );
};
