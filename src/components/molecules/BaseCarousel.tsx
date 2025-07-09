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

  const goTo = (index: number) => {
    if (carouselRef.current) {
      carouselRef.current.goTo(index);
    }
  };

  const handleNext = () => {
    if (currentSlide < children.length - 1) {
      goTo(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      goTo(currentSlide - 1);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <Carousel ref={carouselRef} dots={false} draggable afterChange={setCurrentSlide}>
        {children}
      </Carousel>

      {/* Prev Button */}
      <button
        className={`absolute top-1/2 left-2 -translate-y-1/2 z-10 w-6 h-6 flex items-center justify-center
    rounded-full bg-[#C2185B] text-white text-[12px]
    transition-opacity ${currentSlide === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
        onClick={handlePrev}
        disabled={currentSlide === 0}
      >
        <LeftOutlined />
      </button>

      {/* Next Button */}
      <button
        className={`absolute top-1/2 right-2 -translate-y-1/2 z-10 w-6 h-6 flex items-center justify-center
    rounded-full bg-[#C2185B] text-white text-[12px]
    transition-opacity ${
      currentSlide === children.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'
    }`}
        onClick={handleNext}
        disabled={currentSlide === children.length - 1}
      >
        <RightOutlined />
      </button>
    </div>
  );
};

export default BaseCarousel;
