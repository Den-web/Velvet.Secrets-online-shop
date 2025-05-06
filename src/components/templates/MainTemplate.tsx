import React from 'react';
import Navigation from '../organisms/Navigation';

type MainTemplateProps = {
  children: React.ReactNode;
};

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => (
  <div className="min-h-screen w-full flex flex-col bg-gray-50 dark:bg-neutral-900">
    <Navigation />
    <div className="flex-1 flex flex-col items-center justify-center">
      <main className="container mx-auto px-4 py-8 flex-1 w-full">{children}</main>
    </div>
  </div>
);

export default MainTemplate;
