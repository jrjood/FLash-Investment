import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        welcome: 'Welcome',
      },
    },

    ar: {
      translation: {
        welcome: 'مرحبا',
      },
    },
  },
});

export default i18n;
