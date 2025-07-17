import React from 'react';
import { Grid } from 'antd';
import BaseCarousel from './BaseCarousel';
import { Title } from '../atoms/Title';
import { Text } from '../atoms/Text';
import Button from '../atoms/Button';
import { dressWithLoveData } from '../../data/dressWithLoveData';

const { useBreakpoint } = Grid;

const DressWithLoveCarousel: React.FC = () => {
  const { title, subtitle, buttonText, slides, desktopSideImage } =
    dressWithLoveData;

  const screens = useBreakpoint();

  let carouselTitleLevel: 1 | 2 | 3 | 4 | 5 = 4;

  if (screens.sm && !screens.md) {
    carouselTitleLevel = 4;
  } else if (screens.md && !screens.lg) {
    carouselTitleLevel = 2;
  } else if (screens.lg) {
    carouselTitleLevel = 1;
  } else {
    carouselTitleLevel = 4;
  }

  const renderedSlides = slides.map((slide, index) => (
    <picture key={index} className="w-full h-full block">
      <source srcSet={slide.desktop} media="(min-width: 1024px)" />
      <source srcSet={slide.tablet} media="(min-width: 768px)" />
      <img
        src={slide.mobile}
        alt={`Slide ${index + 1}`}
        className="w-full h-full object-cover block"
      />
    </picture>
  ));

  const desktopImageBlock = desktopSideImage && (
    <div className="hidden lg:block flex-shrink-0 w-full max-w-[950px]">
      <img
        src={desktopSideImage}
        alt="Dress with Love"
        className="w-full h-full object-cover"
      />
    </div>
  );

  return (
    <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row">
      <div className="w-full lg:flex-1 px-[30px] lg:pl-[352px] lg:pr-[20px] flex items-center">
        <div className="flex flex-col w-full py-[40px] items-center text-center md:items-start md:text-left lg:w-[598px] gap-[30px]">
          <div className="flex flex-col w-full">
            <Title
              level={carouselTitleLevel}
              className="font-manrope font-bold lg:font-semibold"
            >
              {title}
            </Title>

            <Text className="text-[14px] leading-[22.4px] font-normal text-grey6 md:text-[16px] md:leading-[20.8px] lg:text-[clamp(16px,1.2vw,18px)] lg:leading-[1.5]">
              {subtitle}
            </Text>
          </div>

          <div className="flex flex-col items-center md:items-start gap-[24px] w-full">
            <div className="w-[375px] h-[400px] md:w-[708px] md:h-[598px] lg:w-[598px] lg:h-[673px] border border-gray-200 rounded flex-shrink-0 overflow-hidden">
              <BaseCarousel>{renderedSlides}</BaseCarousel>
            </div>

            <Button className="custom-btn-dressWithLove bg-pink5 text-white w-[185px] h-[44px] px-[26px] py-[14px] flex flex-col justify-center items-center gap-2 text-base mx-auto lg:mx-0">
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
      {desktopImageBlock}
    </div>
  );
};

export default DressWithLoveCarousel;
