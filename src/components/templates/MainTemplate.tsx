import React from 'react';
import Navigation from '../organisms/Navigation';
import HeroCarousel from '../organisms/HeroCarousel';
import BestsellersSection from '../organisms/BestsellersSection';
import DressWithLove from '../organisms/DressWithLove';
import ForYourSpaceSection from '../organisms/ForYourSpaceSection';
import ChooseYourPerfectFitSection from '../organisms/ChooseYourPerfectFitSection';

const MainTemplate: React.FC = () => (
  <div className="min-h-screen w-full flex flex-col bg-white">
    <Navigation />
    <HeroCarousel />
    <BestsellersSection />;
    <DressWithLove />
    <ForYourSpaceSection />
    <ChooseYourPerfectFitSection />
  </div>
);

export default MainTemplate;
