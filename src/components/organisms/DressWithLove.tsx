import React from 'react';
import Title from '../atoms/Title';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import DressCarousel from './DressCarousel'; // або інший компонент, якщо він інакший

const DressWithLove: React.FC = () => {
  return (
    <section className="w-full px-4 py-10 md:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-6 md:gap-10 lg:flex-row lg:items-start lg:justify-between">
        {/* LEFT BLOCK */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left gap-4 md:gap-6 lg:max-w-[50%]">
          <Title className="text-2xl md:text-3xl lg:text-4xl">Одягайся з любов’ю до себе</Title>
          <Text className="text-sm md:text-base lg:text-lg">
            М’яка білизна, затишний одяг і натхнення для твого щоденного комфорту.
          </Text>

          <div className="w-full mt-4 md:mt-6">
            <DressCarousel />
          </div>

          <div className="mt-4 md:mt-6">
            <Button className="custom-button-hero">Обрати комфорт</Button>
          </div>
        </div>

        {/* RIGHT BLOCK – зображення тільки для десктопу */}
        <div className="hidden lg:block lg:max-w-[45%]">
          <img
            src="/assets/dress-section.jpg"
            alt="Dress with Love"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default DressWithLove;
