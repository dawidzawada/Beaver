import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {Languages} from '@app/enums/Language.enum.ts';
import {i18nResources} from '@app/i18n/resources.ts';
import 'intl-pluralrules';

i18n.use(initReactI18next).init({
  resources: i18nResources,
  lng: Languages.EN,
  fallbackLng: Languages.EN,
  interpolation: {
    escapeValue: false,
  },
});

export const currentLanguage = i18n.language;
export default i18n;
