import React from 'react';
import BaseCarousel from './BaseCarousel';
import { Title } from '../atoms/Title';
import { Text } from '../atoms/Text';
import Button from '../atoms/Button';
import { dressWithLoveData } from '../../data/dressWithLoveData';

const DressWithLoveCarousel: React.FC = () => {
  const { title, subtitle, slides, desktopSideImage } = dressWithLoveData;

  return (
    <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row">
      {/* LEFT BLOCK */}
      <div className="w-full lg:flex-1 px-[30px] lg:pl-[352px] lg:pr-[20px] flex items-center">
        <div className="flex flex-col w-full py-[40px] items-center text-center md:items-start md:text-left lg:w-[598px] gap-[30px]">
          <div className="flex flex-col w-full">
            <Title
              level={2}
              className="font-manrope text-[20px] font-bold md:text-[28px] lg:text-[36px] lg:font-semibold"
            >
              {title}
            </Title>

            <Text className="text-[14px] leading-[22.4px] font-normal text-grey6 md:text-[16px] md:leading-[20.8px] lg:text-[clamp(16px,1.2vw,18px)] lg:leading-[1.5]">
              {subtitle}
            </Text>
          </div>

          {/* CAROUSEL + BUTTON BLOCK */}
          <div className="flex flex-col items-center md:items-start gap-[24px] w-full">
            <div className="w-[375px] h-[400px] md:w-[708px] md:h-[598px] lg:w-[598px] lg:h-[673px] border border-gray-200 rounded flex-shrink-0 overflow-hidden">
              <BaseCarousel>
                {slides.map((slide, index) => (
                  <picture key={index} className="w-full h-full block">
                    <source srcSet={slide.desktop} media="(min-width: 1024px)" />
                    <source srcSet={slide.tablet} media="(min-width: 768px)" />
                    <img
                      src={slide.mobile}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover block"
                    />
                  </picture>
                ))}
              </BaseCarousel>
            </div>

            <Button className="w-[185px] h-[44px] px-[26px] py-[14px] flex flex-col justify-center items-center gap-2 text-base custom-btn-dressWithLove mx-auto lg:mx-0">
              Обрати комфорт
            </Button>
          </div>
        </div>
      </div>

      {/* RIGHT BLOCK */}
      {desktopSideImage && (
        <div className="hidden lg:block flex-shrink-0 w-[950px]">
          <img
            src={desktopSideImage}
            alt="Dress with Love"
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default DressWithLoveCarousel;
