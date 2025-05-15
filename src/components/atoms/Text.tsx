import React from 'react';

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export const Text: React.FC<TextProps> = ({ children}) => (
  <div>
    {children}
  </div>
); 