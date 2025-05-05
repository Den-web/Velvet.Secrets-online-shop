import React from 'react';
import Navigation from '../organisms/Navigation';

type MainTemplateProps = {
  children: React.ReactNode;
};

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => (
  <div>
    <Navigation />
    <main className="p-6">{children}</main>
  </div>
);

export default MainTemplate;
