import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import reactLogo from '../../assets/react.svg';

const Logo: React.FC = () => (
  <Link to="/" className="flex items-center mr-4">
    <Image
      src={reactLogo}
      alt="Logo"
      width={48}
      height={48}
      preview={false}
      className="hover:scale-110 transition-transform"
      style={{ width: 48, height: 48 }}
    />
  </Link>
);

export default Logo;
