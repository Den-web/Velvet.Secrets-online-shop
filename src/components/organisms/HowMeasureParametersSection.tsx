import React from 'react';
import { HowMeasureParameters } from '../molecules/HowMeasureParameters';

const HowMeasureParametersSection: React.FC = () => {
  return (
    <section
      className="w-full [background:rgba(249,187,210,0.20)]  
                 flex justify-center
                 mb-[50px] md:mb-[80px] lg:mb-[100px]"
    >
      <HowMeasureParameters />
    </section>
  );
};

export default HowMeasureParametersSection;
