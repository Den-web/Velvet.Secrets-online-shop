import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  className = '',
}) => {
  return (
    <a
      href={href}
      className={`
        text-[#121212]
        text-[14px]
        font-normal
        font-[Manrope]
        transition-all
        duration-200
        hover:text-[#c31f5c]
        focus:text-[#c31f5c]
        hover:underline
        focus:underline
        underline-offset-4
        ${className}
      `}
    >
      {children}
    </a>
  );
};
