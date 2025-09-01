import React from 'react';
import { Title, Text, Icon, List, ListItem, Badge } from '../atoms/index';
import { useTitleLevels } from '../../helpers/useTitleLevels';

type Step = {
  title: string;
  description?: string;
  list?: string[];
  note?: string;
  icon?: React.ComponentType;
};

interface HowMeasureStepCardProps {
  step: Step;
}

export const HowMeasureStepCard: React.FC<HowMeasureStepCardProps> = ({
  step,
}) => {
  const { howMeasureParametersLevel2 } = useTitleLevels();
  const { title, description, list, note, icon } = step;

  const textClasses = `font-manrope font-regular text-grey6
    text-[14px] md:text-[16px] lg:text-[18px]
    leading-[160%] md:leading-[130%] lg:leading-[150%] text-left`;

  return (
    <div>
      <div className="flex items-start gap-4 mb-4">
        {icon && <Icon icon={icon} color="grey6" fontSize={24} />}
        <Title
          level={howMeasureParametersLevel2}
          className="font-manrope font-bold text-grey6 text-left"
        >
          {title}
        </Title>
      </div>

      {description && <Text className={textClasses}>{description}</Text>}

      {list && (
        <List
          dataSource={list}
          renderItem={(item, index) => (
            <ListItem
              key={index}
              className="!border-0 !px-0 !py-1 !m-0 flex items-start gap-2 
              !justify-start !flex-nowrap"
            >
              <Badge color="#F16393" className="!p-0 !align-top" />
              <Text className={textClasses}>{item}</Text>
            </ListItem>
          )}
        />
      )}

      {note && (
        <div className="w-full md:w-[515px] lg:w-full mt-[20px]">
          <Text className={`${textClasses} mt-[30px]`}>{note}</Text>
        </div>
      )}
    </div>
  );
};
