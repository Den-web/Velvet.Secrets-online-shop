import {
  forYourSpaceDesktopAndTablet,
  forYourSpaceMobile,
  forYourSpaceDiscounDesktopTablet,
  forYourSpaceDiscountMobile,
} from '../assets/icons/index';

const discountValue = 10;

export const forYourSpaceData = {
  title: 'Твій простір ніжності вже чекає',
  subtitle: `Створи акаунт і отримай -${discountValue}% на першу покупку, а також приємні бонуси, подарунки та натхнення в кожному листі`,
  buttonText: 'Отримати подарунок',
  images: {
    desktop: forYourSpaceDesktopAndTablet,
    tablet: forYourSpaceDesktopAndTablet,
    mobile: forYourSpaceMobile,
  },
  discounts: {
    desktop: forYourSpaceDiscounDesktopTablet,
    tablet: forYourSpaceDiscounDesktopTablet,
    mobile: forYourSpaceDiscountMobile,
  },
  discountValue,
};
