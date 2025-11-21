import React from 'react';
import { Carousel } from '../atoms';
import type { BestsellerItem } from '../../data/bestsellerData';
import { BestsellerCard } from './BestsellerCard';
import { useTWBreakpoints } from '../../helpers/useTWBreakpoints';

interface BestsellerCarouselProps {
  items: BestsellerItem[];
}

export const BestsellerCarousel: React.FC<BestsellerCarouselProps> = ({
  items,
}) => {
  useTWBreakpoints();

  const carouselSlides = items.map((item) => (
    <div key={item.id} className="h-full">
      <div className="pl-[4px] pr-[10px] pb-4 h-full">
        <BestsellerCard item={item} />
      </div>
    </div>
  ));

  return (
    <div className="relative overflow-hidden">
      <Carousel
        autoplay={true}
        dots={{ className: 'custom-dots-carousel' }}
        infinite={true}
        arrows={false}
        variableWidth={true}
        slidesToShow={1}
        slidesToScroll={1}
        className="pb-6"
      >
        {carouselSlides}
      </Carousel>
    </div>
  );
};
