import React from 'react';
import { Title } from '../atoms/Title';
import { Text } from '../atoms/Text';
import Button from '../atoms/Button';
import { forYourSpaceData } from '../../data/forYourSpaceData';
import { useTitleLevels } from '../../helpers/useTitleLevels';

const ForYourSpaceContent: React.FC = () => {
  const { title, subtitle, buttonText, images, discounts, discountValue } =
    forYourSpaceData;

  const { screens, forYourSpaceTitleLevel, discountImageTitleLevel } =
    useTitleLevels();

  const discountImage = screens.lg
    ? discounts.desktop
    : screens.md
      ? discounts.tablet
      : discounts.mobile;

  const imageSection = (
    <div className="relative flex-shrink-0">
      <picture>
        <source srcSet={images.desktop} media="(min-width: 1024px)" />
        <source srcSet={images.tablet} media="(min-width: 768px)" />
        <img
          src={images.mobile}
          alt="Gift"
          className="rounded-[4px] w-[335px] h-[280px] md:w-[598px] md:h-[450px] object-cover"
        />
      </picture>

      <div
        className={`absolute flex items-center justify-center ${
          screens.lg || screens.md
            ? 'top-[-47px] left-[103px] w-[170px] h-[160px]'
            : 'top-[-30px] left-[46px] w-[114.75px] h-[108px]'
        }`}
      >
        <img
          src={discountImage}
          alt="Discount"
          className="absolute w-full h-full object-contain"
        />
        <Title
          style={{ color: 'white' }}
          level={discountImageTitleLevel}
          className="relative z-10 text-white text-center leading-none font-extrabold font-manrope"
        >
          -{discountValue}%
        </Title>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row items-center w-full max-w-[1920px] px-5 py-[30px] md:px-[85px] md:py-[47px] lg:px-[352px] lg:gap-[20px]">
      {imageSection}

      <div className="flex flex-col md:items-start md:text-left items-center text-center lg:items-start lg:text-left mt-[20px] lg:mt-0 w-full md:px-0 max-w-[335px] md:max-w-[598px] lg:max-w-none">
        <Title
          level={forYourSpaceTitleLevel}
          className="text-grey6 font-bold md:font-bold lg:font-semibold mb-[20px] lg:mb-[10px]"
        >
          {title}
        </Title>

        <Text className="text-grey6 font-normal text-[14px] leading-[160%] md:text-[16px] md:leading-[130%] lg:text-[18px] lg:leading-[150%] mt-0">
          {subtitle}
        </Text>

        <Button className="custom-btn-forYourSpace bg-transparent flex justify-center items-center px-[26px] py-[14px] w-[221px] h-[44px] text-[16px] lg:w-[263px] lg:h-[48px] lg:text-[20px] mt-[30px]">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default ForYourSpaceContent;
