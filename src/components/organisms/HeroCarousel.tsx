import React from 'react';
import { Carousel } from 'antd';
import HeroSlide from '../molecules/HeroSlide';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { heroSlides } from '../../data/heroSlides';

const HeroCarousel: React.FC = () => {
  const width = useSelector((state: RootState) => state.window.width);
  const screen = width < 768 ? 'mobile' : width < 1024 ? 'tablet' : 'desktop';

  return (
    <Carousel autoplay dots className="relative z-10">
      {heroSlides.map((slide, index) => (
        <HeroSlide
          key={index}
          title={slide.title}
          subtitle={slide.subtitle}
          image={slide[screen]}
          screen={screen}
        />
      ))}
    </Carousel>
  );
};

export default HeroCarousel;
