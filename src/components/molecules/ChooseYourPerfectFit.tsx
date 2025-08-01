import React, { useState } from 'react';
import { Title } from '../atoms/Title';
import { Text } from '../atoms/Text';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Link from '../atoms/Link';
import { useTitleLevels } from '../../helpers/useTitleLevels';
import { chooseYourPerfectFitData } from '../../data/chooseYourPerfectFitData';

const ChooseYourPerfectFit: React.FC = () => {
  const [calculatedSize, setCalculatedSize] = useState<string | null>(null);
  const { chooseYourPerfectFitLevel } = useTitleLevels();

  const { title, subtitle, linkText, buttonText, secondaryButtonText, images } =
    chooseYourPerfectFitData;

  const handleCalculate = () => {
    setCalculatedSize('Ваш розмір: M');
  };

  const renderResponsiveImage = () => (
    <div
      className="
        sm:w-[315px] sm:h-[223px]
        md:w-[297px] md:h-[364px]
        lg:w-[950px] lg:h-[577px]
        rounded-[4px] border border-white box-border
        overflow-hidden flex justify-center items-center
        flex-shrink-0
      "
    >
      <picture>
        <source srcSet={images.desktop} media="(min-width: 1024px)" />
        <source srcSet={images.tablet} media="(min-width: 768px)" />
        <img
          src={images.mobile}
          alt="perfect fit"
          className="w-full h-full object-cover rounded-[4px]"
        />
      </picture>
    </div>
  );

  return (
    <div
      className="
        sm:w-full sm:p-[30px]
        md:w-[768px] md:flex md:flex-col md:justify-center md:items-start md:p-[30px]
        lg:w-[1920px] lg:flex lg:flex-row lg:items-center lg:gap-[20px] lg:p-0 lg:mx-auto
      "
    >
      <div
        className="
          sm:text-center 
          md:text-left md:mb-0
          lg:hidden
        "
      >
        <Title
          level={chooseYourPerfectFitLevel}
          className="text-grey6 font-bold leading-[120%] mb-[20px]"
        >
          {title}
        </Title>

        <Text className="text-grey6 text-[14px] md:text-[16px] lg:text-[18px] leading-[160%] md:leading-[130%] lg:leading-[150%] mb-[10px]">
          {subtitle}
        </Text>

        <div className="block">
          <Link
            href="#"
            className="text-pink5 text-[14px] underline mb-[20px] inline-block"
          >
            {linkText}
          </Link>
        </div>
      </div>

      <div
        className="
          sm:flex sm:flex-col sm:items-center sm:gap-[20px]
          md:flex md:flex-row md:items-start md:gap-[20px]
          lg:flex-row lg:items-center lg:gap-[20px]
          w-full
        "
      >
        {renderResponsiveImage()}

        <div className="flex flex-col items-start box-border">
          <div className="hidden lg:block">
            <Title
              level={chooseYourPerfectFitLevel}
              className="text-grey6 leading-[120%] mb-[20px]"
            >
              {title}
            </Title>

            <Text className="text-grey6 text-[18px] leading-[150%] mb-[10px]">
              {subtitle}
            </Text>

            <Link
              href="#"
              className="block text-pink5 text-[18px] underline lg:mb-[30px] md:mb-[20px]"
            >
              {linkText}
            </Link>
          </div>

          <div className="flex flex-col gap-[20px] md:gap-[30px] mb-[20px] w-full sm:w-[315px] md:w-[394px] lg:w-[558px]">
            <Input
              placeholder="Об’єм грудей (см)"
              className="w-full h-[52px] text-[14px] hover:border-pink5 focus:border-pink5 focus:outline-none"
            />
            <Input
              placeholder="Обхват під грудьми (см)"
              className="w-full h-[52px] text-[14px] hover:border-pink5 focus:border-pink5 focus:outline-none"
            />
            <Input
              placeholder="Об’єм стегон (см)"
              className="w-full h-[52px] text-[14px] hover:border-pink5 focus:border-pink5 focus:outline-none"
            />
          </div>

          {calculatedSize && (
            <Text
              className="
                font-manrope font-bold
                text-[16px] md:text-[20px] lg:text-[24px]
                mb-[20px] lg:mb-[30px] w-full text-left
              "
            >
              {calculatedSize}
            </Text>
          )}

          <div
            className="
              flex flex-col gap-[10px] w-full
              md:flex-col md:gap-[10px]
              lg:flex-row lg:gap-[20px] lg:justify-between
            "
          >
            <Button
              onClick={handleCalculate}
              className="
                custom-btn-ChooseYourPerfectFit
                bg-pink5 text-white rounded-[8px]
                w-full h-[44px] text-[16px]
                md:w-[394px] md:h-[44px]
                lg:w-[179px] lg:h-[48px]
              "
            >
              {buttonText}
            </Button>

            <Button
              className="
                custom-btn-ChooseYourPerfectFitTwo
                text-grey6 rounded-[8px]
                w-full h-[44px] text-[16px]
                md:w-[394px] md:h-[44px]
                lg:w-[359px] lg:h-[48px]
              "
            >
              {secondaryButtonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseYourPerfectFit;
