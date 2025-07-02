import React from 'react';
import { Carousel } from 'antd';
import HeroSlide from '../molecules/HeroSlider';
import { heroSlides } from '../../data/heroSlides';

const HeroCarousel: React.FC = () => {
  return (
    <Carousel autoplay dots className="relative z-10">
      {heroSlides.map((slide, index) => (
        <HeroSlide
          key={index}
          title={slide.title}
          subtitle={slide.subtitle}
          desktop={slide.desktop}
          tablet={slide.tablet}
          mobile={slide.mobile}
        />
      ))}
    </Carousel>
  );
};

export default HeroCarousel;
