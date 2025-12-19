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

  const productsContent = !isDesktop ? (
    <div>
      <BestsellerCarousel items={items} />
    </div>
  ) : (
    <div className="grid grid-cols-2 gap-5 justify-items-start">
      {items.map((item) => (
        <BestsellerCard key={item.id} item={item} />
      ))}
    </div>
  );

  return (
    <section className="w-full bg-white mb-12 md:mb-20 lg:mb-24">
      <div
        className="
         max-w-screen-3xl mx-auto 
          flex flex-col lg:flex-row items-start 
          gap-5
          pl-2.5 pr-0 py-8
          md:pl-5 md:pr-0 md:py-8
          lg:px-0 lg:py-0
        "
      >
        {isDesktop && (
          <div
            className="
                hidden lg:block 
                lg:w-layoutMain  
                lg:shrink
                lg:h-auto 
                min-w-0
             "
          >
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
            lg:w-layoutAside lg:shrink-0
            lg:h-auto lg:py-10 
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
              className="
              text-grey6 font-manrope font-regular 
                text-sm md:text-base lg:text-lg"
            >
              {subtitle}
            </Text>
          </div>

          {productsContent}

          <div className="lg:mt-[0px]">
            <Button
              className="
              custom-btn-bestseller flex justify-center items-center
              mx-auto lg:mx-0
              bg-white text-grey6 font-manrope font-bold
              px-6 py-3.5
              text-base w-40 h-10
              md:text-base md:w-44 md:h-11
              lg:text-xl lg:w-52 lg:h-12
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
