import React from 'react';
import { Image, Text } from '../atoms';
import type { BestsellerItem } from '../../data/bestsellerData';
import { useTWBreakpoints } from '../../helpers/useTWBreakpoints';

interface BestsellerCardProps {
  item: BestsellerItem;
}

export const BestsellerCard: React.FC<BestsellerCardProps> = ({ item }) => {
  const { isDesktop } = useTWBreakpoints();

  const imageSrc = isDesktop ? item.imageDesktop : item.imageTabletMobile;

  return (
    <div
      className="
        flex flex-col h-full flex-shrink-0 overflow-hidden 
        bg-white rounded-[4px] 
        shadow-[1px_2px_10px_0_rgba(0,0,0,0.25)]
        sm:mb-2.5 lg:mb-0
        w-[286px] lg:w-[289px]
      "
    >
      <div className="h-[229px] w-full relative flex-shrink-0">
        <Image
          src={imageSrc}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5 bg-white flex flex-col flex-grow">
        <div className="mb-2">
          <Text
            className="
              font-manrope font-bold text-grey6
              text-[16px] md:text-[20px]
              leading-[1.4]
              /* min-h гарантує місце під 2 рядки */
              min-h-[46px] md:min-h-[56px]
              line-clamp-2
            "
          >
            {item.title}
          </Text>
        </div>

        <div className="mt-auto">
          <Text
            className="
              font-manrope font-normal text-grey6
              text-[14px] md:text-[16px] lg:text-[18px]
            "
          >
            {item.price}
          </Text>
        </div>
      </div>
    </div>
  );
};
