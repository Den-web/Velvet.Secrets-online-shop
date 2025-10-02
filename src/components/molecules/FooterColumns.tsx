import React from 'react';
import { Title, Link } from '../atoms/index';
import { useTitleLevels } from '../../helpers/useTitleLevels';
import { footerData } from '../../data/footerData';
import {
  InstagramOutlined,
  FacebookOutlined,
  YoutubeOutlined,
  GoogleOutlined,
} from '@ant-design/icons';

const socialIconsMap: Record<string, React.ReactNode> = {
  instagram: <InstagramOutlined />,
  facebook: <FacebookOutlined />,
  youtube: <YoutubeOutlined />,
  google: <GoogleOutlined />,
};

export const FooterColumns: React.FC = () => {
  const { footerTitleColumnsLevel } = useTitleLevels();

  const socialSection = footerData.sections.find((section) =>
    section.items?.some((item) => item.iconKey),
  );

  const normalSections = footerData.sections.filter(
    (section) => section !== socialSection,
  );

  const renderSection = (section: (typeof footerData.sections)[number]) => (
    <div key={section.title} className="flex-shrink-0">
      <Title
        level={footerTitleColumnsLevel}
        className="
          font-semibold !text-white 
          sm:text-[14px] 
          md:text-[16px] mb-[20px] 
          lg:text-[18px]
        "
      >
        {section.title}
      </Title>
      <ul className="flex flex-col gap-[1.25rem] mt-5">
        {section.items?.map((item) => (
          <li key={item.label}>
            <Link
              href={item.to ?? '#'}
              className="!text-white custom-link-footer"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  const renderSocialSection = (
    section: (typeof footerData.sections)[number],
  ) => (
    <div key={section.title} className="flex-shrink-0">
      <Title
        level={footerTitleColumnsLevel}
        className="
          font-manrope font-regular !text-white 
          sm:text-[14px] sm:mt-[20px] 
          md:text-[16px] md:mt-0  
          lg:text-[18px]
        "
      >
        {section.title}
      </Title>
      <ul className="flex gap-4 mt-5">
        {section.items?.map((item) => (
          <li key={item.iconKey}>
            <Link
              href={item.to ?? '#'}
              aria-label={item.label}
              className="custom-social-icon !text-white text-2xl "
            >
              {item.iconKey && socialIconsMap[item.iconKey]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div
      className="
        font-manrope font-regular text-white flex-1 
        sm:text-[14px] sm:grid sm:grid-cols-2 sm:whitespace-nowrap
        md:text-[16px] md:flex md:justify-between md:items-start
        lg:text-[18px] lg:flex lg:flex-row lg:flex-nowrap lg:justify-between lg:items-start
      "
    >
      {normalSections.map((section) => renderSection(section))}
      {socialSection && renderSocialSection(socialSection)}
    </div>
  );
};
