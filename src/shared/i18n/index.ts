import { Languages } from "@shared/enums/Language.enum";
import { i18nResources } from "@shared/i18n/resources";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import "intl-pluralrules";

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
