import React from 'react';
import Logo from '../atoms/Logo';
import NavItem from '../molecules/NavItem';

const Navigation: React.FC = () => (
  <nav className="flex items-center justify-between px-6 py-4 bg-gray-100">
    <Logo />
    <div className="flex gap-4">
      <NavItem to="/" label="Home" />
      <NavItem to="/about" label="About" />
      <NavItem to="/shop" label="Shop" />
    </div>
  </nav>
);

export default Navigation;
