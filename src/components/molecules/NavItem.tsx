import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../atoms/index';

type NavItemProps = {
  to: string;
  label?: string;
  icon?:
    | React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    | React.ComponentType;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

const NavItem: React.FC<NavItemProps> = ({ to, label, icon, onClick }) => {
  const isIconOnly = icon && !label;

  return (
    <Link
      to={to}
      onClick={onClick}
      aria-label={label ?? 'navigation item'}
      className={`flex items-center gap-2 px-3 py-2 transition-all 
        ${
          isIconOnly
            ? 'text-black hover:text-[#c31f5c] focus:text-[#c31f5c]'
            : 'text-black border-b-2 border-transparent hover:border-[#c31f5c] focus:border-[#c31f5c] hover:text-[#c31f5c] focus:text-[#c31f5c] underline-offset-4'
        }
      `}
    >
      {icon && <Icon icon={icon} className="w-6 h-6" />}
      {label && <span>{label}</span>}
    </Link>
  );
};

export default NavItem;
