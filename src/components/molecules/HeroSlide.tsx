import React from 'react';
import Button from '../atoms/Button';

interface HeroSlideProps {
  title: string;
  subtitle: string;
  image: string;
}

const HeroSlide: React.FC<HeroSlideProps> = ({ title, subtitle, image }) => {
  return (
    <div
      className="w-full h-[900px] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div
        className={`
          absolute text-white font-manrope flex flex-col justify-start items-center text-center
          left-1/2 -translate-x-1/2 top-[307px] w-[278px] h-[198px]

          md:items-start md:text-left md:left-[30px] md:translate-x-0 md:top-[319px] md:w-[330px] md:h-[212px]
          lg:left-[352px] lg:top-[315px] lg:w-[616px] lg:h-[270px]
        `}
      >
        {/* Загальний блок для контенту з адаптивним gap */}
        <div className="flex flex-col items-center md:items-start gap-[20px] md:gap-[30px] lg:gap-[30px]">
          {/* Title + Subtitle */}
          <div className="flex flex-col items-center md:items-start gap-[10px] md:gap-[20px] lg:gap-[20px]">
            <h1 className="font-extrabold text-[24px] md:text-[32px] lg:text-5xl">{title}</h1>
            <p className="font-medium text-sm md:text-[16px] md:leading-[24px] lg:text-[24px] lg:leading-[36px]">
              {subtitle}
            </p>
          </div>

          {/* Кнопка */}
          <Button
            className={`
              custom-button-hero
              text-[16px] md:text-[16px] lg:text-[20px]
              w-[208px] h-[44px] px-[26px] py-[14px]
              md:w-[208px] md:h-[44px] md:px-10 md:py-5
              lg:w-[246px] lg:h-[48px] lg:px-10 lg:py-5
            `}
          >
            Дивитися колекцію
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
