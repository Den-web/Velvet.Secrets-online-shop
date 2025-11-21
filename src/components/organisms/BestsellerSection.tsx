import React from 'react';
import { bestsellerData } from '../../data/bestsellerData';
import { Title, Text, Button, Image } from '../atoms';
import { BestsellerCard } from '../molecules/BestsellerCard';
import { BestsellerCarousel } from '../molecules/BestsellerCarousel';
import { useTitleLevels } from '../../helpers/useTitleLevels';
import { useTWBreakpoints } from '../../helpers/useTWBreakpoints';

const BestsellerSection: React.FC = () => {
  const { isDesktop } = useTWBreakpoints();
  const { bestsellerTitleLevel } = useTitleLevels();

  const { title, subtitle, buttonText, mainImage, items } = bestsellerData;

  const desktopGridItems = items.map((item) => (
    <BestsellerCard key={item.id} item={item} />
  ));

  return (
    <section className="w-full bg-white mb-[50px] md:mb-[80px] lg:mb-[100px]">
      <div
        className="
          max-w-[1920px] mx-auto 
          flex flex-col lg:flex-row items-start 
          gap-[20px]
          pl-[10px] pr-[0px] py-[30px]
          md:pl-[20px] md:pr-[0px] md:py-[30px]
          lg:px-0 lg:py-0
        "
      >
        {isDesktop && (
          <div className="hidden lg:block w-[952px] h-[1021px] flex-shrink-0">
            <Image
              src={mainImage}
              alt="bestseller main"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div
          className="
            w-full 
            lg:w-[598px] lg:h-[1021px]
            lg:flex-shrink-0 
            lg:py-[40px] 
            flex flex-col gap-5
          "
        >
          <div
            className="
            text-center md:text-left lg:text-left 
            md:ml-[15px] lg:ml-0
          "
          >
            <Title level={bestsellerTitleLevel} className="text-grey6 lg:!mb-0">
              {title}
            </Title>
            <Text
              className="text-grey6 font-manrope font-regular 
                      text-[14px] md:text-[16px] lg:text-[18px]"
            >
              {subtitle}
            </Text>
          </div>

          {!isDesktop ? (
            <div>
              <BestsellerCarousel items={items} />
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-[20px]">
              {desktopGridItems}
            </div>
          )}

          <div className="lg:mt-[0px]">
            <Button
              className="
                custom-btn-bestseller flex justify-center items-center
                mx-auto lg:mx-0
                bg-white text-grey6 font-manrope font-bold
                px-[26px] py-[14px]
                text-[16px] w-[164px] h-[42px]
                md:text-[16px] md:w-[180px] md:h-[44px]
                lg:text-[20px] lg:w-[212px] lg:h-[48px]
                whitespace-nowrap
              "
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestsellerSection;
