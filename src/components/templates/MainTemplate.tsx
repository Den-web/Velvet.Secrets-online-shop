import React from 'react';
import Navigation from '../organisms/Navigation';

type MainTemplateProps = {
  children: React.ReactNode;
};

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => (
  <div className="min-h-screen w-full flex flex-col bg-white">
    <Navigation />
    <div className="flex-1 flex flex-col">
      <main className="flex-1 w-full">{children}</main>
    </div>
  </div>
);

export default MainTemplate;
