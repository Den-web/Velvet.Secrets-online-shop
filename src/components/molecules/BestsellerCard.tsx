import React from 'react';
import { Image, Text } from '../atoms';
import type { BestsellerItem } from '../../data/bestsellerData';
import { useTWBreakpoints } from '../../helpers/useTWBreakpoints';
import { getResponsiveImageSrc } from '../../helpers/mediaHelpers';

interface BestsellerCardProps {
  item: BestsellerItem;
}

export const BestsellerCard: React.FC<BestsellerCardProps> = ({ item }) => {
  const { isDesktop } = useTWBreakpoints();

  const imageSrc = getResponsiveImageSrc(
    isDesktop,
    item.imageDesktop,
    item.imageTabletMobile,
  );

  return (
    <div
      className="
        flex flex-col h-full flex-shrink-0 overflow-hidden 
        bg-white rounded 
        shadow-custom
        sm:mb-2.5 lg:mb-0
        w-full max-w-72
      "
    >
      <div className="h-56 w-full relative flex-shrink-0">
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
              text-base md:text-xl
              leading-[1.4]
              min-h-12 md:min-h-14
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
              text-sm md:text-base lg:text-lg
            "
          >
            {item.price}
          </Text>
        </div>
      </div>
    </div>
  );
};
