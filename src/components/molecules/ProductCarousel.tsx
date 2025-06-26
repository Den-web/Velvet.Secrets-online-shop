import React from 'react';
import { Carousel } from 'antd';
import type { Product } from '../../store/productsApi';
import { ProductCard } from './ProductCard';
import { Text } from '../atoms/Text';

import '../../styles/carousel-hack.css';

interface ProductCarouselProps {
  products: Product[];
}

const BESTSELLERS_CONTENT = {
  emptyMessage: 'Немає бестселерів для показу.',
} as const;

export const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  if (!products?.length) {
    return (
      <Text className="text-center text-gray-500 py-8">{BESTSELLERS_CONTENT.emptyMessage}</Text>
    );
  }

  // Групуємо товари по 2
  const grouped = [];
  for (let i = 0; i < products.length; i += 2) {
    grouped.push(products.slice(i, i + 2));
  }

  return (
    <>
      {/* 📱📲 Mobile / Tablet (slider) */}
      <div className="block lg:hidden overflow-hidden -mx-4 pl-4 pr-[15%]">
        <Carousel dots infinite={false} swipeToSlide draggable autoplay={false}>
          {grouped.map((group, index) => (
            <div key={index}>
              <div className="flex gap-4">
                {group.map((product) => (
                  <div key={product.id} className="w-[45vw] flex-shrink-0">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* 💻 Desktop (grid) */}
      <div className="hidden lg:grid grid-cols-2 gap-5 items-stretch mt-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
// import React, { useEffect, useState } from 'react';
// import { Carousel } from 'antd';
// import type { Product } from '../../store/productsApi';
// import { ProductCard } from './ProductCard';
// import { Text } from '../atoms/Text';

// interface ProductCarouselProps {
//   products: Product[];
//   isDesktop: boolean;
// }

// const BESTSELLERS_CONTENT = {
//   emptyMessage: 'Немає бестселерів для показу.',
// } as const;

// export const ProductCarousel: React.FC<ProductCarouselProps> = ({
//   products,
//   isDesktop,
// }) => {
//   const [hasMounted, setHasMounted] = useState(false);

//   useEffect(() => {
//     // это отключает "мигание" при первом рендере
//     setHasMounted(true);
//   }, []);

//   if (!hasMounted) return null;

//   if (!products?.length) {
//     return (
//       <Text className="text-center text-gray-500 py-8">
//         {BESTSELLERS_CONTENT.emptyMessage}
//       </Text>
//     );
//   }

//   if (isDesktop) {
//     return (
//       <div className="grid grid-cols-2 gap-5 items-stretch mt-6">
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     );
//   }

//   // Групуємо товари по 2
//   const grouped = [];
//   for (let i = 0; i < products.length; i += 2) {
//     grouped.push(products.slice(i, i + 2));
//   }

//   return (
//     <div className="overflow-hidden -mx-4 pl-4 pr-[15%] mt-6">
//       <Carousel dots infinite={false} swipeToSlide draggable>
//         {grouped.map((group, index) => (
//           <div key={index}>
//             <div className="flex gap-4">
//               {group.map((product) => (
//                 <div
//                   key={product.id}
//                   className="w-[85vw] sm:w-[70vw] md:w-[80vw] flex-shrink-0"
//                 >
//                   <ProductCard product={product} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };
