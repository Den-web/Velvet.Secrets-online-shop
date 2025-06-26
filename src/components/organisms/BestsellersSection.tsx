import React from 'react';
import { ProductCarousel } from '../molecules/ProductCarousel';
import { Flex } from 'antd';
import Button from '../atoms/Button';
import { simpleProducts } from '../../data/products';
import { Title } from '../atoms/Title';
import { Text } from '../atoms/Text';
import { Image } from '../atoms/Image';
import '../../styles/carousel-hack.css';

const BESTSELLERS_IMAGE = {
  src: '/src/assets/imagesSection2/image-main@2x.jpg',
  alt: 'Жіноча білизна — головне зображення секції бестселерів',
} as const;

const BESTSELLERS_CONTENT = {
  title: 'Бестселлери',
  description: 'Кожен вибирає ці бра - ти наступна',
} as const;

export const BestsellersSection: React.FC = () => (
  <>
    <section
      aria-labelledby="bestsellers-title"
      className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white overflow-visible"
    >
      <div className="grid lg:grid-cols-2 items-stretch w-full lg:py-24">
        {/* Image Section */}
        <div className="relative w-full h-full">
          <div className="w-full h-full flex">
            <Image
              src={BESTSELLERS_IMAGE.src}
              alt={BESTSELLERS_IMAGE.alt}
              className="w-full min-h-full object-cover rounded hidden lg:block"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full flex items-center">
          <div className="w-full px-5 py-8 lg:py-10 lg:max-w-[600px]">
            <Title
              id="bestsellers-title"
              level={2}
              className="font-manrope font-bold lg:font-semibold text-[36px] leading-[1.2] text-grey6 mb-2.5 text-center md:text-left"
            >
              {BESTSELLERS_CONTENT.title}
            </Title>

            <Text className="font-manrope font-regular text-[18px] leading-[1.5] text-grey6 mb-7 block text-center md:text-left">
              {BESTSELLERS_CONTENT.description}
            </Text>

            <ProductCarousel products={simpleProducts} />

            <div className="flex justify-center lg:justify-start mt-6">
              <Flex gap="small" wrap>
                <Button className="my-btn">Подивитись все</Button>
              </Flex>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

// import React from 'react';
// import { useMediaQuery } from 'react-responsive';
// import { ProductCarousel } from '../molecules/ProductCarousel';
// import { simpleProducts } from '../../data/products';
// import { Title } from '../atoms/Title';
// import { Text } from '../atoms/Text';
// import { Image } from '../atoms/Image';
// import Button from '../atoms/Button';
// import { Flex } from 'antd';
// import mainImage from '../../assets/imagesSection2/image-main@2x.jpg';

// const BESTSELLERS_IMAGE = {
//   src: mainImage,
//   alt: 'Жіноча білизна — головне зображення секції бестселерів',
// } as const;

// const BESTSELLERS_CONTENT = {
//   title: 'Бестселлери',
//   description: 'Кожен вибирає ці бра - ти наступна',
// } as const;

// export const BestsellersSection: React.FC = () => {
//   const isDesktop = useMediaQuery({ minWidth: 1024 });

//   return (
//     <section
//       aria-labelledby="bestsellers-title"
//       className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white overflow-visible"
//     >
//       <div className="grid lg:grid-cols-2 items-stretch w-full lg:py-24">
//         {/* Image Section */}
//         <div className="relative w-full h-full">
//           <Image
//             src={BESTSELLERS_IMAGE.src}
//             alt={BESTSELLERS_IMAGE.alt}
//             className="w-full min-h-full object-cover rounded hidden lg:block"
//           />
//         </div>

//         {/* Content Section */}
//         <div className="w-full flex items-center">
//           <div className="w-full px-5 py-8 lg:py-10 lg:max-w-[600px]">
//             <Title
//               id="bestsellers-title"
//               level={2}
//               className="font-manrope font-bold lg:font-semibold text-[36px] leading-[1.2] text-grey6 mb-2.5 text-center md:text-left"
//             >
//               {BESTSELLERS_CONTENT.title}
//             </Title>

//             <Text className="font-manrope font-regular text-[18px] leading-[1.5] text-grey6 mb-7 block text-center md:text-left">
//               {BESTSELLERS_CONTENT.description}
//             </Text>

//             {/* Адаптивний рендер */}
//             <ProductCarousel products={simpleProducts} isDesktop={isDesktop} />

//             <div className="flex justify-center lg:justify-start mt-6">
//               <Flex gap="small" wrap>
//                 <Button
//                   className="px-[26px] py-[14px] rounded-lg font-manrope font-bold text-[20px] leading-[1] text-grey6
//                             border-2 border-solid border-pink5 bg-white
//                             hover:bg-pink5 hover:text-white hover:border-pink5
//                             transition delay-150 duration-300 ease-in-out"
//                 >
//                   Подивитись все
//                 </Button>
//               </Flex>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
