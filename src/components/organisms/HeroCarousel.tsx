import React from 'react';
import { Carousel } from 'antd';
import HeroSlide from '../molecules/HeroSlider';
import { heroSlides } from '../../data/heroSlides';

const HeroCarousel: React.FC = () => {
  return (
    <Carousel
      autoplay
      dots
      className="relative z-10 mb-[50px] md:mb-[80px] lg:mb-[100px]"
    >
      {heroSlides.map((slide, index) => (
        <HeroSlide
          key={index}
          title={slide.title}
          subtitle={slide.subtitle}
          buttonText={slide.buttonText}
          desktop={slide.desktop}
          tablet={slide.tablet}
          mobile={slide.mobile}
        />
      ))}
    </Carousel>
  );
};

export default HeroCarousel;
