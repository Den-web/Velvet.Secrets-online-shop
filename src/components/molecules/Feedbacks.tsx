// src/components/molecules/Feedbacks.tsx
import React from 'react';
import { Carousel, Grid } from 'antd';
import { feedbacksData } from '../../data/feedbacksData';
import { useTitleLevels } from '../../helpers/useTitleLevels';
import { Title, Text, Button, Image, Rate } from '../atoms/index';

const { useBreakpoint } = Grid;

export const Feedbacks: React.FC = () => {
  const screens = useBreakpoint();

  // Кількість карток на екрані залежно від брейкпоінтів
  const slidesToShow = screens.lg ? 4 : screens.md ? 2 : 1;
  const showDots = !screens.lg;
  const { feedbacksTitleLevel } = useTitleLevels();

  return (
    <div className="text-center max-w-[1920px] mx-auto px-[20px] md:px-[30px] lg:px-0">
      {/* Заголовок */}
      <Title
        level={feedbacksTitleLevel}
        className="text-grey6 font-moserat mb-10"
      >
        {feedbacksData.title}
      </Title>

      {/* Карусель */}
      <Carousel
        autoplay
        dots={showDots}
        slidesToShow={slidesToShow}
        className="leading 40 text-center bg-[#0b44ad] my-10"
      >
        {feedbacksData.list.map((item) => (
          <div key={item.id}>
            <div className="flex flex-col text-left p-6 shadow-md rounded-2xl bg-white h-full mb-8">
              {/* MX-3відступи між картками*/}
              {/* Аватар + Рейтинг */}
              <div className="flex items-center mb-5 ">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  className="w-14 h-14 rounded-[10px] object-cover pr-4 "
                />

                <Rate value={item.rate} />
              </div>
              {/* Текст відгуку */}
              <Text
                className="text-grey6 line-clamp-5 
              font-manrope font-regular text-[14px] md:text-[16px] lg:text-[14px] mb-5
              "
              >
                {item.text}
              </Text>
              {/* Ім’я */}
              <Text className="font-regular text-grey6 font-manrope text-[12px] md:text-[14px] lg:text-[14px]">
                {`— ${item.name}, ${item.city}`}
              </Text>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Кнопка */}
      <div className="mt-10">
        <Button
          type="primary"
          size="large"
          className=" custom-btn-feedbacks
        bg-white text-grey6 font-manrope font-bold
        px-[26px] py-[14px]
        text-[16px] w-[224px] h-[42px]
        md:text-[16px] md:w-[248px] md:h-[44px]
        lg:text-[20px] lg:w-[297px] lg:h-[48px]
         "
        >
          {feedbacksData.buttonText}
        </Button>
      </div>
    </div>
  );
};
