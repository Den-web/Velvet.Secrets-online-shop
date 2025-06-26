import React from 'react';
import Button from '../atoms/Button';

interface HeroSlideProps {
  title: string;
  subtitle: string;
  image: string;
  screen: 'desktop' | 'tablet' | 'mobile';
}

const HeroSlide: React.FC<HeroSlideProps> = ({ title, subtitle, image, screen }) => {
  return (
    <div
      className="w-full h-[900px] bg-[#364D79] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div
        className={`
          absolute text-white font-manrope
          ${
            screen === 'desktop'
              ? 'top-[315px] left-[352px] w-[616px] h-[270px] flex flex-col items-start justify-start gap-[30px]'
              : screen === 'tablet'
                ? 'top-[319px] left-[30px] w-[330px] h-[212px] flex flex-col items-start justify-start gap-[30px]'
                : 'top-[307px] left-1/2 -translate-x-1/2 w-[278px] h-[198px] flex flex-col items-center justify-start text-center gap-[20px]'
          }
        `}
      >
        <div
          className={`
            flex flex-col
            ${screen === 'mobile' ? 'items-center gap-[10px]' : 'items-start gap-[10px]'}
          `}
        >
          <h1
            className={`
              font-extrabold 
              ${
                screen === 'desktop'
                  ? 'text-5xl'
                  : screen === 'tablet'
                    ? 'text-[32px]'
                    : 'text-[24px]'
              }
            `}
          >
            {title}
          </h1>

          <p
            className={`
              font-medium 
              ${screen === 'desktop' ? 'text-base' : 'text-sm'}
            `}
          >
            {subtitle}
          </p>
        </div>

        <div
          className={`
            flex flex-col gap-[8px]
            ${screen === 'mobile' ? 'items-center justify-center' : 'items-start justify-start'}
          `}
        >
          <Button
            className={`
    bg-pink5 text-white font-medium border border-transparent transition-all duration-300
    hover:bg-white hover:border-pink5 hover:text-grey6
    text-[16px] md:text-[16px] lg:text-[20px]
    shadow-[0_2px_0_0_rgba(195,31,92,0.1)]
    ${
      screen === 'desktop'
        ? 'w-[246px] h-[48px] px-10 py-5'
        : screen === 'tablet'
          ? 'w-[208px] h-[44px] px-10 py-5'
          : 'w-[208px] h-[44px] px-[26px] py-[14px]'
    }
  `}
          >
            Дивитися колекцію
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
