import React from 'react';
import { footerData } from '../../data/footerData';
import { SubscribeForm } from '../molecules/SubscribeForm';
import { FooterColumns } from '../molecules/FooterColumns';
import { Logo } from '../molecules/Logo';
import { Grid } from 'antd';

const { useBreakpoint } = Grid;

const FooterSection: React.FC = () => {
  const screens = useBreakpoint();

  const backgroundImage = screens.lg
    ? footerData.background.desktop
    : screens.md
      ? footerData.background.tablet
      : footerData.background.mobile;

  return (
    <footer
      className="w-full text-white font-manrope"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
      }}
    >
      <div
        className="
          mx-auto 
          sm:w-[335px] sm:px-[30px] sm:pt-[52px] sm:pb-[40px]
          md:w-[708px] md:px-[30px] md:pt-[30px] md:pb-[40px]
          lg:w-[1268px] lg:px-[50px] lg:pt-[30px] lg:pb-[30px]
          backdrop-blur-[50px] bg-[rgba(18,18,18,0.2)] rounded-[20px]
        "
      >
        <div className="flex justify-center mb-[57px]">
          <Logo type="footer" />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-[50px]">
          <SubscribeForm />
          <FooterColumns />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
