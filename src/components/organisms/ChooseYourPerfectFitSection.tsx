import React from 'react';
import ChooseYourPerfectFit from '../molecules/ChooseYourPerfectFit';

const ChooseYourPerfectFitSection: React.FC = () => {
  return (
    <section
      className="w-full bg-white flex justify-center
                 mb-[50px] md:mb-[80px] lg:mb-[100px]"
    >
      <ChooseYourPerfectFit />
    </section>
  );
};

export default ChooseYourPerfectFitSection;
