import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import HeaderLogo from '../../assets/icons/headerLogo/logo-light.svg';

export const Logo: React.FC = () => (
  <Link to="/" className="flex items-center mr-4">
    <Image
      src={HeaderLogo}
      alt="Logo"
      width={104}
      height={46}
      preview={false}
      style={{ width: 104, height: 46 }}
    />
  </Link>
);
