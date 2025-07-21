import React from 'react';
import Navigation from '../organisms/Navigation';
import HeroCarousel from '../organisms/HeroCarousel';
import BestsellersSection from '../organisms/BestsellersSection';
import DressWithLove from '../organisms/DressWithLove';
import ForYourSpace from '../organisms/ForYourSpace';

const MainTemplate: React.FC = () => (
  <div className="min-h-screen w-full flex flex-col bg-white">
    <Navigation />
    <HeroCarousel />
    <BestsellersSection />;
    <DressWithLove />
    <ForYourSpace />
  </div>
);

export default MainTemplate;
