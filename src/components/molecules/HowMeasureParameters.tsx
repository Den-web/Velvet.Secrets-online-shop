import React from 'react';
import { Title, Text, Image, Icon, List, ListItem } from '../atoms';
import { howMeasureParametersData } from '../../data/howMeasureParametersData';
import { useTitleLevels } from '../../helpers/useTitleLevels';
import { Badge } from 'antd';
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
  const { howMeasureParametersLevel, howMeasureParametersLevel2 } =
    useTitleLevels();

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
            {steps.map((step, index) => {
              const StepIcon = iconMap[step.iconKey as keyof typeof iconMap];
              return (
                <div key={index}>
                  <div className="flex items-start gap-4 mb-4">
                    {StepIcon && (
                      <Icon icon={StepIcon} color="grey6" fontSize={24} />
                    )}
                    <Title
                      level={howMeasureParametersLevel2}
                      className="font-manrope font-bold text-grey6 text-left"
                    >
                      {step.title}
                    </Title>
                  </div>
                  {step.description && (
                    <Text
                      className="font-manrope font-regular text-grey6
                      text-[14px] md:text-[16px] lg:text-[18px]
                      leading-[160%] md:leading-[130%] lg:leading-[150%] text-left"
                    >
                      {step.description}
                    </Text>
                  )}
                  {step.list && (
                    <List
                      dataSource={step.list}
                      renderItem={(item) => (
                        <ListItem
                          className="!border-0 !px-0 !py-1 !m-0 flex items-start gap-2 
                        !justify-start !flex-nowrap"
                        >
                          <Badge color="#F16393" className="!p-0 !align-top" />
                          <Text
                            className="font-manrope font-regular text-grey6
                                       text-[14px] md:text-[16px] lg:text-[18px]
                                       leading-[160%] md:leading-[130%] lg:leading-[150%]
                                       text-left"
                          >
                            {item}
                          </Text>
                        </ListItem>
                      )}
                    />
                  )}
                  {step.note && (
                    <div className="w-full md:w-[515px] lg:w-full mt-[20px]">
                      <Text
                        className="font-manrope font-regular text-grey6 mt-[30px]
                        text-[14px] md:text-[16px] lg:text-[18px]
                        leading-[160%] md:leading-[130%] lg:leading-[150%] text-left"
                      >
                        {step.note}
                      </Text>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
