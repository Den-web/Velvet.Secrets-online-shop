// src/components/molecules/Feedbacks.tsx
import React from 'react';
import { Carousel, Grid } from 'antd';
import { feedbacksData } from '../../data/feedbacksData';
import { useTitleLevels } from '../../helpers/useTitleLevels';
import { Title, Text, Button, Image, Rate } from '../atoms/index';

const { useBreakpoint } = Grid;

export const Feedbacks: React.FC = () => {
  const screens = useBreakpoint();
  const slidesToShow = screens.lg ? 4 : screens.md ? 2 : 1;
  const showDots = !screens.lg;
  const { feedbacksTitleLevel } = useTitleLevels();

  const feedbackSlides = feedbacksData.list.map((item) => (
    <div key={item.id}>
      <div className="flex flex-col text-left h-full mb-8 mr-12">
        <div className="flex items-center mb-5">
          <Image
            src={item.avatar}
            alt={item.name}
            className="w-14 h-14 rounded-[10px] object-cover pr-4"
          />
          <Rate value={item.rate} />
        </div>

        <Text
          className="text-grey6 line-clamp-5 
                     font-manrope font-regular text-[14px] md:text-[16px] lg:text-[14px] mb-5"
        >
          {item.text}
        </Text>

        <Text className="font-regular text-grey6 font-manrope text-[12px] md:text-[14px] lg:text-[14px]">
          {`— ${item.name}, ${item.city}`}
        </Text>
      </div>
    </div>
  ));

  return (
    <div className="text-center max-w-[1920px] mx-auto px-[20px] md:px-[30px] lg:px-0">
      <Title
        level={feedbacksTitleLevel}
        className="text-grey6 font-moserat mb-10"
      >
        {feedbacksData.title}
      </Title>

      <Carousel
        autoplay={true}
        dots={showDots ? { className: 'custom-dots-carousel' } : false}
        slidesToShow={slidesToShow}
        className="text-center my-10"
      >
        {feedbackSlides}
      </Carousel>

      <div className="mt-10">
        <Button
          type="primary"
          size="large"
          className="custom-btn-feedbacks
                     bg-white text-grey6 font-manrope font-bold
                     px-[26px] py-[14px]
                     text-[16px] w-[224px] h-[42px]
                     md:text-[16px] md:w-[248px] md:h-[44px]
                     lg:text-[20px] lg:w-[297px] lg:h-[48px]"
        >
          {feedbacksData.buttonText}
        </Button>
      </div>
    </div>
  );
};
