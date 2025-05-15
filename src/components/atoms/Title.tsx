import React from 'react';

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

export const Title: React.FC<TitleProps> = ({ children}) => (
  <div>
    {children}
  </div>
); 