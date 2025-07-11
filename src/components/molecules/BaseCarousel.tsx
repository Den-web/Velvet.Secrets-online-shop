import React, { useRef, useState } from 'react';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import type { CarouselRef } from 'antd/es/carousel';

interface BaseCarouselProps {
  children: React.ReactNode[];
  className?: string;
}

const BaseCarousel: React.FC<BaseCarouselProps> = ({ children, className = '' }) => {
  const carouselRef = useRef<CarouselRef>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === children.length - 1;

  const goTo = (index: number) => {
    carouselRef.current?.goTo(index);
  };

  const handleNext = () => {
    if (!isLastSlide) {
      goTo(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (!isFirstSlide) {
      goTo(currentSlide - 1);
    }
  };

  const baseBtnClasses = `
    absolute top-1/2 -translate-y-1/2 z-10 w-6 h-6 flex items-center justify-center
    rounded-full bg-[#C2185B] text-white text-[12px] transition-opacity
  `;

  const prevButtonClasses = `${baseBtnClasses} left-2 ${
    isFirstSlide ? 'opacity-30 cursor-not-allowed' : 'opacity-100'
  }`;

  const nextButtonClasses = `${baseBtnClasses} right-2 ${
    isLastSlide ? 'opacity-30 cursor-not-allowed' : 'opacity-100'
  }`;

  return (
    <div className={`relative ${className}`}>
      <Carousel ref={carouselRef} dots={false} draggable afterChange={setCurrentSlide}>
        {children}
      </Carousel>

      <button className={prevButtonClasses} onClick={handlePrev} disabled={isFirstSlide}>
        <LeftOutlined />
      </button>

      <button className={nextButtonClasses} onClick={handleNext} disabled={isLastSlide}>
        <RightOutlined />
      </button>
    </div>
  );
};

export default BaseCarousel;
