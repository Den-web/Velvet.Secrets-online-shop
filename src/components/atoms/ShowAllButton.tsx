import React from 'react';

interface ShowAllButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}

export const ShowAllButton: React.FC<ShowAllButtonProps> = ({ onClick, children = 'Подивитись все', className = '' }) => (
  <button
    type="button"
    onClick={onClick}
    className={className}
  >
    {children}
  </button>
); 