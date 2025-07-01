// import React from 'react';
// import Button from '../atoms/Button';

// interface HeroSlideProps {
//   title: string;
//   subtitle: string;
//   image: string;
// }

// const HeroSlide: React.FC<HeroSlideProps> = ({ title, subtitle, image }) => {
//   return (
//     <div
//       className="
//         w-full
//         min-h-screen sm:min-h-[812px] md:min-h-[850px] lg:min-h-[900px]
//         bg-center bg-no-repeat
//         bg-contain sm:bg-cover
//         relative flex items-center
//       "
//       style={{ backgroundImage: `url(${image})` }}
//     >
//       <div
//         className="
//           text-white font-manrope w-full
//           flex justify-center md:justify-start
//           md:pl-[30px] lg:pl-[352px]
//         "
//       >
//         <div
//           className="
//             flex flex-col gap-5
//             items-center text-center
//             md:items-start md:text-left
//             max-w-xs md:max-w-sm lg:max-w-xl
//           "
//         >
//           <div className="flex flex-col gap-2.5 md:gap-5 items-center md:items-start">
//             <h1 className="font-extrabold text-2xl md:text-2xl lg:text-5xl">{title}</h1>
//             <p className="font-medium text-sm md:text-base md:leading-6 lg:text-2xl lg:leading-9">
//               {subtitle}
//             </p>
//           </div>

//           <Button
//             className="
//               custom-button-hero
//               text-base lg:text-xl
//               w-52 h-11 px-6 py-3
//               md:w-52 md:h-11 md:px-10 md:py-5
//               lg:w-60 lg:h-12 lg:px-10 lg:py-5
//             "
//           >
//             Дивитися колекцію
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSlide;

import React from 'react';
import Button from '../atoms/Button';

interface HeroSlideProps {
  title: string;
  subtitle: string;
  desktop: string;
  tablet: string;
  mobile: string;
}

const HeroSlide: React.FC<HeroSlideProps> = ({ title, subtitle, desktop, tablet, mobile }) => {
  return (
    <div className="w-full min-h-screen sm:min-h-[812px] md:min-h-[850px] lg:min-h-[900px] relative flex items-center">
      <picture className="absolute inset-0 w-full h-full z-0">
        <source srcSet={desktop} media="(min-width: 1024px)" />
        <source srcSet={tablet} media="(min-width: 768px)" />
        <img src={mobile} alt={title} className="w-full h-full object-cover" />
      </picture>

      <div className="relative z-10 text-white font-manrope w-full flex justify-center md:justify-start md:pl-[30px] lg:pl-[352px]">
        <div className="flex flex-col gap-5 items-center text-center md:items-start md:text-left max-w-xs md:max-w-sm lg:max-w-xl">
          <div className="flex flex-col gap-2.5 md:gap-5 items-center md:items-start">
            <h1 className="font-extrabold text-2xl md:text-2xl lg:text-5xl">{title}</h1>
            <p className="font-medium text-sm md:text-base md:leading-6 lg:text-2xl lg:leading-9">
              {subtitle}
            </p>
          </div>

          <Button className="custom-button-hero text-base lg:text-xl w-52 h-11 px-6 py-3 md:w-52 md:h-11 md:px-10 md:py-5 lg:w-60 lg:h-12 lg:px-10 lg:py-5">
            Дивитися колекцію
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
