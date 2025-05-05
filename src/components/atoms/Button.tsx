import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button {...props} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
    {children}
  </button>
);

export default Button;
