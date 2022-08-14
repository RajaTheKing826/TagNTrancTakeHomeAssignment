import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import englishTranslation from './translations/en.json'
import hindiTranslation from './translations/hi.json'
import teluguTranslation from './translations/te.json'


const resources = {
  en: {
    translation:englishTranslation
  },
  hi: {
    translation:hindiTranslation
  },
  te: {
    translation:teluguTranslation
  }
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
  });


export default i18n;