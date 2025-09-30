import React from 'react';
import { Link, Image } from '../atoms/index';
import { Grid } from 'antd';
import {
  headerLheaderLogoDarkDesktop,
  headerLogoDartTabletMob,
  headerLogoLightDesktop,
  headerLogoLightTabletMob,
} from '../../assets/icons/index';
import { footerData } from '../../data/footerData';

const { useBreakpoint } = Grid;

export interface LogoProps {
  type: 'header' | 'footer';
  theme?: 'light' | 'dark';
  alt?: string;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  type,
  theme = 'light',
  alt = 'Logo',
  className,
}) => {
  const screens = useBreakpoint();

  const logoSrc =
    type === 'header'
      ? theme === 'light'
        ? screens.md
          ? headerLogoLightTabletMob
          : headerLogoLightDesktop
        : screens.md
          ? headerLogoDartTabletMob
          : headerLheaderLogoDarkDesktop
      : screens.md
        ? footerData.logo.tablet
        : footerData.logo.desktopAndMobile;

  const { width, height } =
    type === 'header'
      ? screens.lg
        ? { width: 129, height: 46 }
        : { width: 92, height: 36 }
      : screens.lg
        ? { width: 129, height: 54 }
        : screens.md
          ? { width: 92, height: 36 }
          : { width: 129, height: 54 };

  return (
    <Link href="/" className={`flex items-center ${className || ''}`}>
      <Image
        src={logoSrc}
        alt={alt}
        width={width}
        height={height}
        className="object-contain"
      />
    </Link>
  );
};
