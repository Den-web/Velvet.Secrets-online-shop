import React from 'react';
import reactLogo from '../../assets/react.svg';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => (
  <Link to="/" className="flex items-center mr-4">
    <img src={reactLogo} alt="Logo" className="w-12 h-12 hover:scale-110 transition-transform" />
  </Link>
);

export default Logo;
