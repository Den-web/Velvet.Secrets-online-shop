import React from 'react';
import {
  SearchOutlined,
  HeartOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { Dropdown } from 'antd';
import type { DropdownProps } from 'antd';
import Logo from '../atoms/Logo';
import NavItem from '../molecules/NavItem';
import DropdownMenu from '../molecules/DropdownMenu';

interface NavLink {
  to: string;
  label: string;
}

interface IconLink {
  to: string;
  icon: typeof SearchOutlined;
  ariaLabel: string;
}

const NAV_LINKS: NavLink[] = [
  { to: '/underwear', label: 'Білизна' },
  { to: '/homewear', label: 'Домашній одяг' },
  { to: '/promotions', label: 'Акції' },
  { to: '/blog', label: 'Блог' },
  { to: '/about', label: 'Про нас' },
] as const;

const ICON_LINKS: IconLink[] = [
  { to: '/search', icon: SearchOutlined, ariaLabel: 'Пошук' },
  { to: '/favorites', icon: HeartOutlined, ariaLabel: 'Улюблене' },
  { to: '/cart', icon: ShoppingCartOutlined, ariaLabel: 'Кошик' },
  { to: '/account', icon: UserOutlined, ariaLabel: 'Профіль' },
] as const;

const DROPDOWN_PROPS: Partial<DropdownProps> = {
  trigger: ['hover'],
  placement: 'bottom',
  overlayClassName: 'w-screen left-0 right-0',
} as const;

const NewProductsDropdown: React.FC = () => (
  <Dropdown {...DROPDOWN_PROPS} dropdownRender={() => <DropdownMenu />}>
    <a
      href="#"
      onClick={(e) => e.preventDefault()}
      className="flex items-center gap-2 px-3 py-2 !text-black no-underline transition-all border-b-2 border-transparent hover:!text-[#c31f5c] focus:!text-[#c31f5c] hover:border-[#c31f5c] focus:border-[#c31f5c]"
    >
      <span>Новинки</span>
    </a>
  </Dropdown>
);

const Navigation: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow border-b border-purple-100 rounded-bl-[20px] rounded-br-[20px]">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />

        <div className="hidden md:flex gap-6 items-center">
          <NewProductsDropdown />
          {NAV_LINKS.map((link) => (
            <NavItem key={link.to} to={link.to} label={link.label} />
          ))}
        </div>

        <div className="flex gap-4">
          {ICON_LINKS.map((link) => (
            <NavItem key={link.to} to={link.to} icon={link.icon} aria-label={link.ariaLabel} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
