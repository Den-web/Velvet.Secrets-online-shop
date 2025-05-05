import React from 'react';
import { Link } from 'react-router-dom';

type NavItemProps = {
  to: string;
  label: string;
};

const NavItem: React.FC<NavItemProps> = ({ to, label }) => (
  <Link to={to} className="px-3 py-2 hover:underline">
    {label}
  </Link>
);

export default NavItem;
