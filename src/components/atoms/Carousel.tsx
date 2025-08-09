import React from 'react';
import { Carousel as AntdCarousel } from 'antd';
import type { CarouselProps as AntdCarouselProps } from 'antd';

interface CarouselProps extends Omit<AntdCarouselProps, 'children'> {
  children: React.ReactNode;
  className?: string;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  className = '',
  arrows = false,
  infinite = false,
  dots = true,
  autoplay = false,
  ...restProps
}) => {
  return (
    <AntdCarousel
      arrows={arrows}
      infinite={infinite}
      dots={dots}
      autoplay={autoplay}
      className={className}
      {...restProps}
    >
      {children}
    </AntdCarousel>
  );
};
