// import React from 'react';
// import Navigation from '../organisms/Navigation';
// import HeroCarousel from '../organisms/HeroCarousel';

// type MainTemplateProps = {
//   children: React.ReactNode;
// };

// const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => (
//   <div className="min-h-screen w-full flex flex-col bg-white">
//     <Navigation />
//     <HeroCarousel />
//     <div className="flex-1 flex flex-col">
//       <main className="flex-1 w-full">{children}</main>
//     </div>
//   </div>
// );

// export default MainTemplate;

import React from 'react';
import Navigation from '../organisms/Navigation';
import HeroCarousel from '../organisms/HeroCarousel';
import DressWithLove from '../organisms/DressWithLove';

type MainTemplateProps = {
  children: React.ReactNode;
};

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => (
  <div className="min-h-screen w-full flex flex-col bg-white">
    <Navigation />
    <HeroCarousel />
    <DressWithLove />
    <div className="flex-1 flex flex-col">
      <main className="flex-1 w-full">{children}</main>
    </div>
  </div>
);

export default MainTemplate;
