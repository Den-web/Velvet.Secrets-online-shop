import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
// import reactLogo from '../../assets/react.svg';
import HeaderLogo from '../../assets/icons/headerLogo/logo-light.svg';

const Logo: React.FC = () => (
  <Link to="/" className="flex items-center mr-4">
    <Image
      src={HeaderLogo}
      alt="Logo"
      width={104}
      height={46}
      preview={false}
      // className=""
      style={{ width: 104, height: 46 }}
    />
  </Link>
);

export default Logo;
