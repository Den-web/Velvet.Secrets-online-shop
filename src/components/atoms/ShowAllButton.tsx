import React from 'react';

interface ShowAllButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

export const ShowAllButton: React.FC<ShowAllButtonProps> = ({
  onClick,
  children = 'Подивитись все',
  className = '',
  ...rest
}) => (
  <button type="button" onClick={onClick} className={`show-all-btn ${className}`} {...rest}>
    {children}
  </button>
);
