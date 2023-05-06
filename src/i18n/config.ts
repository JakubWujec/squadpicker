import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './en/en.json';
import translationPL from './pl/pl.json';

export const resources = {
  en: {
    translation: translationEN
  },
  pl: {
    translation: translationPL
  }
};
i18n.use(initReactI18next).init({
  lng: 'en',
  debug: true,
  resources: resources
});

export default i18n;
