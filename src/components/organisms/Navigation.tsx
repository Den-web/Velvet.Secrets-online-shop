import React from 'react';
import {
  HeartOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Dropdown } from 'antd';

import Logo from '../atoms/Logo';
import NavItem from '../molecules/NavItem';
import DropdownMenu from '../molecules/DropdownMenu';
import SearchBar from '../molecules/SearchBar';

const Navigation: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 shadow border-b border-purple-100 rounded-bl-[20px] rounded-br-[20px]">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />

        {/* Центральне меню */}
        <div className="hidden md:flex gap-6 items-center">
          <Dropdown
            trigger={['hover']}
            placement="bottom"
            popupRender={() => <DropdownMenu />}
            overlayClassName="w-screen left-0 right-0"
          >
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="flex items-center gap-2 px-3 py-2 !text-black no-underline transition-all border-b-2 border-transparent hover:!text-[#c31f5c] hover:border-[#c31f5c]"
            >
              <span>Новинки</span>
            </a>
          </Dropdown>

          <NavItem to="/underwear" label="Білизна" />
          <NavItem to="/homewear" label="Домашній одяг" />
          <NavItem to="/promotions" label="Акції" />
          <NavItem to="/blog" label="Блог" />
          <NavItem to="/about" label="Про нас" />
        </div>

        {/* Іконки + пошук */}
        <div className="flex gap-4 items-center">
          <Dropdown
            trigger={['hover']}
            placement="bottomRight"
            dropdownRender={() => (
              <div className="p-4 bg-white shadow-xl rounded-xl">
                <SearchBar />
              </div>
            )}
          >
            <a href="#" onClick={(e) => e.preventDefault()} className="flex items-center">
              <SearchOutlined className="text-xl text-black hover:text-[#c31f5c]" />
            </a>
          </Dropdown>

          <NavItem to="/favorites" icon={HeartOutlined} />
          <NavItem to="/cart" icon={ShoppingCartOutlined} />
          <NavItem to="/account" icon={UserOutlined} />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
