import React from 'react';

interface DescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const Description: React.FC<DescriptionProps> = ({ children}) => (
  <p>
    {children}
  </p>
); 