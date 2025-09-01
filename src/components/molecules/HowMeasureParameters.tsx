import React from 'react';
import { Title, Image } from '../atoms/index';
import { howMeasureParametersData } from '../../data/howMeasureParametersData';
import { useTitleLevels } from '../../helpers/useTitleLevels';
import { HowMeasureStepCard } from '../molecules/HowMeasureStepCard';

import {
  WomanOutlined,
  CalculatorOutlined,
  SmileOutlined,
} from '@ant-design/icons';

const iconMap = {
  woman: WomanOutlined,
  calculator: CalculatorOutlined,
  smile: SmileOutlined,
};

export const HowMeasureParameters: React.FC = () => {
  const { title, steps, images } = howMeasureParametersData;
  const { howMeasureParametersLevel } = useTitleLevels();

  const stepCards = steps.map((step, index) => {
    const StepIcon = iconMap[step.iconKey as keyof typeof iconMap];
    return (
      <HowMeasureStepCard key={index} step={{ ...step, icon: StepIcon }} />
    );
  });

  return (
    <div
      className="flex w-[375px] p-[30px] flex-col items-center gap-[20px]    
      md:w-[768px] md:items-start                                
      lg:inline-flex lg:w-auto lg:flex-row lg:items-start lg:p-[50px]"
    >
      <div className="flex flex-col lg:flex-row-reverse lg:gap-[20px] lg:items-start">
        <div className="hidden lg:block lg:w-[598px]">
          <Image
            src={images.desktop}
            alt={images.alt}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="w-full lg:w-[598px]">
          <div className="w-full md:w-[500px] lg:w-[598px]">
            <Title
              level={howMeasureParametersLevel}
              className="font-manrope font-bold text-lg text-grey6 mb-5 md:mb-5 lg:mb-[30px] 
              text-center md:text-left"
            >
              {title}
            </Title>
          </div>

          <div className="flex flex-col gap-12 text-left w-full md:w-[515px] lg:w-[515px]">
            {stepCards}
          </div>
        </div>
      </div>
    </div>
  );
};
