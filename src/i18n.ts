import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      input: {
        bust: 'Bust circumference (cm)',
        underbust: 'Underbust circumference (cm)',
        hips: 'Hip circumference (cm)',
      },
      error: {
        invalidMeasurements: 'Please enter valid measurements.',
      },
      size: {
        s: 'Your size: S',
        m: 'Your size: M',
        l: 'Your size: L',
        unknown: "Couldn't determine size.",
      },
    },
  },
  ua: {
    translation: {
      input: {
        bust: 'Об’єм грудей (см)',
        underbust: 'Обхват під грудьми (см)',
        hips: 'Об’єм стегон (см)',
      },
      error: {
        invalidMeasurements: 'Ви ввели не вірне значення.',
      },
      size: {
        s: 'Ваш розмір: S',
        m: 'Ваш розмір: M',
        l: 'Ваш розмір: L',
        unknown: 'Не вдалося визначити розмір.',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ua',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
