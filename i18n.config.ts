import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import { en } from './App/translations';
import 'intl-pluralrules';

const resources = {
  en: {
    translation: en,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
