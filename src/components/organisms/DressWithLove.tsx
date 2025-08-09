import React from 'react';
import DressWithLoveCarousel from '../molecules/DressWithLoveCarousel';

const DressWithLove: React.FC = () => {
  return (
    <section className="w-full overflow-x-hidden bg-white mb-[50px] md:mb-[80px] lg:mb-[100px]">
      <DressWithLoveCarousel />
    </section>
  );
};

export default DressWithLove;
