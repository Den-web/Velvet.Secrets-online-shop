import React from 'react';
import Logo from '../atoms/Logo';
import NavItem from '../molecules/NavItem';

const Navigation: React.FC = () => (
  <nav className="w-full bg-white/90 dark:bg-neutral-800/90 shadow sticky top-0 z-50 border-b border-purple-100">
    <div className="w-full flex items-center justify-between px-6 py-4">
      <Logo />
      <div className="flex gap-6">
        <NavItem to="/" label="Home" />
        <NavItem to="/about" label="About" />
        <NavItem to="/shop" label="Shop" />
      </div>
    </div>
  </nav>
);

export default Navigation;
